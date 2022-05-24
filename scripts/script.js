const tetrisBoard = document.querySelector('section.tetrisBoard')
for( let i = 0  ; i<200 ; i++ ){
    const divEl = document.createElement('div')
    tetrisBoard.appendChild(divEl)
}

const nextPiece = document.querySelector('#nextPiece')
for( let i = 0  ; i<16 ; i++ ){
    const divEl = document.createElement('div')
    nextPiece.appendChild(divEl)
}

const secondNextPiece = document.querySelector('#secondNextPiece')
for( let i = 0  ; i<16 ; i++ ){
    const divEl = document.createElement('div')
    secondNextPiece.appendChild(divEl)
}

const scorePs = document.querySelectorAll('.points__scores__score')
const printScore = (score) =>{
    for(let i=0 ; i<2 ; i++){
        scorePs[i].textContent=score
    }
}

//walls construction
const wallsGrid = document.querySelector('.tetrisWalls')
for(let i=0 ; i<264 ; i++){
    const element = document.createElement('div')
    element.classList.add('wallBlock')
    wallsGrid.appendChild(element)
}

//event to the buttons
document.addEventListener('keydown', (event)=>{
    if(event.key==='ArrowUp' && !matrix.isNextMoveInContactWithBlocksOrBottom(1) ){
        matrix.rotate()
        render()
    }else if(event.key==='ArrowLeft' && !matrix.isNextMoveInContactWithBlocksOrBottom(4)){
        matrix.goLeft()
        render()
    }else if(event.key==='ArrowRight' && !matrix.isNextMoveInContactWithBlocksOrBottom(2)){
        matrix.goRight()
        render()
    }else if(event.key==='ArrowDown' && !matrix.isNextMoveInContactWithBlocksOrBottom(3)){
        matrix.goDown()
        render()
    }
})

const printPieceN = (index, element) => {
    const pieceToPrint=matrix.getPieceOfIndexNInQueue(index)
    const color = matrix.queue[index].color
    let base= [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ]
    base = base.map( (line,y)=>{
        return line.map( (unit,x) =>{
            return y<pieceToPrint[0].length && x<pieceToPrint.length && pieceToPrint[y][x]===1 ? color : 0
        })
    }).flat().forEach((el,index)=>{
        const elToChange = element.querySelector(`div:nth-child(${index+1})`)
        elToChange.removeAttribute('class')
        elToChange.classList.add(`${colors[el-1]}`)
    })
}

const animateScore = (number) => {
    scorePs[0].classList.remove('animOneLine','animTwoLines','animThreeLines','animTetrisLines')
    if(number===1){
        scorePs[0].classList.add('animOneLine')
    }else if(number===2){
        scorePs[0].classList.add('animTwoLines')
    }else if(number===3){
        scorePs[0].classList.add('animThreeLines')
    }else if(number===4){
        scorePs[0].classList.add('animTetrisLines')
    }
}

const setBlocksStyle = () =>{
    const blocks = document.querySelectorAll(".boardUnit:not(.blank)")
    blocks.forEach(block=>{
        block.classList.add('block')
    })
}

const render = ()=>{
    //game
    matrix.getResult().flat().forEach((el,i) => {
        const div=document.querySelector(`.tetrisBoard div:nth-child(${i+1})`)
        div.removeAttribute( 'class' )
        div.classList.add( 'boardUnit' )
        div.classList.add( el>0 ? colors[el-1] : 'blank' )
    });
    //next pieces
    printPieceN(1,nextPiece)
    printPieceN(2,secondNextPiece)
    //points
    printScore(matrix.score)
    setBlocksStyle()
}

// INITIALISATION
const matrix = new Matrix
for(let i=0 ; i<3 ; i++){
    matrix.addToTheQueue()
}
printPieceN(1,nextPiece)
printPieceN(2,secondNextPiece)
render()

let previous=0
let intervalId = setInterval( ()=>{
    console.log('---------------------------------------------')
    console.log('---------------------------------------------')
   
    console.log('---->>GET FINISH-----',matrix.isNextMoveInContactWithBlocksOrBottom(3),previous,matrix.queue[0].y)

    
    if(matrix.queue[0].y==-3 &&  previous===-2){
        console.log('---> FINISHHHHHHHHHH')
        console.log('---> FINISHHHHHHHHHH')
        console.log('---> FINISHHHHHHHHHH')
        console.log('---> FINISHHHHHHHHHH')
        clearInterval(intervalId)
    }

    previous = matrix.queue[0].y

     //test if the block can go down
    if(!matrix.isNextMoveInContactWithBlocksOrBottom(3)){
        matrix.goDown()
        render()
    }else{
        matrix.matrix=matrix.getResult()
        matrix.addToTheQueue()
        matrix.removeFromQueue()
        
        //special color
        matrix.makeFullLinesColored()
        render()
        setTimeout(()=>{
            const erasedLinesNumber = matrix.eraseFullLines()
            animateScore(erasedLinesNumber)
            render()
        },200)        
    }
    
},500)