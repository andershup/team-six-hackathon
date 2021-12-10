document.addEventListener("DOMContentLoaded", () => {

const grid = document.querySelector(".grid")
let squares = Array.from(document.querySelectorAll(".grid div"))
const rowWidth = 10

// the blocks 

const zBlock = [
  [0,1,rowWidth+1,rowWidth+2],
  [1,rowWidth,rowWidth+1,rowWidth*2],
  [0,1,rowWidth+1,rowWidth+2],
  [1,rowWidth,rowWidth+1,rowWidth*2],

]

const sBlock = [
    [1,2,rowWidth,rowWidth+1],
    [0,rowWidth,rowWidth+1,rowWidth*2+1],
    [1,2,rowWidth, rowWidth+1],
    [0,rowWidth,rowWidth+1,rowWidth*2+1],
   
    
    
]
const oBlock = [
  [0,1,rowWidth,rowWidth+1],
  [0,1,rowWidth,rowWidth+1],
  [0,1,rowWidth,rowWidth+1],
  [0,1,rowWidth,rowWidth+1]
]
const lRightBlock = [
    [1, rowWidth+1, rowWidth*2+1, rowWidth*2 +2],
    [rowWidth, rowWidth+1, rowWidth+2, rowWidth*2],
    [0,1, rowWidth+1, rowWidth*2+1],
    [2,rowWidth, rowWidth +1, rowWidth+2]
  ]

  const lLeftBlock = [
    [1, rowWidth+1, rowWidth*2+1, rowWidth*2],
    [0, rowWidth, rowWidth+1, rowWidth+2],
    [1, 2, rowWidth+1, rowWidth*2+1],
    [rowWidth, rowWidth+1, rowWidth+2, rowWidth*2+2]
  ]


  
  
  const iBlock = [
      [1,rowWidth+1,rowWidth*2+1,rowWidth*3+1],
      [rowWidth,rowWidth+1,rowWidth+2,rowWidth+3],
      [1,rowWidth+1,rowWidth*2+1,rowWidth*3+1],
      [rowWidth,rowWidth+1,rowWidth+2,rowWidth+3]
    ]
    
    const tBlock = [
      [1,rowWidth,rowWidth+1,rowWidth+2],
      [1,rowWidth+1,rowWidth+2,rowWidth*2+1],
      [rowWidth,rowWidth+1,rowWidth+2, rowWidth*2+1],
      [1,rowWidth,rowWidth+1,rowWidth*2+1]
    ]

  const allBlockArrays = [
      zBlock,sBlock,oBlock,lRightBlock, lLeftBlock,iBlock,tBlock
  ]
  

  //0-3 index numbers of the block arrays
  let currentRotation = 0
  //Starting and current position of block
  let currentPosition = 5

  
  let randomPick = Math.floor(Math.random() * allBlockArrays.length)
let nextPick = 0
  
  
  let current = allBlockArrays[randomPick][currentRotation]

  // draw the blocks

  function draw () {
      current.forEach(index => {
          squares[currentPosition + index].classList.add("block")
      }) 
    }


    // delete the blocks

    function unDraw () {
      current.forEach(index => {
          squares[currentPosition + index].classList.remove("block")
      }) 
    }

    function moveLeft () {
        unDraw()
        currentPosition --
        draw()
    }
 
    function moveRight () {
        unDraw()
        currentPosition ++
        draw()
    }

    function moveDown () {
        unDraw()
        currentPosition += rowWidth
        draw()
        lockBlock()

    }

    function rotate() {
        unDraw()
        currentRotation ++
        if(currentRotation === 4) {
            currentRotation = 0
        }
        current = allBlockArrays[randomPick][currentRotation]
        draw()
    }



// Set up user input
  function userInput(e) {
    if(e.keyCode === 37) {
      moveLeft()
    } else if (e.keyCode === 39) {
        moveRight()
    } else if (e.keyCode === 40) {
        moveDown()
    } else if (e.keyCode === 38) {
      rotate()
    }
  }
  document.addEventListener('keyup', userInput)
 
// move the block down faster by holding the downkey

function keyheldDown (e) {
    if (e.keyCode === 40) {
        moveDown()
    }
}
document.addEventListener('keydown', keyheldDown)


function lockBlock () {
    // Stop the block and set in place when at the bottom or adjacent to another
    if(current.some(index => squares[currentPosition + index + rowWidth].classList.contains('block-in-use'))) {
        current.forEach(index => squares[currentPosition + index].classList.add('block-in-use'))
        //draw a new 
        randomPick = nextPick
        nextPick = Math.floor(Math.random() * allBlockArrays.length)
        current = allBlockArrays[randomPick][currentRotation]
        currentPosition = 5
        currentRotation = 0
        draw()
        updateScore()
    }
    

}
    




  












})