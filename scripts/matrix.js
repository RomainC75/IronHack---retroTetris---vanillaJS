// const tetromino = require('./tetromino')

class Matrix{
    constructor (){
        this.score=0
        this.isMoving=true
        this.matrix = [
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
            [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
        ]
        this.newLine=[{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}]   
        this.queue=[]  
    }
    get Matrix() {
        return this.matrix
    }
    set Matrix(matrixToSet){
        if(matrixToSet.length===20 && matrixToSet.every(line=>line.length===10) && matrixToSet.flat().every(unit=>typeof unit==='object')){
            this.matrix=matrixToSet
        }
    }
    addToTheQueue(){
        this.queue.push(new RectoL())
    }
    removeFromQueue(){
        this.queue.shift()
    }
    tryToMoveLeft(){
        if(this.moving && this.queue[0].x>0){
            this.queue.x--
        }
    }
    goLeft(){
        //to the left border
        if( this.queue[0].x > -1 * this.queue[0].distanceToTheLeft() ){
            this.queue[0].x--
        }
    }
    goRight(){
        //to the right border
        console.log('---->Distance to the right',this.queue[0].distanceToTheRight())
        if ( this.queue[0].x < 10 - ( this.queue[0].distanceToTheRight() +1 ) ){
            this.queue[0].x++
        }
    }
    rotate(){
        if(this.isRotationPossibleAgainstTheSideWalls()){
            this.queue[0].rotateTetromino()
        }
        console.log('to the bottom',this.queue[0].distanceToTheBottom())
    }
    isRotationPossibleAgainstTheSideWalls(){
        //--------------------------------------------------------
        const nextPositionDistanceToTheLeft =  this.queue[0].distanceToTheLeft((this.queue[0].positionIndex+1)%4)
        const nextPositionDistanceToTheRight =  this.queue[0].distanceToTheRight((this.queue[0].positionIndex+1)%4)
        // if( this.queue[0].x >= -1 * nextPositionDistanceToTheLeft ){
        //     console.log('true ')
        console.log('x position : ',this.queue[0].x,'nextPositionDistanceToTheLeft',nextPositionDistanceToTheLeft)
        console.log('x position : ',this.queue[0].x,'nextPositionDistanceToTheRight',nextPositionDistanceToTheRight)
        if( this.queue[0].x >= -1 * nextPositionDistanceToTheLeft && this.queue[0].x < 10 - ( nextPositionDistanceToTheRight ) && this.queue[0].y+this.queue[0].distanceToTheBottom() < 19){
            console.log('true')
            return true
        }else {
            console.log('false')
            return false
        }
    }
    goDown(){
        console.log(this.queue[0].distanceToTheBottom())
        
        if( this.queue[0].y+this.queue[0].distanceToTheBottom() < 19 ){
            console.log('--->',this.queue[0].y+this.queue[0].distanceToTheBottom())
            this.queue[0].goDownTetromino()
        }
    }
    //use it for : 
    // normal
    // test if there is collision between tetromino and the base !
    getResult(copyTetro){
        const tetro = copyTetro ? copyTetro : this.queue[0]
        //console.log(tetro.positionIndex,tetro.positions)
        let isProblem = false
        //console.log(tetro)
        const result = this.matrix.map( (line, y, arrayM)=>{
            return line.map( (unit, x, array)=>{
                if(x>=tetro.x && y>=tetro.y && x<tetro.x+tetro.totalWidth && y<tetro.y+tetro.totalWidth){
                    //console.log(y,x,'---',unit,'----',tetro.positions[tetro.positionIndex][y-tetro.y][x-tetro.x])
                    if(unit.color>0 && tetro.positions[tetro.positionIndex][y-tetro.y][x-tetro.x]==1){
                        console.log('--->collision')
                        isProblem=true
                    }
                    return tetro.positions[tetro.positionIndex][y-tetro.y][x-tetro.x]==1 ? 1 : unit.color
                }
                return unit.color
            })
        })
        return isProblem ? false : result
    }

    isNextMoveInContactWithBlocks(direction){
        //1 : rotate  - 2 : right - 3 : down - 4 : left
        const copyTetro = new Tetromino()
        copyTetro.x=this.queue[0].x
        copyTetro.y=this.queue[0].y
        copyTetro.positionIndex=this.queue[0].positionIndex
        copyTetro.positions=this.queue[0].positions
        copyTetro.color=this.queue[0].color
        copyTetro.totalWidth=this.queue[0].totalWidth

        if(typeof direction !== 'number'){
            console.log(' isNextMoveInContactWithBlocks is NULL ! ' )
            return null
        }
        if(direction==1){
            copyTetro.rotateTetromino()
        }else if(direction==4){
            copyTetro.x--
        }else if(direction==2){
            copyTetro.x++
        }
        if(this.getResult(copyTetro)!==false){
            return false
        }
        return true
    }


    getDistanceToTheRightOfTheFirstTetromino(){
        return this.queue[0].distanceToTheRight()
    }
    getDistanceToTheLeftOfTheFirstTetromino(){
        return this.queue[0].distanceToTheLeft()
    }

}

// module.exports={Matrix}



this.matrix = [
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
    [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
]