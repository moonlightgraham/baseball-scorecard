// Add a new row to the lineup grid
function addLineupRow() {
    const tbody = document.getElementById('lineupBody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="text" class="playerName"></td>
        <td><input type="text" class="position"></td>
        <td><input type="text" class="inning1"></td>
        <td><input type="text" class="inning2"></td>
        <td><input type="text" class="inning3"></td>
        <td><input type="text" class="inning4"></td>
        <td><input type="text" class="inning5"></td>
        <td><input type="text" class="inning6"></td>
        <td><input type="text" class="inning7"></td>
        <td><input type="text" class="inning8"></td>
        <td><input type="text" class="inning9"></td>
        <td><input type="text" class="inningExtra"></td>
    `;
    tbody.appendChild(row);
}

// Export to PDF
function exportToPDF() {
    const element = document.querySelector('.container');
    html2pdf().from(element).save('scorecard.pdf');
}
