const tetrisBoard = document.querySelector('section.tetrisBoard')
for( let i = 0  ; i<200 ; i++ ){
    console.log('i')
    const divEl = document.createElement('div')
    tetrisBoard.appendChild(divEl)
}

const nextPiece = document.querySelector('#nextPiece')
console.log(nextPiece)
for( let i = 0  ; i<16 ; i++ ){
    const divEl = document.createElement('div')
    nextPiece.appendChild(divEl)
}

const secondNextPiece = document.querySelector('#secondNextPiece')
console.log(nextPiece)
for( let i = 0  ; i<16 ; i++ ){
    const divEl = document.createElement('div')
    secondNextPiece.appendChild(divEl)
}

//matrix creation
const matrix = new Matrix
console.log(matrix.matrix)

//event to the buttons
document.addEventListener('keydown', (event)=>{
    if(event.key==='ArrowUp' && !matrix.isNextMoveInContactWithBlocksOrBottom(1) ){
        matrix.rotate()
        reRender()
    }else if(event.key==='ArrowLeft' && !matrix.isNextMoveInContactWithBlocksOrBottom(4)){
        matrix.goLeft()
        reRender()
    }else if(event.key==='ArrowRight' && !matrix.isNextMoveInContactWithBlocksOrBottom(2)){
        matrix.goRight()
        reRender()
    }else if(event.key==='ArrowDown' && !matrix.isNextMoveInContactWithBlocksOrBottom(3)){
        matrix.goDown()
        reRender()
    }
})

for(let i=0 ; i<2 ; i++){
    matrix.addToTheQueue()
}

const printPieceN = (index, element) => {
    const pieceToPrint=matrix.getPieceOfIndexNInQueue(index)
    const color = matrix.queue[index].color
    console.log('color',color)
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
    console.log('BBAASSEE',base)
}

printPieceN(1,nextPiece)

const reRender = ()=>{
    console.log('---',matrix.getResult())
    matrix.getResult().flat().forEach((el,i) => {
        const div=document.querySelector(`.tetrisBoard div:nth-child(${i+1})`)
        div.removeAttribute( 'class' )
        div.classList.add( 'boardUnit' )
        div.classList.add( el>0 ? colors[el-1] : 'blank' )
        //console.log(el)
    });
}

reRender()

setInterval( ()=>{
    console.log('---------------------------------------------')
    //test if the block can go down
    if(!matrix.isNextMoveInContactWithBlocksOrBottom(3)){
        matrix.goDown()
        reRender()
    }else{
        matrix.matrix=matrix.getResult()
        matrix.addToTheQueue()
        matrix.removeFromQueue()
        printPieceN(1,nextPiece)
        // printPieceN(2,secondNextPiece)
        //special color
        matrix.makeFullLinesColored()
        reRender()
        setTimeout(()=>{
            matrix.eraseFullLines()
            reRender()
        },200)        
    }
},500)

