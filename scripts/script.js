const tetrisMusic = new Audio('./music/music.mp3')

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

const wholeTetrisBoard = document.querySelector('.boards')

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

//sounds
const soundContainer = document.querySelector('.soundContainer')
const soundOn = document.querySelector('.sound.on')
const soundOff = document.querySelector('.sound.off')
let onOff=true
let musicRate = 1

soundContainer.addEventListener('click',()=>{
    onOff=!onOff
    if(onOff){
       soundOff.style.display="block"
       soundOn.style.display="none"
       tetrisMusic.load()
       tetrisMusic.play()
       tetrisMusic.playbackRate = matrix.level <=1 ? 1 : 1 + 0.06*matrix.level
    }else{
        soundOff.style.display="none"
       soundOn.style.display="block" 
       tetrisMusic.pause()
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
    scorePs[0].classList.remove('animOneLine','animTwoLines','animThreeLines','animTetrisLines', 'shakeIt')
    if(number===1){
        scorePs[0].classList.add('animOneLine')
    }else if(number===2){
        scorePs[0].classList.add('animTwoLines')
    }else if(number===3){
        scorePs[0].classList.add('animThreeLines')
    }else if(number===4){
        wholeTetrisBoard.classList.add('shakeIt')
        scorePs[0].classList.add('animTetrisLines')
    }
}

const setBlocksStyle = () =>{
    const blocks = document.querySelectorAll(".boardUnit:not(.blank)")
    blocks.forEach(block=>{
        block.classList.add('block')
    })
}

const enterNewScoreInLocalStorage = (name, score) =>{
    const newLeaderBoard = JSON.parse(localStorage.getItem('leaderBoard')).filter((line,i)=>i<9)
    const newLine = {name,score}
    newLeaderBoard.push(newLine)
    localStorage.setItem('leaderBoard',JSON.stringify(newLeaderBoard.sort((a,b)=>b.score-a.score)))
}

const displayFinalScore = () =>{
    const scores = JSON.parse(localStorage.getItem('leaderBoard'))
    if( matrix.score > scores[scores.length-1].score ){
        //to display the leaderBoard
        const wholeLeaderBoard = document.querySelector('.finalScore')
        wholeLeaderBoard.style.display="flex";
        //to add the new Line
        const ulLeaderBoard = document.querySelector('.scoreBoard')
        const playerScore = {
            name: 'temp',
            score: matrix.score
        }
        const newLeaderBoard = scores.filter((line,i)=>i<9)
        newLeaderBoard.push(playerScore)
        newLeaderBoard.sort((a,b)=> b.score-a.score ).forEach(player=>{
            const playerLi = document.createElement('li')
            playerLi.innerHTML= player.name==='temp' ? `<input id="newScore"> <div>${player.score}</div>` : `<div>${player.name}</div><div>${player.score}</div>`
            ulLeaderBoard.appendChild(playerLi)
        })
        document.querySelector('#enterNewScore').addEventListener('click',()=>{
            const inputVal = document.querySelector('#newScore').value
            ulLeaderBoard.innerHTML=""
            enterNewScoreInLocalStorage(inputVal, matrix.score)
            wholeLeaderBoard.style.display="none"
            //reset
            menu()
            matrix=new Matrix()
            render()
        })
        
    }else{
        const looserMenu = document.querySelector('.looserMenu')
        looserMenu.style.display='flex'
        document.querySelector('#restart').addEventListener('click',()=>{
            looserMenu.style.display='none'
            launch()
        })
    }
}

const render = ()=>{
    matrix.getResult().flat().forEach((el,i) => {
        const div=document.querySelector(`.tetrisBoard div:nth-child(${i+1})`)
        div.removeAttribute( 'class' )
        div.classList.add( 'boardUnit' )
        
        div.classList.add( el>0 ? colors[el-1] : 'blank' )
        if(el===8){
            div.classList.add('clignotant')
        }
    });
    document.querySelector('.levelP').textContent=matrix.level
    document.querySelector('.linesNumberP').textContent=matrix.linesErasedNumber
    //next pieces
    printPieceN(1,nextPiece)
    printPieceN(2,secondNextPiece)
    //points
    printScore(matrix.score)
    setBlocksStyle()
}

const clock = (timer) =>{
    return setInterval( ()=>{
        console.log('---------------------------------------------')
        console.log('---------------------------------------------')
        if(matrix.queue[0].y==-3 &&  previous===-2){ 
            console.log('---> FINISHHHHHHHHHH')
            console.log('---> FINISHHHHHHHHHH')
            clearInterval(intervalId)
            displayFinalScore()
            tetrisMusic.pause()
        }
        previous = matrix.queue[0].y
         //test if the block can go down
        if(!matrix.isNextMoveInContactWithBlocksOrBottom(3)){
            matrix.goDown()
            render()
        }else{
            //if the block is blocked
            matrix.matrix=matrix.getResult()
            matrix.addToTheQueue()
            matrix.removeFromQueue()
            //special color
            const madeFullLinesColored = matrix.makeFullLinesColored()
            render()
            if(madeFullLinesColored){
                clearInterval(intervalId)
                setTimeout(()=>{
                    const erasedLinesNumber = matrix.eraseFullLines()
                    animateScore(erasedLinesNumber)
                    render()
                    const oldLevel = matrix.level
                    matrix.increaseLevelIfPossible()
                    if(oldLevel!=matrix.level){
                        tetrisMusic.playbackRate = matrix.level <=1 ? 1 : 1 + 0.06*matrix.level                 
                    }
                },400)
                intervalId=clock(matrix.getTimingRelatedToThisLevel())
            }
        }
    },timer)
}

// INITIALISATION
let matrix = null
let intervalId = null
let previous = false
let timing = false

const launch = () =>{
    clearInterval(intervalId)
    matrix=null
    matrix = new Matrix()
    timing = matrix.getTimingRelatedToThisLevel()
    matrix.initializeQueue()
    printPieceN(1,nextPiece)
    printPieceN(2,secondNextPiece)
    render()
    tetrisMusic.load()
    tetrisMusic.play()
    tetrisMusic.loop=true

    timing=600
    intervalId = clock(timing)
}

const menu = () =>{
    const menuWindow = document.querySelector('.mainMenu') 
    menuWindow.style.display='flex'
    document.querySelector('#startGame').addEventListener('click',()=>{
        launch()
        menuWindow.style.display='none'
    })
}

menu()