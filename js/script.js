function createGrid(n) {
    const container = document.querySelector("#container");
    const btn = document.querySelector("#btn");

    // Generate the GRID
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add('row');
        container.appendChild(row);
        row.style.height = `${100/n}%`;

        for (let j = 0; j < n; j++) {
            const column = document.createElement("div");
            column.classList.add('column');
            row.appendChild(column);
            column.style.width = `${100/n}%`;
            
        }
    }

    changeColor();

    btn.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        createGrid(changeGrid(n));
    });

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

 function changeGrid(n) {

    let input;
    
    do {
        input = prompt("Enter grid size(max: 100): ");
    } while (input > 100 && !Number.isInteger(input));

    if (input <= 100 && input !== null) {
        Array.from(document.getElementsByClassName("row")).forEach(row => row.remove());
        Array.from(document.getElementsByClassName("column")).forEach(column => column.remove());
        return input;
    } else {
        createGrid(n);
    }

 }

 createGrid(16);
    