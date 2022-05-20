class Tetromino{
    constructor(){
        this.x = 0
        this.y = 4
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
        positions=[
            [[0,0,1],[1,1,1],[0,0,0]],
            [[0,1,0],[0,1,0],[0,1,1]],
            [[0,0,0],[1,1,1],[1,0,0]],
            [[1,1,0],[0,1,0],[0,1,0]],
        ]
        color=2
        width=3
    }
}