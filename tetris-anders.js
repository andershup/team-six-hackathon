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
    [1,2,rowWidth,rowWidth+1],
    
    
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
  

  let startingIndex = 5;
  let currentRotation = 0

  console.log(currentRotation)
  let randomPick = Math.floor(Math.random() * allBlockArrays.length)
  let nextPick = Math.floor(Math.random() * allBlockArrays.length)
  
  let current = allBlockArrays[randomPick][currentRotation]

  // draw the blocks

  function draw () {
      current.forEach(index => {
          squares[index].classList.add("block")
      }) 
    }
   
   draw() 




  












})