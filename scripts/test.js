const matrixFile = require('./matrix')
const tetromino= require('./tetromino')
const printMatrix = (matrix) =>{
    matrix.forEach( line => {
        
        console.log(line.join('  .  '))
        console.log(' ')
    })
}

const matrix = new matrixFile.Matrix()

matrix.addToTheQueue()

console.log( '----->', matrix.goRight() )



console.log('-------------------------------------',matrix.getDistanceToTheLeftOfTheFirstTetromino())
printMatrix(matrix.getResult())
matrix.rotate()


console.log('-------------------------------------',matrix.getDistanceToTheLeftOfTheFirstTetromino())
printMatrix(matrix.getResult())
matrix.rotate()

console.log('-------------------------------------',matrix.getDistanceToTheLeftOfTheFirstTetromino())
printMatrix(matrix.getResult())
matrix.rotate()

console.log('-------------------------------------',matrix.getDistanceToTheLeftOfTheFirstTetromino())
printMatrix(matrix.getResult())
matrix.rotate()