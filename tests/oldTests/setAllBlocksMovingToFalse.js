const Matrix = require('../scripts/matrix')
const matrixListFrom = require('./matrixFiles/setAllBlocksMovingToFalse')

const matrix = new Matrix.Matrix()

describe('down tests', () => {
    test("all false ", () => {
        matrix.Matrix=matrixListFrom.matrixFalse
        matrix.setAllMovingBlocksToFalse()
        expect(matrix.matrix).toEqual(matrixListFrom.matrixFalse);
    });
    test("all true ", () => {
        matrix.Matrix=matrixListFrom.matrixTrue
        matrix.setAllMovingBlocksToFalse()
        expect(matrix.matrix).toEqual(matrixListFrom.matrixFalse);
    });
    test("random", () => {
        matrix.Matrix=matrixListFrom.matrixFalseResult
        matrix.setAllMovingBlocksToFalse()
        expect(matrix.matrix).toEqual(matrixListFrom.matrixFalse);
    });
})