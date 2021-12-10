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


// create tetris shapes
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


function getRandomShape() {
    return shapes[Math.floor(Math.random() * shapes.length)];
}


function getNextPiece() {
    return {
        shape: getRandomShape(),
        row: 0,
        col: 3,
        placed: false
    }
}

// let currentPiece = getNextPiece();

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

function movePieceLeft(piece) {
    undrawPiece(piece);
    if (piece.col > 0 && isVacantLeft(piece)) {
        piece.col--;
    }
    drawPiece(piece);
}

function movePieceRight(piece) {
    undrawPiece(piece);
    if (piece.col + piece.shape[0].length <= 9 && isVacantRight(piece)) {
        piece.col++;
    }
    drawPiece(piece);
}

function movePieceDown(piece) {
    undrawPiece(piece);
    if (piece.row + piece.shape.length < 20 && !checkCollision(piece)) {
        piece.row++;
    }
    drawPiece(piece);
}


function rotatePiece(piece) {
    undrawPiece(piece);
    let width = piece.shape[0].length;
    let height = piece.shape.length;
    let temp = [];
    for (let i = 0; i < width; i++) {
        temp[i] = [];
        for (let j = 0; j < height; j++) {
            temp[i][j] = piece.shape[height - 1 - j][i];
        }
    }
    piece.shape = temp;
    if (piece.col + piece.shape[0].length > 9) {
        piece.col--;
    }
    if (piece.row + piece.shape.length > 20) {
        piece.row--;
    }
    drawPiece(piece);
}
function isVacantLeft(piece) {
    col = piece.col;
    shape = piece.shape;
    height = piece.shape.length;
    for (let i = 0; i <= height; i++) {
        if (col > 0) {
            if (getElement(`cell ${piece.row + i} ${col - 1}`).classList.contains('taken')) {
                return false;
            }
        }
    }
    return true;
}

function isVacantRight(piece) {
    width = piece.shape[0].length;
    col = piece.col + width - 1;
    height = piece.shape.length;
    for (let i = 0; i <= height; i++) {
      if (col < 9) {
        if (
          getElement(`cell ${piece.row + i} ${col + 1}`).classList.contains(
            "taken"
          )
        ) {
          return false;
        }
      }
    }
    return true;
}
    
function checkCollision(piece) {
    row = piece.row;
    col = piece.col;
    shape = piece.shape;
    width = piece.shape[0].length;
    height = piece.shape.length;
    // pieceCells = [];
    if (row + height >= 20) {
        return true;
    } else {
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (shape[i][j] === 1) {
                    if (getElement(`cell ${row + i + 1} ${col + j}`).classList.contains('taken')) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
// drawPiece(currentPiece);

function clearLines() {
    for (let i = 0; i < 20; i++) {
        let row = getElement(`row ${i}`);
        let cells = row.children;
        let full = true;
        for (let j = 0; j < 10; j++) {
            if (!cells[j].classList.contains('taken')) {
                full = false;
            }
        }
        if (full) {
            for (let j = 0; j < 10; j++) {
                cells[j].classList.remove('taken');
                cells[j].classList.remove('active-piece');
            }
            for (let k = i; k > 1; k--) {
                let prevRow = getElement(`row ${k - 1}`);
                let prevCells = prevRow.children;
                row.children = prevCells;
            }
        }
    }
}




// Buttons 
const startButton = getElement('start');
const pauseButton = getElement('pause');
const resetButton = getElement('reset');

// Game functions
let gameOver = false;
let gamePaused = false;
let gameStarted = false;
let gameInterval;
// TETRIS

startButton.addEventListener('click', () => {
    if (!gameStarted) {
        gameStarted = true;
        document.addEventListener("keydown", function (event) {
          if (event.key === "ArrowLeft") {
            movePieceLeft(currentPiece);
          } else if (event.key === "ArrowRight") {
            movePieceRight(currentPiece);
          } else if (event.key === "ArrowUp") {
            rotatePiece(currentPiece);
          } else if (event.key === "ArrowDown") {
            movePieceDown(currentPiece);
            // console.log(checkCollision(currentPiece));
          }
        });
        console.log('game started', gameStarted);
        let currentPiece = getNextPiece();
        drawPiece(currentPiece);
        gameInterval = setInterval(() => {
            if (checkCollision(currentPiece)) {
                // currentPiece.placed = true;
                currentPiece.shape.forEach((row, i) => {
                    row.forEach((cell, j) => {
                        if (cell === 1) {
                            getElement(`cell ${currentPiece.row + i} ${currentPiece.col + j}`).classList.add('taken');
                        }
                    });
                })                
                currentPiece = getNextPiece();                
            }
            movePieceDown(currentPiece);
            clearLines();
        }, 1000); 
    }
});
