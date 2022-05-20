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

matrix.rotate()

console.log( '----->', matrix.goRight() )

matrix.rotate()
matrix.rotate()
matrix.rotate()

console.log( '----->', matrix.goRight() )

matrix.goDown()

const matrixToPrint = matrix.getResult()

printMatrix(matrixToPrint)

