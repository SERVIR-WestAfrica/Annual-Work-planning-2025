
# -*- coding: utf-8 -*-
"""
Created on Fri Jul 19 23:39:24 2024

@author: team

This script processes land cover data for various years using Google Earth Engine (GEE) and outputs the results as shapefiles.
"""

# extract_s2_planet_ncfi
class Sentinel2Processor:
    def __init__(self, year, months, indices, data_fc):
        """
        Initialize the Sentinel2Processor.

        Parameters:
        year (int): The year of the data.
        months (list): List of months to process.
        indices (list): List of indices to calculate.
        data_fc (ee.FeatureCollection): The feature collection to process.
        """
        self.year = year
        self.months = months
        self.indices = indices
        self.data_fc = data_fc

    def calculate_indices(self, image):
        """
        Calculate specified indices for a given image.

        Parameters:
        image (ee.Image): The image to calculate indices for.

        Returns:
        ee.Image: The image with added indices.
        """
        index_functions = {
            'NDVI': lambda img: img.normalizedDifference(['B8', 'B4']).rename('NDVI')
        }

        for index in self.indices:
            if index in index_functions:
                image = image.addBands(index_functions[index](image))

        return image

    def normalize_band(self, image, band_name):
        """
        Normalize a specified band of the image.

        Parameters:
        image (ee.Image): The image containing the band to normalize.
        band_name (str): The name of the band to normalize.

        Returns:
        ee.Image: The normalized band.
        """
        band = image.select(band_name).toFloat()
        min_max = band.reduceRegion(
            reducer=ee.Reducer.minMax(),
            geometry=image.geometry(),
            scale=10,
            maxPixels=1e13
        )
        min_val = ee.Number(min_max.get(ee.String(band_name).cat('_min')))
        max_val = ee.Number(min_max.get(ee.String(band_name).cat('_max')))
        normalized = band.subtract(min_val).divide(max_val.subtract(min_val)).rename(ee.String(band_name))
        return normalized

    def process_image(self, image):
        """
        Process a single image by calculating indices and normalizing bands.

        Parameters:
        image (ee.Image): The image to process.

        Returns:
        ee.Image: The processed image with calculated indices and normalized bands.
        """
        with_indices = self.calculate_indices(image)
        bands_to_normalize = ['B2', 'B3', 'B4', 'B5', 'B8', 'B11']
        normalized_bands = ee.Image.cat([self.normalize_band(with_indices, band) for band in bands_to_normalize])
        return normalized_bands.addBands(with_indices.select(self.indices))

    def process_all_months(self):
        """
        Process images for all specified months and combine them into a single image collection.

        Returns:
        ee.Image: The combined image collection with bands renamed to include the month abbreviation.
        """
        processed_images = []
        month_names = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

        for month_index, month in enumerate(self.months):
            start_date = ee.Date.fromYMD(self.year, month, 1)
            end_date = ee.Date.fromYMD(self.year, ee.Number(month).add(1), 1)

            collection = ee.ImageCollection("COPERNICUS/S2_HARMONIZED") \
                .filterBounds(self.data_fc) \
                .filterDate(start_date, end_date) \
                .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))

            num_images = self.retry_function(collection.size().getInfo)
            print(f"Number of images for {month}/{self.year}: {num_images}")

            processed_collection = collection.map(self.process_image)
            composite = processed_collection.median().toFloat()
            # Create the date string in the format "MMYY"
            date_str = month_names[month - 1]

            def rename_band(band_name):
                return ee.String(date_str).cat('_').cat(band_name)

            new_band_names = composite.bandNames().map(rename_band)
            print(new_band_names.getInfo())
            composite = composite.rename(new_band_names)

            processed_images.append(composite)

            # Add a delay between processing months
            time.sleep(random.uniform(5, 35))

        return ee.ImageCollection(processed_images).toBands()

    def retry_function(self, func, max_retries=20, initial_delay=1, factor=2):
        """
        Retry a function with exponential backoff.

        Parameters:
        func (function): The function to retry.
        max_retries (int, optional): The maximum number of retries. Default is 20.
        initial_delay (int, optional): The initial delay between retries in seconds. Default is 1.
        factor (int, optional): The factor by which to multiply the delay after each retry. Default is 2.

        Returns:
        Any: The return value of the function.
        """
        retries = 0
        while retries < max_retries:
            try:
                return func()
            except ee.ee_exception.EEException as e:
                if "Too many concurrent aggregations" in str(e):
                    retries += 1
                    if retries == max_retries:
                        raise
                    delay = initial_delay * (factor ** retries) + random.uniform(0, 1)
                    print(f"Rate limit hit. Retrying in {delay:.2f} seconds...")
                    time.sleep(delay)
                else:
                    raise

    def add_bands_to_fc(self, image):
        """
        Add bands from the image to the feature collection.

        Parameters:
        image (ee.Image): The image containing the bands to add.

        Returns:
        ee.FeatureCollection: The feature collection with added bands.
        """
        def sample_image(feature):
            values = image.reduceRegion(
                reducer=ee.Reducer.mean(),
                geometry=feature.geometry(),
                scale=10,
                maxPixels=1e13
            )
            return feature.set(values)

        return self.data_fc.map(sample_image)

    def export_to_drive(self, description, file_format='SHP', folder='clean_data_with_bands_s2'):
        """
        Export the processed data to Google Drive.

        Parameters:
        description (str): The description for the export task.
        file_format (str, optional): The file format for the export. Default is 'SHP'.
        folder (str, optional): The folder in Google Drive to save the export. Default is 'clean_data_with_bands_s2'.
        """
        combined_image = self.process_all_months()
        data_with_bands = self.add_bands_to_fc(combined_image)

        task = ee.batch.Export.table.toDrive(
            collection=data_with_bands,
            description=description,
            fileFormat=file_format,
            folder=folder
        )
        task.start()
        print(f"Started export task: {task.id}")
        print("Check your Earth Engine Tasks panel to monitor progress.")

class SubclassProcessor(Sentinel2Processor):
    def __init__(self, subclass_fc, year, months, indices, subclass_name):
        """
        Initialize the SubclassProcessor.

        Parameters:
        subclass_fc (ee.FeatureCollection): The feature collection to process.
        year (int): The year of the data.
        months (list): List of months to process.
        indices (list): List of indices to calculate.
        subclass_name (str): The name of the subclass.
        """
        super().__init__(year, months, indices, subclass_fc)
        self.subclass_name = subclass_name

class PlanetNICFIProcessor:
    def __init__(self, year, periods, indices, data_fc):
        self.year = year
        self.periods = periods
        self.indices = indices
        self.data_fc = data_fc

    def calculate_indices(self, image):
        index_functions = {
            'NDVI': lambda img: img.normalizedDifference(['N', 'R']).rename('NDVI')
        }

        for index in self.indices:
            if index in index_functions:
                image = image.addBands(index_functions[index](image))

        return image

    def normalize_band(self, image, band_name):
        band = image.select(band_name).toFloat()
        min_max = band.reduceRegion(
            reducer=ee.Reducer.minMax(),
            geometry=image.geometry(),
            scale=4.77,
            maxPixels=1e13
        )
        min_val = ee.Number(min_max.get(ee.String(band_name).cat('_min')))
        max_val = ee.Number(min_max.get(ee.String(band_name).cat('_max')))
        normalized = band.subtract(min_val).divide(max_val.subtract(min_val)).rename(ee.String(band_name))
        return normalized

    def process_image(self, image):
        with_indices = self.calculate_indices(image)
        bands_to_normalize = ['B', 'G', 'R', 'N']
        normalized_bands = ee.Image.cat([self.normalize_band(with_indices, band) for band in bands_to_normalize])
        return normalized_bands.addBands(with_indices.select(self.indices))

    def process_all_periods(self):
        processed_images = []

        for period_index, period in enumerate(self.periods):
            start_date = ee.Date(period[0])
            end_date = ee.Date(period[1])

            collection = ee.ImageCollection("projects/planet-nicfi/assets/basemaps/africa") \
                .filterBounds(self.data_fc) \
                .filterDate(start_date, end_date)

            num_images = self.retry_function(collection.size().getInfo)
            print(f"Number of images for period {period}: {num_images}")

            processed_collection = collection.map(self.process_image)
            composite = processed_collection.median().toFloat()
            # Create the date string in the format "MMYY"
            date_str = f'{start_date.format("MM").getInfo()}{start_date.format("YY").getInfo()}'

            def rename_band(band_name):
                return ee.String('norm_').cat(band_name).cat('_').cat(date_str)

            new_band_names = composite.bandNames().map(rename_band)
            print(new_band_names.getInfo())
            composite = composite.rename(new_band_names)

            processed_images.append(composite)

            # Add a delay between processing periods
            time.sleep(random.uniform(5, 15))

        return ee.ImageCollection(processed_images).toBands()

    def retry_function(self, func, max_retries=10, initial_delay=1, factor=2):
        """Retry a function with exponential backoff."""
        retries = 0
        while retries < max_retries:
            try:
                return func()
            except ee.ee_exception.EEException as e:
                if "Too many concurrent aggregations" in str(e):
                    retries += 1
                    if retries == max_retries:
                        raise
                    delay = initial_delay * (factor ** retries) + random.uniform(0, 1)
                    print(f"Rate limit hit. Retrying in {delay:.2f} seconds...")
                    time.sleep(delay)
                else:
                    raise

    def add_bands_to_fc(self, image):
        def sample_image(feature):
            values = image.reduceRegion(
                reducer=ee.Reducer.mean(),
                geometry=feature.geometry(),
                scale=4.77,
                maxPixels=1e13
            )
            return feature.set(values)

        return self.data_fc.map(sample_image)

    def export_to_drive(self, description, file_format='SHP', folder='clean_data_with_bands_nicfi'):
        combined_image = self.process_all_periods()
        data_with_bands = self.add_bands_to_fc(combined_image)

        task = ee.batch.Export.table.toDrive(
            collection=data_with_bands,
            description=description,
            fileFormat=file_format,
            folder=folder
        )
        task.start()
        print(f"Started export task: {task.id}")
        print("Check your Earth Engine Tasks panel to monitor progress.")

class SubclassProcessor(PlanetNICFIProcessor):
    def __init__(self, subclass_fc, year, periods, indices, subclass_name):
        super().__init__(year, periods, indices, subclass_fc)
        self.subclass_name = subclas


