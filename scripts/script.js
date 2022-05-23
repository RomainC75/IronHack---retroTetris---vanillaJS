
const tetrisBoard = document.querySelector('section.tetrisBoard')
for( let i = 0  ; i<200 ; i++ ){
    console.log('i')
    const divEl = document.createElement('div')
    tetrisBoard.appendChild(divEl)
}

//matrix creation
const matrix = new Matrix
console.log(matrix.matrix)

//event to the buttons
document.addEventListener('keydown', (event)=>{
    if(event.key==='ArrowUp' && !matrix.isNextMoveInContactWithBlocks(1) ){
        matrix.rotate()
        reRender()
    }else if(event.key==='ArrowLeft' && !matrix.isNextMoveInContactWithBlocks(4)){
        matrix.goLeft()
        reRender()
    }else if(event.key==='ArrowRight' && !matrix.isNextMoveInContactWithBlocks(2)){
        matrix.goRight()
        reRender()
    }
})

matrix.addToTheQueue()

const reRender = ()=>{
    //console.log('render', matrix.getResult())
    matrix.getResult().flat().forEach((el,i) => {
        const div=document.querySelector(`.tetrisBoard div:nth-child(${i+1})`)
        div.removeAttribute('class')
        div.classList.add('boardUnit')
        div.classList.add(el>0 ? colors[el-1] : 'blank')
        //console.log(el)
    });
}

reRender()




setInterval( ()=>{

    if(!matrix.isNextMoveInContactWithBlocks(3)){
        matrix.goDown()
    }else{
        matrix.matrix=matrix.getResult()
    }

    reRender()
},500)

