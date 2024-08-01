function insert_Row() {
    // Get the table by its id
    var table = document.getElementById("sampleTable");
    
    // Insert a new row at the top of the table (index 0)
    var newRow = table.insertRow(0);
    
    // Insert two cells in the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    // Set the content of the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}