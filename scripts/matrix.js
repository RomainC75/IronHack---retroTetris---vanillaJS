class Matrix{
    constructor (){
        this.score=0
        this.level=0
        this.isMoving=true
        this.matrix = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ]
        this.newLine=[0,0,0,0,0,0,0,0,0,0]   
        this.queue=[]
        this.linesErasedNumber=0
        this.timing=[600,500,450,400,350,300,270,230,200,170,150]
        this.levelsAndLines = [0,2,4,6,8,10,12,14,16,18,20]
    }
    get Matrix() {
        return this.matrix
    }
    set Matrix(matrixToSet){
        if(matrixToSet.length===20 && matrixToSet.every(line=>line.length===10) && matrixToSet.flat().every(unit=>typeof unit==='object')){
            this.matrix=matrixToSet
        }
    }
    increaseLevelIfPossible(){
        const correspondingLevel = this.levelsAndLines.findIndex(val=>this.linesErasedNumber < val)
        this.level = correspondingLevel==-1 ? 10 : correspondingLevel-1
    }
    getTimingRelatedToThisLevel(){
        return this.timing[this.level]
    }
    addToTheQueue(){
        const elements = [new RectoL(), new VersoL(), new Square(), new Barre(), new SCurve(), new ZCurve(), new TBlock()]
        this.queue.push(elements[Math.floor(Math.random()*7)])
        // this.queue.push(elements[0])
        // const elements = [new Barre()]
    }
    initializeQueue(){
        for(let i=0 ; i<3 ; i++){
            this.addToTheQueue()
        }
    }
    getPieceOfIndexNInQueue(index){
        return this.queue[index].positions[0]
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
        if( this.queue[0].x > -1 * this.queue[0].distanceToTheLeft() ){
            this.queue[0].x--
        }
    }
    goRight(){
        if ( this.queue[0].x < 10 - ( this.queue[0].distanceToTheRight() +1 ) ){
            this.queue[0].x++
        }
    }
    rotate(){
        if(this.isRotationPossibleAgainstTheSideWalls()){
            this.queue[0].rotateTetromino()
        }
    }
    isRotationPossibleAgainstTheSideWalls(){
        const nextPositionDistanceToTheLeft =  this.queue[0].distanceToTheLeft((this.queue[0].positionIndex+1)%4)
        const nextPositionDistanceToTheRight =  this.queue[0].distanceToTheRight((this.queue[0].positionIndex+1)%4)
        if( this.queue[0].x >= -1 * nextPositionDistanceToTheLeft && this.queue[0].x < 10 - ( nextPositionDistanceToTheRight ) && this.queue[0].y+this.queue[0].distanceToTheBottom() < 19){
            return true
        }else {
            return false
        }
    }
    // canGoDown(){
    //     return this.queue[0].y+this.queue[0].distanceToTheBottom() < 19 ? true : false
    // }
    goDown(){   
        if( this.queue[0].y+this.queue[0].distanceToTheBottom() < 19 ){
            this.queue[0].goDownTetromino()
        }
    }
    //use it for : 
    // no parameter -> return the new matrix mixed with the tetromino !
    // if parameter -> test if there is collision between tetromino and the base !
    getResult(copyTetro){
        const tetro = copyTetro ? copyTetro : this.queue[0]
        let isProblem = false
        const result = this.matrix.map( (line, y, arrayM)=> {
            return line.map( (unit, x, array)=>{
                if(x>=tetro.x && y>=tetro.y && x<tetro.x+tetro.totalWidth && y<tetro.y+tetro.totalWidth){
                    if(unit>0 && tetro.positions[tetro.positionIndex][y-tetro.y][x-tetro.x]==1){
                        isProblem=true
                    }
                    return tetro.positions[tetro.positionIndex][y-tetro.y][x-tetro.x]==1 ? tetro.color : unit
                }
                //-------------------------------------------------------
                //-------------------------------------------------------
                //-------------------------------------------------------
                if(y==arrayM.length-1 && tetro.y+tetro.distanceToTheBottom() > 19){
                    isProblem=true
                }
                return unit
            })
        })
        return isProblem ? false : result
    }

    isNextMoveInContactWithBlocksOrBottom(direction){
        //1 : rotate  - 2 : right - 3 : down - 4 : left
        const copyTetro = new Tetromino()
        copyTetro.x=this.queue[0].x
        copyTetro.y=this.queue[0].y
        copyTetro.positionIndex=this.queue[0].positionIndex
        copyTetro.positions=this.queue[0].positions
        copyTetro.color=this.queue[0].color
        copyTetro.totalWidth=this.queue[0].totalWidth
        if(typeof direction !== 'number'){
            return null
        }
        if(direction==1){
            copyTetro.rotateTetromino()
        }else if(direction==2){
            copyTetro.x++
        }else if(direction==3){
            copyTetro.y++
        }else if(direction==4){
            copyTetro.x--
        }
        // if(this.getResult(copyTetro)!==false && this.canGoDown()){
            if(this.getResult(copyTetro)!==false ){
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
    makeFullLinesColored(){
        let madeFullLinesColored = false
        this.matrix = this.matrix.map(line=>{
            if(line.every(unit=>unit>0)){
                madeFullLinesColored = true
                return [8,8,8,8,8,8,8,8,8,8]
            }else{
                return line
            }
        })
        return madeFullLinesColored
    }
    eraseFullLines(){
        //erase full lines and return the number corresponding to the erased qty
        const filtered = this.matrix.filter(line=>!line.every(unit=>unit>0))
        const filteredLineNumber = 20-filtered.length
        this.increasePoints(filteredLineNumber)
        this.linesErasedNumber+=filteredLineNumber
        for(let i=0 ; i<filteredLineNumber ; i++){
            filtered.unshift(this.newLine)
        }
        this.matrix=filtered
        return filteredLineNumber
    }
    increasePoints(lineNumber){
        const multiplicator = this.level == 0 ? 1 : this.level
        if(lineNumber===1){
            this.score+=100*multiplicator
        }else if(lineNumber===2){
            this.score+=300*multiplicator
        }else if(lineNumber===3){
            this.score+=500*multiplicator
        }else if(lineNumber===4){
            this.score+=800*multiplicator
        }
    }
}

