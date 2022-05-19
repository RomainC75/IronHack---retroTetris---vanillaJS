const Matrix = require('../scripts/matrix')
const matrixListFrom = require('./matrixFiles/isLineCompleteMatrix')
const matrixListReturn = require('./matrixFiles/eraseLinesReturn')

const matrix = new Matrix.Matrix()

describe('down tests', () => {
    test("empty matrix", () => {
        matrix.Matrix=matrixListFrom.matrix1
        matrix.eraseLines(matrix.isLineComplet())
        expect(matrix.matrix).toEqual(matrixListReturn.matrix1);
    });
    
    test("one line", () => {
        matrix.Matrix=matrixListFrom.matrix2
        matrix.eraseLines(matrix.isLineComplet())
        expect(matrix.matrix).toEqual(matrixListReturn.matrix2);
    });
    test("one line + random", () => {
        matrix.Matrix=matrixListFrom.matrix3
        console.log('MATRIX4--->',matrix.Matrix)
        console.log('--->number to erase', matrix.isLineComplet())
        matrix.eraseLines(matrix.isLineComplet())
        console.log('RETURN !!!--->',matrix.Matrix)
        expect(matrix.matrix).toEqual(matrixListReturn.matrix3);
    });
    test("towers+bridges", () => {
        matrix.Matrix=matrixListFrom.matrix4
        matrix.eraseLines(matrix.isLineComplet())
        expect(matrix.matrix).toEqual(matrixListReturn.matrix4);
    });
    test("multilines", () => {
        matrix.Matrix=matrixListFrom.matrix5
        matrix.eraseLines(matrix.isLineComplet())
        expect(matrix.matrix).toEqual(matrixListReturn.matrix5);
    });
})