class Barre{
    constructor(colorId){
        this.color=colorId
        this.positions=[
            [[0,-1],[0,0],[0,1],[0,2]],
            [[-1,0],[0,0],[1,0],[2,0]],
        ]
        this.position=0
    }
    rotate(){
        this.position = positions.length%positions2
        return positions[position]
    }
}