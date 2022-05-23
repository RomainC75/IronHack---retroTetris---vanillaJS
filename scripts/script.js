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



const reRender = ()=>{
    console.log('---',matrix.getResult())
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
    console.log('---------------------------------------------')
    //test if the block can go down
    if(!matrix.isNextMoveInContactWithBlocksOrBottom(3)){
        matrix.goDown()
        reRender()
    }else{
        matrix.matrix=matrix.getResult()
        matrix.addToTheQueue()
        matrix.removeFromQueue()
        
        //special color

        matrix.makeFullLinesColored()
        reRender()
        setTimeout(()=>{
            matrix.eraseFullLines()
            reRender()
        },200)
        

        
    }
},500)

