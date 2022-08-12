// Defaults
const defaultColor = 'black';
const defaultMode = 'color';
const defaultSize = 16;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;


const container = document.querySelector(".container");
const color = document.querySelector("#color");
const grayscale = document.querySelector("#grayscale");
const rainbow = document.querySelector("#rainbow");
const reset = document.querySelector("#reset");

color.addEventListener('click', () => currentColor = currentColor)
reset.addEventListener('click', () => createDivs(input))

function createDivs(size) {
    removeGrid();
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < (size * size); i++) {
        const grid = document.createElement('div');
        grid.setAttribute('style', 'border: 1px solid black');
        container.appendChild(grid);
        grid.addEventListener('mouseenter', () => grid.style.backgroundColor = currentColor);
    }
}

createDivs(16);

function changeSize(input) {
    if (input >= 2 || input <= 100) {
        createDivs(input);
    } else {
        console.log("Invalid number. Please input 2 to 100");
        return
    }
}

function removeGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    } 
}

function changeColor() {
}