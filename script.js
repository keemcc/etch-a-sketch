const gridContainer = document.querySelector(".grid-container");

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

setGrid(16);

