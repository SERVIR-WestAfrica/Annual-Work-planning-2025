// Your dynamic agenda data
const agendaData = [
  {
    day: "1",
    date: "25-Aug",
    theme: "Where are we now?",
    objective: "Achieve critical awareness of successes, challenges, solutions",
    events: [
      { time: "0700 - 0830", task: "Registration", manager: "E. Adjowa, A. Bah", moderator: "", resources: "Name Tags, registration/sign-in sheets" },
      { time: "0830 - 0840", task: "Agenda Presentation", manager: "M. Sayo", moderator: "A. Diama", resources: "Projector, Screen, Sound system" },
      { time: "0840 - 0915", task: "Welcome and Remarks", manager: "P Bartel & M Bako", moderator: "", resources: "Projector, Screen, Sound system" },
      // Add more events as needed
    ]
  },
  // Add more days as objects
];

// Function to dynamically render the agenda table
function renderAgendaTable() {
  const tableBody = document.querySelector("#full-agenda tbody");
  agendaData.forEach(dayData => {
    let themeRow = `
      <tr>
        <td>${dayData.day}</td>
        <td colspan="5"><strong>Theme: ${dayData.theme}</strong></td>
      </tr>
      <tr>
        <td>${dayData.date}</td>
        <td></td>
        <td colspan="4"><strong>Objective: ${dayData.objective}</strong></td>
      </tr>`;
    tableBody.insertAdjacentHTML("beforeend", themeRow);

    dayData.events.forEach(event => {
      let eventRow = `
        <tr>
          <td></td>
          <td>${event.time}</td>
          <td>${event.task}</td>
          <td>${event.manager}</td>
          <td>${event.moderator}</td>
          <td>${event.resources}</td>
        </tr>`;
      tableBody.insertAdjacentHTML("beforeend", eventRow);
    });
  });
}

// Function to toggle the visibility of the agenda
function toggleAgendaVisibility() {
  const showAgendaButton = document.getElementById('show-agenda');
  const fullAgenda = document.getElementById('full-agenda');

  showAgendaButton.addEventListener('click', function() {
    if (fullAgenda.style.display === 'none') {
      fullAgenda.style.display = 'block';
      showAgendaButton.textContent = 'Hide Full Agenda';
    } else {
      fullAgenda.style.display = 'none';
      showAgendaButton.textContent = 'View Full Agenda';
    }
  });
}

// Run functions after DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  renderAgendaTable(); // Render the agenda table
  toggleAgendaVisibility(); // Set up the toggle functionality
});
