document.addEventListener('DOMContentLoaded', function() {
  const days = document.querySelectorAll('#timeline li');
  const detailsContainer = document.querySelector('#day-details');

  const dayDetails = {
    'Day 1: Where are we now?': 'Objective: Achieve critical awareness of successes, challenges, and solutions.',
    'Day 2: Where are we going?': 'Objective: Awareness of FY25 thrusts & results.',
    'Day 3: Strategies for Success': 'Objective: Sensitization of Key Thrusts.',
    'Day 4-5: Planning and Wrap-up': 'Objective: Finalize plans and amendments.'
  };

  days.forEach(day => {
    day.addEventListener('click', function() {
      const dayContent = dayDetails[this.textContent];
      detailsContainer.innerHTML = `<p>${dayContent}</p>`;
    });
  });
});