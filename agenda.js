
document.addEventListener('DOMContentLoaded', function() {
  const agendaDisplay = document.getElementById('agenda-display');

  const agendas = {
    day1: `
      <h3>Theme: Where are we now?</h3>
      <p><strong>Objective:</strong> Achieve critical awareness of successes, challenges, solutions</p>
       <table border="1">
  <tr><th>Time</th><th>Task</th><th>Task Manager</th><th>Moderator</th><th>Resources</th></tr>
  <tr><td>0700 - 0830</td><td>Registration</td><td>E. Adjowa, A. Bah</td><td></td><td>Name Tags, registration/sign-in sheets</td></tr>
  <tr><td>0830 - 0840</td><td>Agenda and meeting objectives</td><td>K Gelaye</td><td>M Garba</td><td>Projector, Screen, Sound system</td></tr>
  <tr><td rowspan="2">0840 - 0915</td><td>Welcome and remarks</td><td>P Bartel & M Bako</td><td></td><td rowspan="2">Projector, Screen, Sound system</td></tr>
  <tr><td>Each speaker has 5 minutes: NASA Rep & USAID Rep</td><td>NASA Rep & USAID Rep</td><td></td></tr>
  <tr><td>0915 - 0930</td><td>Participant Introductions (Each participant introduces the person to the right. Name, Affiliation)</td><td>All</td><td>M Garba</td><td>Microphone</td></tr>
  <tr><td>0930 - 1030</td><td>Successes; video and stories</td><td>T Niang</td><td>M Bako</td><td>Projector, Screen, Sound system</td></tr>
  <tr><td>1030 - 1100</td><td colspan="4">Coffee break</td></tr>
  <tr><td>1100 - 1200</td><td>Deliverables, ARLs & Impacts (PMP) with discussion</td> <td>PCS Traore</td> <td>PCS Traore</td><td>Projector, Screen, Sound system</td>
  <tr><td>1200 - 1300</td><td>Challenges identified and steps taken</td> <td>M Sayo</td> <td>PCS Traore</td><td>Projector, Screen, Sound system</td> 
  </tr><tr><td>1300 - 1400</td><td colspan="4">Lunch</td></tr>
  <tr><td rowspan="5">1400 - 1530</td><td>Pause & Reflect(5 breakout groups)</td><td>M Sayo</td><td>T Niang</td><td rowspan="5">Flip Charts, Pens, Tables</td></tr>
  <tr><td>What went well last year?</td><td>J Mutuku</td><td></td></tr>
  <tr> <td>What needs improvement?</td> <td>M Garba</td> <td></td></tr>
  <tr><td>What is your role in future success?</td><td>B Toukal</td><td></td></tr>
  <tr><td>Actions to take now</td><td>M Mahamane</td><td></td> </tr>
  <tr><td>1530 - 1615</td><td>Report out from Groups</td><td>Rapporteurs</td><td>M Bako</td><td>Projector, Screen, Sound system</td></tr>
  <tr><td>1615 - 1630</td><td>Wrap-up/Summary and instructions to Service Area Leads</td><td>P Bartel</td><td></td><td></td></tr>
  <tr><td>1630 - 1730</td><td>Service Area Leads brainstorming with Thematic Lead (5 groups)</td><td>Theme Lead</td><td></td><td></td></tr>
  </table>
    `,
    day2: `
  <h3>Theme: Where are we going? </h3>
  <p><strong>Objective:</strong> Awareness of FY25 thrusts & results</p>
  <table>
    <tr><th>Time</th><th>Task</th><th>Task Manager</th><th>Moderator</th><th>Resources</th></tr>
    <tr><td>0830 - 0900</td><td>Aiming for Results: AWP at a glance</td><td>P Bartel</td><td></td><td>Projector, Screen, Sound system</td></tr>
    <tr><td>0900 - 0920</td><td>Agriculture & Food Security</td><td>A Sarr</td><td>M Garba</td><td>Projector, Screen, Sound system</td></tr>
    <tr><td>0920 - 0940</td><td>Weather & Climate Resilience</td><td>K Gelaye</td><td>M Garba</td><td>Projector, Screen, Sound system</td></tr>
    <tr><td>0940 - 1015</td><td>Financial Instruments</td><td>PCS Traore</td><td>M Garba</td><td>Projector, Screen, Sound system</td></tr>
     <tr><td rowspan="2">1000 - 1030</td>
    <td>Coffee Break</td><td></td><td>A. Diama</td> <td rowspan="2">Camera, coffee, Snacks</td></tr><tr><td>Family Photo</td> <td></td><td>E. Adjowa</td></tr>
    <tr><td>1030 - 1050</td><td>Water Security</td><td>M Bako</td><td>J Mutuku</td><td>Projector, Screen, Sound system</td></tr>
    <tr><td>1050 - 1200</td><td>Ecosystem & Carbon Management</td><td>F Mensah</td><td>J Mutuku</td><td>Projector, Screen, Sound system</td></tr>
    <tr><td>1200 - 1300</td><td>AST tie-ins & SCO support</td><td>M Mahamane</td><td>J Mutuku</td><td>Projector, Screen, Sound system</td></tr>
    <tr><td>1300 - 1400</td><td colspan="4">Lunch</td></tr>
    <tr><td>1400 - 1430</td><td>Communications</td><td>T Niang</td><td>B Toukal</td><td>Projector, Screen, Sound system</td></tr>
    <tr><td>1430 - 1500</td><td>GIT</td><td>K Gelaye</td><td>B Toukal</td><td>Projector, Screen, Sound system</td></tr>
    <tr><td>1500 - 1520</td><td>Capacity-Building</td><td>G Enauvbe</td><td>B Toukal</td><td>Projector, Screen, Sound system</td></tr>
    <tr><td>1520 - 1530</td><td colspan="4">Break</td></tr>
    <tr><td>1530 - 1600</td><td>GESI</td><td>J Begou</td><td>M Sayo</td><td>Projector, Screen, Sound system</td></tr>
    <tr><td>1600 - 1700</td><td>Partnerships</td><td>B Toukal</td><td>M Sayo</td><td>Projector, Screen, Sound system</td></tr>
  </table>
    `,
    day3: `
    <h3>Theme: Strategies for Success </h3>
    <p><strong>Objective:</strong> Sensitization of Key Thrusts</p>
    <table>
      <tr><th>Time</th><th>Task</th><th>Task Manager</th><th>Moderator</th><th>Resources</th></tr>
      <tr><td>0830 - 0900</td><td>Setting the scene</td><td>P Bartel</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>0900 - 1015</td><td>Industrialization and service review: 45 Min. Presentation & 30 Min. Discussion</td><td>PCS Traore</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>1015 - 1030</td><td colspan="4">Coffee break</td></tr>
      <tr><td>1030 - 1130</td><td>How Services are "graduated": 30 Min. Presentation & 30 Min. Discussion</td><td>K Gelaye</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>1130 - 1300</td><td>Rationalizing SERVIR WA Portfolio: 30 Min. Presentation & 45 Min. Discussion</td><td>B. Toukal</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>1300 - 1400</td><td colspan="4">Lunch</td></tr>
      <tr><td>1400 - 1530</td><td>Review & concurrence with new services: 5 Min. Presentation of Service and 10 Min. Discussion</td><td>M. Mansour</td><td></td><td>Projector, Screen, Sound system</td></tr>  
      <tr><td>1530 - 1545</td><td colspan="4">Break</td></tr>
      <tr><td>1545 - 1630</td><td>Wrap Up and Conclusions</td><td>M Bako & P. Bartel</td><td></td><td>Projector, Screen, Sound system</td></tr>
    </table>
  `,
  
    day4: `
      <h3> Theme: Concurrent Planning </h3>
      <table>
      <tr><th>Time</th><th>Task</th><th>Task Manager</th><th>Moderator</th><th>Resources</th></tr>
      <tr><td>0830 - 1300</td><td>Communications writeshop</td><td>T Niang, A Diama</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>0830 - 1300</td><td>PMU editing of AWP</td><td>PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
      <tr><td>1400 - 1530</td><td>Online Monthly Progress Reporting  (MPR) demo and practice</td><td>J Mutuku</td><td></td><td>Projector, Screen, Sound system</td></tr>
       <tr><td>1530-1630</td><td>Discussion on Flash Flood Vul. Mapping and S2S Services </td><td>USAID, STLs, AGRHYMET, Key Personnel</td><td></td><td>Projector, Screen, Sound system</td></tr>
       <tr><td>Evening (TBC)</td><td>SAGE preparatory discussions</td><td>All</td><td></td><td>Projector, Screen, Sound system</td></tr>
      </table>
    `,
    day5: `

      <h3> Theme: Wrap up Amendments </h3>
      <p><strong>Objective:</strong> Ad Hoc Meetings to finalize partner amendment details (including budgets)</p>
      <table>
      <tr><th>Time</th><th>Task</th><th>Task Manager</th><th>Moderator</th><th>Resources</th></tr>
      <tr><td>8:30-9:00</td><td>AFRIGIST</td><td>ICRISAT PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
      <tr><td>9:00-09:25</td><td>AGRHYMET</td><td>ICRISAT PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
      <tr><td>9:25-10:45</td><td>AGRHYMET</td><td>ICRISAT PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
       </tr><tr><td>10:45 - 11:00</td><td colspan="4">Break</td></tr>
      <tr><td>11:00-11:30</td><td>ISESTEL</td><td>ICRISAT PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
      <tr><td>11:30-12:00</td><td>UFL</td><td>ICRISAT PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
      <tr><td>12:00-13:00</td><td>UC</td><td>ICRISAT PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
      </tr><tr><td>13:00 - 14:00</td><td colspan="4">Lunch</td></tr>
      <tr><td>14:00-15:00</td><td>CSE</td><td>ICRISAT PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
      <tr><td>15:00-16:00</td><td>CERSGIS</td><td>ICRISAT PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
      <tr><td>16:00-16:30</td><td>ICRISAT</td><td></td><td></td><td></td></tr>
      </table>


    `,
 
  };

  const buttons = document.querySelectorAll('.agenda-button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      showAgenda(this.id);
    });
  });

  function showAgenda(day) {
    agendaDisplay.innerHTML = agendas[day];
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(day).classList.add('active');
  }

  // Show Day 1 (Monday) agenda by default
  showAgenda('day1');
});