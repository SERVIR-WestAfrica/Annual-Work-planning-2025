// thematicAreas.js
document.addEventListener('DOMContentLoaded', function() {
  const thematicAreas = [
    {
      name: "Agriculture and Food Security",
      icon: "assets/afs.jpg",
      services: [
        "Crop Monitoring and Condition Assessment",
        "Desert Locust Risk Mapping (P-Locust)",
        "Bridging the Gap Between AFS and Weather & Climate"
      ]
    },
    {
      name: "Ecosystem and Carbon Management",
      icon: "assets/ecm.jpg",
      services: [
        "Artisanal Mining Monitoring",
        "Charcoal Production Monitoring",
        "Commune-Level Development Planning",
        "Farmer-Managed Land Natural Regeneration",
        "Harmonization of Regional Land use/Land Cover Classification System"
      ]
    },
    {
      name: "Water Security",
      icon: "assets/ws.jpg",
      services: [
        "Flash Flood Vulnerability Mapping",
        "GroundWater Monitoring",
        "Monitoring Ephemeral Water Bodies-Wendou"
      ]
    },
    {
      name: "Weather and Climate Resilience",
      icon: "assets/wcr.jpg",
      services: [
        "Seasonal Forecasting"
      ]
    },
    {
      name: "Financial Instruments",
      icon: "assets/fis.png",
      services: [
        "Local Risk Control",
        "Disaster Preparedness"
      ]
    },
    {
      name: "Sustainable Development Goals Mapping",
      services: [
        "SDG mapping"
      ]
    },
    {
      name: "Capacity Building",
      services: [
        "Technical Trainings"
      ]
    },
    {
      name: "Small Innovation Grants",
      services: [
        "Fellowships"
      ]
    }
  ];

  const container = document.createElement('div');
  container.id = 'thematic-areas-container';

  const h1 = document.createElement('h1');
  h1.textContent = 'SERVIR Thematic Areas and Services';
  container.appendChild(h1);

  thematicAreas.forEach(area => {
    const areaDiv = document.createElement('div');
    areaDiv.className = 'thematic-area';

    const h2 = document.createElement('h2');
    if (area.icon) {
      const img = document.createElement('img');
      img.src = area.icon;
      img.width = 30;
      img.alt = area.name;
      h2.appendChild(img);
    }
    h2.appendChild(document.createTextNode(' ' + area.name));
    areaDiv.appendChild(h2);

    const servicesDiv = document.createElement('div');
    servicesDiv.className = 'services';

    if (area.services.length > 0) {
      const ul = document.createElement('ul');
      area.services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        ul.appendChild(li);
      });
      servicesDiv.appendChild(ul);
    } else {
      const p = document.createElement('p');
      p.textContent = 'No specific services listed.';
      servicesDiv.appendChild(p);
    }

    areaDiv.appendChild(servicesDiv);
    container.appendChild(areaDiv);
  });

  document.body.appendChild(container);
});