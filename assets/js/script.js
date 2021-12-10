function getElement(id) {
    return document.getElementById(id);
}

function getElements(className) {
    return document.getElementsByClassName(className);
}

function updateHtml(id, html) {
    getElement(id).innerHTML = html;
}

const grid = getElement('grid');
// create grid for tetris
for (let i = 0; i < 20; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);
    }
    grid.appendChild(row);
}

// create tetris pieces
const iPiece = [
    [1, 1, 1, 1]
];
const oPiece = [
    [1, 1],
    [1, 1]
];
const tPiece = [
    [1, 1, 1],
    [0, 1, 0]
];
const lPiece = [
    [1, 0],
    [1, 0],
    [1, 1]
];
const jPiece = [
    [0, 1],
    [0, 1],
    [1, 1]
];
const zPiece = [
    [1, 1, 0],
    [0, 1, 1]
];
const sPiece = [
    [0, 1, 1],
    [1, 1, 0]
];
const pieces = [iPiece, oPiece, tPiece, lPiece, jPiece, zPiece, sPiece];

// Buttons 
const startButton = getElement('start');
const pauseButton = getElement('pause');
const resetButton = getElement('reset');
