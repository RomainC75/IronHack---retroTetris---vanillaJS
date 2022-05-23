const Matrix = require('../scripts/matrix')
const matrixList = require('./matrixFiles/isCollisionMatrix')
const Tetro = require('../scripts/tetromino')
const matrix = new Matrix.Matrix()

const testPerso = require('../scripts/testPerso')
 
describe('Collisions tests !', () => {
    test("1 : no collision", () => {
        const tetro = new Tetro.RectoL()
        tetro.y=11
        tetro.x = 4
        matrix.Matrix=matrixList.matrix1
        testPerso.printMatrix(matrix.getResult(tetro))
        expect(matrix.getResult(tetro)).not.toBe(false);
    });
    test("2 : collision", () => {
        const tetro = new Tetro.RectoL()
        tetro.x=4
        tetro.y=12
        matrix.Matrix=matrixList.matrix1
        expect(matrix.getResult(tetro)).toBe(false);
    });
    test("3 : collision", () => {
        const tetro = new Tetro.RectoL()
        tetro.rotateTetromino()
        tetro.y=11
        tetro.x=4
        matrix.Matrix=matrixList.matrix1
        expect(matrix.getResult(tetro)).toBe(false);
    });
    test("4 : no collision", () => {
        const tetro = new Tetro.RectoL()
        tetro.rotateTetromino()
        tetro.rotateTetromino()
        tetro.rotateTetromino()
        tetro.y=16
        tetro.x=4
        matrix.Matrix=matrixList.matrix1
        testPerso.printMatrix(matrix.getResult(tetro))
        expect(matrix.getResult(tetro)).not.toBe(false);
    });
    
})



