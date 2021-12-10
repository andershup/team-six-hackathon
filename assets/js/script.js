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
    row.id = `row ${i}`;
    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell ${i} ${j}`;
        row.appendChild(cell);
    }
    grid.appendChild(row);
}


// create tetris pieces
const iShape = [
    [1, 1, 1, 1]
];
const oShape = [
    [1, 1],
    [1, 1]
];
const tShape = [
    [1, 1, 1],
    [0, 1, 0]
];
const lShape = [
    [1, 0],
    [1, 0],
    [1, 1]
];
const jShape = [
    [0, 1],
    [0, 1],
    [1, 1]
];
const zShape = [
    [1, 1, 0],
    [0, 1, 1]
];
const sShape = [
    [0, 1, 1],
    [1, 1, 0]
];
const shapes = [iShape, oShape, tShape, lShape, jShape, zShape, sShape];

// function rotatePiece(piece) {
//     const newPiece = [];
//     for (let i = 0; i < piece[0].length; i++) {
//         const row = [];
//         for (let j = 0; j < piece.length; j++) {
//             row.push(piece[j][i]);
//         }
//         newPiece.push(row);
//     }
//     return newPiece;
// }

function getRandomShape() {
    return shapes[Math.floor(Math.random() * shapes.length)];
}


function getNextPiece() {
    return {
        shape: getRandomShape(),
        row: 0,
        col: 3
    }
}

let currentPiece = getNextPiece();

function drawPiece(piece) {
    row = piece.row;
    col = piece.col;
    shape = piece.shape;
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            if (shape[i][j] === 1) {
                getElement(`cell ${row + i} ${col + j}`).classList.add('active-piece');
            }
        }
    }
}

function undrawPiece(piece) {
    row = piece.row;
    col = piece.col;
    shape = piece.shape;
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            if (shape[i][j] === 1) {
                getElement(`cell ${row + i} ${col + j}`).classList.remove('active-piece');
            }
        }
    }
}


drawPiece(currentPiece);

// function placePiece(piece, row, col) {
//     for (let i = 0; i < piece.length; i++) {
//         for (let j = 0; j < piece[i].length; j++) {
//             if (piece[i][j] === 1) {
//                 getElement(`cell ${row + i} ${col + j}`).classList.add('active-piece');
//             }
//         }
//     }
// }

function removePiece(piece) {
    
}


// function movePieceLeft() {

// }

// let currentPiece = getRandomPiece();
// let anotherPiece = getRandomPiece();

// placePiece(currentPiece, 0, 0);
// placePiece(anotherPiece, 0, 4);







// Buttons 
const startButton = getElement('start');
const pauseButton = getElement('pause');
const resetButton = getElement('reset');

// Game functions
let gameOver = false;
let gamePaused = false;
let gameStarted = false;
let gameInterval;
// let currentPiece;
// TETRIS

startButton.addEventListener('click', () => {
    if (!gameStarted) {
        gameStarted = true;
        console.log('game started', gameStarted);
    } 
});

while (!gameOver && gameStarted) {

}