//Write your javascript code here
function sortTable(columnIndex) {
    const table = document.getElementById('dataTable');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();

        if (columnIndex === 0) { // Name: string ascending
            return aText.localeCompare(bText);
        } else if (columnIndex === 1) { // Age: number ascending
            return parseInt(aText) - parseInt(bText);
        } else if (columnIndex === 2) { // Correctness: boolean ascending (false before true)
            const aBool = aText === 'true' ? 1 : 0;
            const bBool = bText === 'true' ? 1 : 0;
            return aBool - bBool;
        }
        return 0;
    });

    // Re-append sorted rows to tbody
    rows.forEach(row => tbody.appendChild(row));
}