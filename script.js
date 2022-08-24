const defaultSize = 16;
const defaultMode = 'color';
const defaultColor = '#000000';

let currentSize = defaultSize;
let currentMode = defaultMode;
let currentColor = defaultColor;
let click = false;

const squareContainer = document.querySelector('.square-container');
const mode = document.getElementById('mode');
const colorPicker = document.getElementById('color-picker');
const colorBtn = document.getElementById('color');
const eraserBtn = document.getElementById('eraser');
const rainbowBtn = document.getElementById('rainbow');
const resetBtn = document.getElementById('reset');
const slider = document.getElementById('slider');
const inputValue = document.getElementById('input-value');

squareContainer.addEventListener('click', () => changeClickMode());
colorPicker.addEventListener('input', () => setCurrentColor(colorPicker.value));
colorBtn.addEventListener('click', () => changeMode('color'));
eraserBtn.addEventListener('click', () => changeMode('eraser'));
rainbowBtn.addEventListener('click', () => changeMode('rainbow'));
slider.addEventListener('change', () => changeSize(currentSize));
slider.addEventListener('mousemove', () => updateSize(currentSize));
resetBtn.addEventListener('click', () => resetSquareContainer());

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function changeClickMode() {
    click =!click;
    if (click) {
        mode.textContent = 'Mode: Coloring'
    } else {
        mode.textContent = 'Mode: Not Coloring'
    }
}

function createSquares(currentSize) {
    squareContainer.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    squareContainer.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`
    for (let i = 0; i < (currentSize * currentSize); i++) {
        const square = document.createElement('div');
        square.setAttribute('style', 'background-color: white');
        square.addEventListener('mouseover', function() {
            if (click) {
                if (currentMode === 'color') {
                    square.style.backgroundColor = currentColor; 
                } else if (currentMode === 'rainbow') {
                    const randomR = Math.floor( Math.random () * 256 )
                    const randomG = Math.floor( Math.random () * 256 )
                    const randomB = Math.floor( Math.random () * 256 )
                    square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
                } else if (currentMode === 'eraser') {
                    square.style.backgroundColor = 'white';
                }
            }
        });
        squareContainer.appendChild(square);
    }
}

createSquares(currentSize);

function changeSize(currentSize) {
    removeSquares();
    currentSize = slider.value;
    createSquares(currentSize);
}

function updateSize(currentSize) {
    currentSize = slider.value
    inputValue.textContent = `${currentSize} x ${currentSize}`
}

function removeSquares() {
    squareContainer.innerHTML = '';
}

function resetSquareContainer() {
    removeSquares();
    createSquares(slider.value);
}

function changeMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
}

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
    } else if (currentMode === 'color') {
        colorBtn.classList.remove('active');
    } else if (currentMode === 'grayscale') {
        grayscaleBtn.classList.remove('active');
    }

    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
    } else if (newMode === 'color') {
        colorBtn.classList.add('active');
    } else if (newMode === 'grayscale') {
        grayscaleBtn.classList.add('active');
    }
}
