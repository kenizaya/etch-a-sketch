function createGrid() {
    const container = document.querySelector(".container");
    // Generate the GRID
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add('row');
        console.log(row);
        container.appendChild(row);

        for (let j = 0; j < 16; j++) {
            const column = document.createElement("div");
            column.classList.add('column');
            console.log(column);
            row.appendChild(column);
        }                   
    }
 }

    