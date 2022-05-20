class Tetromino{
    constructor(){
        //upper left coordonnates
        this.x = 4
        this.y = 5
        this.positionIndex=0
    }
    rotateTetromino(){
        this.positionIndex= (this.positionIndex+1)%4
    }
    getTetrominoActualPositionArray(){
        return this.positions[this.positionIndex]
    }
    goDownTetromino(){
        this.y++
    }
    
}
//coordonnates : start upper left corner
/**
 * x . .
 * . . .
 * . . .
 */


class RectoL extends Tetromino{
    constructor(){
        super()
        this.positions=[
            [[0,0,1],[1,1,1],[0,0,0]],
            [[0,1,0],[0,1,0],[0,1,1]],
            [[0,0,0],[1,1,1],[1,0,0]],
            [[1,1,0],[0,1,0],[0,1,0]]
        ]
        this.color=2
        this.totalWidth=3
    }
}



module.exports={
    RectoL
}