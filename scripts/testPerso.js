const matrixFile = require('./matrix')
const tetromino= require('./tetromino')
const printMatrix = (matrix) =>{
    console.log(matrix.map( line => {
        return line.join('  .  ')+' '
    }).join('\n'))
}

const matrix = new matrixFile.Matrix()

matrix.addToTheQueue()

console.log( '----->', matrix.goRight() )

module.exports = {
    printMatrix
}