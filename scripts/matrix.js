// const matrixListFrom = require('../tests/matrixFiles/isLineCompleteMatrix')
// const matrixListReturn = require('../tests/matrixFiles/eraseLinesReturn')

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
            [{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false}],
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
        // console.log(this.queue[0].positions[this.queue[0].positionIndex])
        // console.log(this.queue[0].distanceToTheRight(this.queue[0].positionIndex))
    }
    isRotationPossibleAgainstTheSideWalls(){
        //--------------------------------------------------------
        const nextPositionDistanceToTheLeft =  this.queue[0].distanceToTheLeft((this.queue[0].positionIndex+1)%4)
        const nextPositionDistanceToTheRight =  this.queue[0].distanceToTheRight((this.queue[0].positionIndex+1)%4)
        // if( this.queue[0].x >= -1 * nextPositionDistanceToTheLeft ){
        //     console.log('true ')
        console.log('x position : ',this.queue[0].x,'nextPositionDistanceToTheLeft',nextPositionDistanceToTheLeft)
        console.log('x position : ',this.queue[0].x,'nextPositionDistanceToTheRight',nextPositionDistanceToTheRight)
        if( this.queue[0].x >= -1 * nextPositionDistanceToTheLeft && this.queue[0].x < 10 - ( nextPositionDistanceToTheRight ) ){
            console.log('true')
            return true
        }else {
            console.log('false')
            return false
        }
    }
    goDown(){
        this.queue[0].goDownTetromino()
        
    }
    getResult(){
        const actualPosition = this.queue[0].getTetrominoActualPositionArray()
        const isProblem = false
        return this.matrix.map( (line, y, arrayM)=>{
            return line.map( (unit, x, array)=>{
                if(x>=this.queue[0].x && y>=this.queue[0].y && x<this.queue[0].x+this.queue[0].totalWidth && y<this.queue[0].y+this.queue[0].totalWidth){
                    return actualPosition[y-this.queue[0].y][x-this.queue[0].x]==1 ? 1 : unit.color
                }
                return unit.color
            })
        })
    }
    isNextMoveInContactWithBlocks(direction){
        //1 : rotate  - 2 : right - 3 : down - 4 : left
        const copyTetro = this.queue[0]
        if(typeof direction !== 'number'){
            console.log('isNextMoveInContactWithBlocks is NULL ! ' )
            return null
        }
        if(direction==1){
            copyTetro.rotate()
            
        }

    }


    getDistanceToTheRightOfTheFirstTetromino(){
        return this.queue[0].distanceToTheRight()
    }
    getDistanceToTheLeftOfTheFirstTetromino(){
        return this.queue[0].distanceToTheLeft()
    }

}
// module.exports={Matrix}








// this.matrix = [
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false},{color:0,moving:false}],
//     [{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false},{color:2,moving:false}],
// ]