class Tetromino{
    constructor(){
        //upper left coordonnates
        this.x = 4
        this.y = 5
        this.positionIndex=0
    }
    rotateTetromino(){
        this.positionIndex= (this.positionIndex+1)%4
        console.log('---> new position : ',this.positionIndex)
    }
    getTetrominoActualPositionArray(){
        return this.positions[this.positionIndex]
    }
    goDownTetromino(){
        this.y++
    }
    distanceToTheRight(index){
        //console.log('index',index)
        const actualPosition = typeof index==='number' ? this.positions[index] : this.positions[this.positionIndex] 
        //console.log('actual position',this.positionIndex ,actualPosition)
        let rightSpace=0
        for(let i=this.totalWidth-1 ; i>=0 ; i--){
            if(actualPosition.some( line =>{
                //console.log('return : ',i,line)
                return line[i]===1
            })){
                rightSpace = rightSpace==0 ? i : rightSpace
                //console.log( 'rightSpace' , rightSpace )
            }
        }
        console.log('----->RETURN rightSpace',rightSpace)
        return rightSpace
    }
    distanceToTheLeft(index){
        const actualPosition = typeof index==='number' ? this.positions[index] : this.positions[this.positionIndex] 
        //console.log('actual position',this.positionIndex ,actualPosition)
        let leftSpace=2
        for(let i=0 ; i<this.totalWidth ; i++){
            if(actualPosition.some( line =>{
                //console.log('return : ',i,line)
                return line[i]===1
            })){
                leftSpace = leftSpace==2 ? i : leftSpace
                //console.log( 'rightSpace' , leftSpace )
            }
        }
        return leftSpace
    }
    distanceToTheBottom(index){
        const actualPosition = typeof index==='number' ? this.positions[index] : this.positions[this.positionIndex]
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



// module.exports={
//     RectoL
// }