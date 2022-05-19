const matrixListFrom = require('../tests/matrixFiles/isLineCompleteMatrix')
const matrixListReturn = require('../tests/matrixFiles/eraseLinesReturn')


class Matrix{
    constructor (){
        this.score=0
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
    }
    get Matrix() {
        return this.matrix
    }
    set Matrix(matrixToSet){
        if(matrixToSet.length===20 && matrixToSet.every(line=>line.length===10) && matrixToSet.flat().every(unit=>typeof unit==='object')){
            this.matrix=matrixToSet
        }
    }
    isLineUnderMovingBlocks(line, lineAbove){
        return liveAbove.some( unit=>unit.moving)
    }
    isMovingBlockInContact(matrix){
        //from the up to the bottom !
        return this.matrix.some( (line,l,arrayM)=>{
            return line.some( (unit,j,arrayL) => {
                if(l<=18){
                    return unit.moving && arrayM[l+1][j].color>0 && !arrayM[l+1][j].moving
                }else{
                    return unit.moving
                }
            } )
        } )
    }
    isMovingBlockTouching(){
        return this.matrix.some( (line,i,arrayM)=>{
            return line( (unit, j, arrayL)=>{
                if( unit.moving && ( (i<19 && !arrayM[i+1][j].moving && arrayM[i+1][j].color===0) || (i==19) ) ){
                    return true
                }
            } )
        })
    }
    setAllMovingBlocksToFalse(){
        this.matrix= this.matrix.map( line => line.map(unit=>{
            return {
                ...unit,
                moving:false
            }
        }))
        console.log(this.matrix)
    }
    goDown(){
        //from the bottom up!
        this.matrix = this.matrix.reverse().map( (line,lineIndex,arrayM) =>{
            return line.map( (unit, j, arrayL)=>{
                if( lineIndex<19 && !arrayM[lineIndex][j].moving && arrayM[lineIndex][j].color>0 ){
                    // not moving blocks
                    return unit
                }else if( lineIndex<19 && (arrayM[lineIndex+1][j].moving || arrayM[lineIndex+1][j].color===0) ){
                    // blank blocks under moving blocks
                    return arrayM[lineIndex+1][j]
                }else if(lineIndex>19){
                    // last line
                    return {color:0,moving:false}
                }else{
                    return unit
                }
            })
        }).reverse()
    }
    //return completed lines quantity
    isLineComplet(){
        return this.matrix.reduce((accu,current)=>current.every(unit=>unit.color>0) ? accu+1 : accu,0)
    }
    //erase completed lines and unshift new blank lines
    eraseLines(completedLinesNumber){       
        this.matrix=this.matrix.filter(line => !line.every(unit=>unit.color>0))
        for(let i=0 ; i<completedLinesNumber ; i++){
            this.matrix.unshift(this.newLine)
        }
    }

}

// const matrix = new Matrix()
// console.log(matrix.Matrix)
// matrix.eraseLines(matrix.isLineComplet())
// console.log(matrix.Matrix)

module.exports={Matrix}