const Matrix = require('../scripts/matrix')
const matrixListFrom = require('./matrixFiles/isLineCompleteMatrix')

const matrix = new Matrix.Matrix()

describe('down tests', () => {
    test("no line is false", () => {
        matrix.Matrix=matrixListFrom.matrix1
        expect(matrix.isLineComplet()).toEqual(0);
    });
    test("one line is true", () => {
        matrix.Matrix=matrixListFrom.matrix2
        matrix.isLineComplet()
        expect(matrix.isLineComplet()).toEqual(1);
    });
    test("random blocks is true", () => {
        matrix.Matrix=matrixListFrom.matrix3
        matrix.isLineComplet()
        expect(matrix.isLineComplet()).toEqual(1);
    });
    test("random blocks is towers", () => {
        matrix.Matrix=matrixListFrom.matrix4
        matrix.isLineComplet()
        expect(matrix.isLineComplet()).toEqual(0);
    });
    test("random blocks is towers", () => {
        matrix.Matrix=matrixListFrom.matrix5
        matrix.isLineComplet()
        expect(matrix.isLineComplet()).toEqual(4);
    });
})