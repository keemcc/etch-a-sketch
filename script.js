const gridContainer = document.querySelector(".grid-container");
let gridSize = 16;

document.querySelector("#grid-lines-check").addEventListener("change", (event) => {
    if (event.target.checked) {
        turnGridOn();
    } else {
        turnGridOff();
    }
})


setGrid(gridSize);









function turnGridOn() {
    for (const row of gridContainer.children) {
        for (const square of row.children) {
            square.style.border = "1px solid black";
        }
    }
}

function turnGridOff() {
    for (const row of gridContainer.children) {
        for (const square of row.children) {
            square.style.border = "none";
        }
    }
}

function createGridSquare() {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.addEventListener("mouseenter", (e) => {
        const square = e.target;
        square.classList.add("hovered");
    })
    return newSquare;
}

function createGridRow(size) {
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");
    for (let i = 0; i < (size); i++) {
        newRow.appendChild(createGridSquare());
    }
    return newRow;
}

function setGrid(size) {
    for (let i = 0; i < size; i++) {
        gridContainer.appendChild(createGridRow(size));
    }
}