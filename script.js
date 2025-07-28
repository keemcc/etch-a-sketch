const gridContainer = document.querySelector(".grid-container");
let gridSize = 16;

setGrid(gridSize, gridSize);

document.querySelector("#grid-length-input").value = gridSize;
document.querySelector("#grid-width-input").value = gridSize;

document.querySelector("#grid-lines-check").addEventListener("change", (event) => {
    if (event.target.checked) {
        turnGridOn();
    } else {
        turnGridOff();
    }
})

document.querySelector("button").addEventListener("click", () => {
    destroyGrid();
    let width = parseInt(document.querySelector("#grid-length-input").value);
    let height = parseInt(document.querySelector("#grid-width-input").value);
    console.log(`${width} ${height}`);
    setGrid(width, height);
})

document.querySelector("#grid-length-input").addEventListener("input", (e) => {
    const input = parseInt(e.target.value);
    console.log(`value : ${input}`);
    if (input && (input > 0)) {
        destroyGrid();
        setGrid(input, parseInt(document.querySelector("#grid-width-input").value));
    }
})

document.querySelector("#grid-width-input").addEventListener("input", (e) => {
    const input = parseInt(e.target.value);
    if (input && (input > 0)) {
        destroyGrid();
        setGrid(parseInt(document.querySelector("#grid-length-input").value), input);
    }
})

function setGrid(width, height) {
    gridContainer.style.aspectRatio = `${width} / ${height}`
    for (let i = 0; i < height; i++) {
        gridContainer.appendChild(createGridRow(width));
    }
}

function createGridRow(size) {
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");
    for (let i = 0; i < (size); i++) {
        newRow.appendChild(createGridSquare());
    }
    return newRow;
}

function createGridSquare() {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.addEventListener("mouseenter", (e) => {
        e.target.classList.add("hovered");
    })
    return newSquare;
}

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

function destroyGrid() {
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
}