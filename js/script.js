function createGrid() {
    const container = document.querySelector(".container");

    let n = 16;

    // Generate the GRID
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add('row');
        console.log(row);
        container.appendChild(row);

        for (let j = 0; j < n; j++) {
            const column = document.createElement("div");
            column.classList.add('column');
            // console.log(column);
            row.appendChild(column);
        }                   
    }

    // n = prompt("Enter the size of the grid(< 100): ");

    // const rowCss = document.querySelector(".row");
    // const columnCss = document.querySelector(".column");

    changeColor();

 }

 function changeColor() {
    columns = Array.from(document.getElementsByClassName("column"));

    columns.forEach(column => {
        column.addEventListener('mouseover', () => {
            column.classList.add("hovered");
        }
        );
        
    });
 }

 createGrid();
    