//coordonnates : start from the upper left corner
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
        this.color=3
        this.totalWidth=3
    }
}

class VersoL extends Tetromino{
    constructor(){
        super()
        this.positions=[
            [[1,0,0],[1,1,1],[0,0,0]],
            [[0,1,1],[0,1,0],[0,1,0]],
            [[0,0,0],[1,1,1],[0,0,1]],
            [[0,1,0],[0,1,0],[1,1,0]]
        ]
        this.color=2
        this.totalWidth=3
    }
}

class Square extends Tetromino{
    constructor(){
        super()
        this.positions=[
            [[1,1,0],[1,1,0],[0,0,0]],
            [[1,1,0],[1,1,0],[0,0,0]],
            [[1,1,0],[1,1,0],[0,0,0]],
            [[1,1,0],[1,1,0],[0,0,0]],
        ]
        this.color=4
        this.totalWidth=3
    }
}

class Barre extends Tetromino{
    constructor(){
        super()
        this.positions=[
            [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],
            [[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],
            [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],
            [[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],
        ]
        this.color=1
        this.totalWidth=4
    }
}

class SCurve extends Tetromino{
    constructor(){
        super()
        this.positions=[
            [[0,1,1],[1,1,0],[0,0,0]],
            [[0,1,0],[0,1,1],[0,0,1]],
            [[0,0,0],[0,1,1],[1,1,0]],
            [[1,0,0],[1,1,0],[0,1,0]],
        ]
        this.color=5
        this.totalWidth=3
    }
}

class ZCurve extends Tetromino{
    constructor(){
        super()
        this.positions=[
            [[1,1,0],[0,1,1],[0,0,0]],
            [[0,0,1],[0,1,1],[0,1,0]],
            [[0,0,0],[1,1,0],[0,1,1]],
            [[0,1,0],[1,1,0],[1,0,0]],
        ]
        this.color=7
        this.totalWidth=3
    }
}

class TBlock extends Tetromino{
    constructor(){
        super()
        this.positions=[
            [[0,1,0],[1,1,1],[0,0,0]],
            [[0,1,0],[0,1,1],[0,1,0]],
            [[0,0,0],[1,1,1],[0,1,0]],
            [[0,1,0],[1,1,0],[0,1,0]],
        ]
        this.color=6
        this.totalWidth=3
    }
}
