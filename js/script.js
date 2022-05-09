function createGrid() {
    const container = document.querySelector(".container");
    // const rows = document.querySelector(".rows");
    // const columns = document.querySelector(".columns");



    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add('row');
        console.log(row);
        container.appendChild(row);

        for (let j = 0; j < 16; j++) {
            const column = document.createElement("div");
            column.classList.add('column');
            // if (i===15 && j === 15) {
            //     column.classList.add('last-column');
            // }
            console.log(column);
            row.appendChild(column);
        }                   
    }
 }

    