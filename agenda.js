document.addEventListener('DOMContentLoaded', function() {
  const agendaDisplay = document.getElementById('agenda-display');

  const agendas = {
    day1: `
      <h3>Monday 26-Aug: Where are we now?</h3>
      <table>
      <tr><th>Time</th><th>Task</th><th>Task Manager</th><th>Moderator</th><th>Resources</th></tr>
      <tr><td>0700 - 0830</td><td>Registration</td><td>E. Adjowa, A. Bah</td><td></td><td>Name Tags, registration/sign-in sheets</td></tr>
      <tr><td>0830 - 0840</td><td>Agenda Presentation</td><td>M. Sayo</td><td>A. Diama</td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>0840 - 0915</td><td>Welcome and Remarks</td><td>P Bartel & M Bako</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>0915 - 0930</td><td>Participant Introductions</td><td>All</td><td>A. Diama</td><td>Microphone</td></tr>
      <tr><td>0930 - 1000</td><td>Presentation of Conference objectives</td><td>K. Gelaye</td><td>A. Diama</td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>1000 - 1030</td><td>Coffee Break & Family Photo</td><td></td><td>A. Diama, E. Adjowa</td><td>Camera, coffee, Snacks</td></tr>
      <tr><td>1030 - 1145</td><td>Successes; video and stories</td><td>T Niang & A Diama</td><td>M Bako</td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>1145 - 1300</td><td>Deliverables, ARLs & Impacts (PMP) with discussion</td><td>M. Sayo</td><td>PCS Traore</td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>1300 - 1400</td><td>Lunch</td><td></td><td></td><td></td></tr>
      <tr><td>1400 - 1430</td><td>Challenges Identified and Steps Taken</td><td>PCS Traore</td><td></td><td></td></tr>
      <tr><td>1430 - 1600</td><td>Lessons Learnt - Breakout into 5 groups</td><td>M Sayo</td><td>T Niang</td><td>Flip Charts, Pens, Tables</td></tr>
      <tr><td>1600 - 1645</td><td>Report out from Groups</td><td>Rapporteurs</td><td>M Bako</td><td>Projector, Screen, Sound system</td></tr>
      </table>
    `,
    day2: `
      <h3>Tuesday, 27-Aug: Where are we going? </h3>
      <table>
        <tr><th>Time</th><th>Task</th><th>Task Manager</th><th>Moderator</th><th>Resources</th></tr>
        <tr><td>0830 - 0900</td><td>Aiming for Results</td><td>P Bartel</td><td></td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>0900 - 0920</td><td>Agriculture & Food Security</td><td>A Sarr</td><td>M Garba</td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>0920 - 0940</td><td>Weather & Climate Resilience</td><td>K Gelaye</td><td>M Garba</td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>0940 - 1015</td><td>Financial Instruments</td><td>PCS Traore</td><td>M Garba</td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>1015 - 1030</td><td>Coffee Break</td><td></td><td></td><td></td></tr>
        <tr><td>1030 - 1050</td><td>Water Security</td><td>M Bako</td><td>J Mutuku</td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>1050 - 1200</td><td>Ecosystem & Carbon Management</td><td>F Mensah</td><td>J Mutuku</td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>1200 - 1300</td><td>AST tie-ins & SCO support</td><td>M Mahamane</td><td>J Mutuku</td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>1300 - 1400</td><td>Lunch</td><td></td><td></td><td></td></tr>
        <tr><td>1400 - 1430</td><td>Communications</td><td>T Niang</td><td>B Toukal</td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>1430 - 1500</td><td>GIT</td><td>K Gelaye</td><td>B Toukal</td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>1500 - 1520</td><td>Capacity-Building</td><td>G Enauvbe</td><td>B Toukal</td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>1520 - 1530</td><td>Break</td><td></td><td></td><td></td></tr>
        <tr><td>1530 - 1600</td><td>GESI</td><td>J Begou</td><td>M Sayo</td><td>Projector, Screen, Sound system</td></tr>
        <tr><td>1600 - 1700</td><td>Partnerships</td><td>B Toukal</td><td>M Sayo</td><td>Projector, Screen, Sound system</td></tr>
      </table>
    `,
    day3: `
      <h3> Wednesday, 27-Aug: Strategies for Success </h3>
      <table>
      <tr><th>Time</th><th>Task</th><th>Task Manager</th><th>Moderator</th><th>Resources</th></tr>
      <tr><td>0830 - 0900</td><td>Setting the Scene</td><td>P Bartel</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>0900 - 1015</td><td>Industrialization and Service Review</td><td>PCS Traore</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>1015 - 1030</td><td>Coffee Break</td><td></td><td></td><td></td></tr>
      <tr><td>1030 - 1130</td><td>How services are graduated</td><td>K Gelaye</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>1130 - 1300</td><td>Panel Discussion: Building constituencies</td><td>P Bartel</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>1300 - 1400</td><td>Lunch</td><td></td><td></td><td></td></tr>
      <tr><td>1400 - 1530</td><td>Rationalizing SERVIR WA Portfolio</td><td>B Toukal</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>1530 - 1545</td><td>Coffee Break</td><td></td><td></td><td></td></tr>
      <tr><td>1545 - 1630</td><td>Wrap Up and Conclusions</td><td>M Bako</td><td></td><td>Projector, Screen, Sound system</td></tr>
    </table>
    `,
    day4: `
      <h3> Thursday, 29-Aug: Concurrent Planning </h3>
      <table>
      <tr><th>Time</th><th>Task</th><th>Task Manager</th><th>Moderator</th><th>Resources</th></tr>
      <tr><td>0830 - 1630</td><td>Communications Workshop</td><td>T Niang, A Diama</td><td></td><td>Projector, Screen, Sound system</td></tr>
      <tr><td>0830 - 1630</td><td>PMU Editing of AWP</td><td>PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
      </table>
    `,
    day5: `
      <h3> Friday, 30-Aug: Wrap up Amendments </h3>
      <table>
      <tr><th>Time</th><th>Task</th><th>Task Manager</th><th>Moderator</th><th>Resources</th></tr>
      <tr><td>0830 - 1630</td><td>Ad Hoc Meetings to finalize amendment details</td><td>ICRISAT PMU</td><td></td><td>Flip Charts, notebooks</td></tr>
      </table>
    `,

  };

  document.getElementById('day1').addEventListener('click', () => showAgenda('day1'));
  document.getElementById('day2').addEventListener('click', () => showAgenda('day2'));
  document.getElementById('day3').addEventListener('click', () => showAgenda('day3'));
  document.getElementById('day4').addEventListener('click', () => showAgenda('day4'));
  document.getElementById('day5').addEventListener('click', () => showAgenda('day5'));
  // Add more event listeners for additional days

  function showAgenda(day) {
    agendaDisplay.innerHTML = agendas[day];
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(day).classList.add('active');
  }
  buttons.forEach(button => {
    button.addEventListener('click', function() {
        showAgenda(this.id);
    });
    });

    // Show Day 1 agenda by default
  showAgenda('day1');
});
