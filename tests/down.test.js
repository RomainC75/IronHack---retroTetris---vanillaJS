const Matrix = require('../scripts/matrix')
const matrixListFrom = require('./matrixFiles/downMatrixFrom')
const matrixListReturn = require('./matrixFiles/downMatrixReturn')

const matrix = new Matrix.Matrix()

describe('down tests', () => {
    test("empty matrix should return empty matrix", () => {
        matrix.Matrix=matrixListFrom.matrix1
        matrix.goDown()
        expect(matrix.matrix).toEqual(matrixListReturn.matrix1);
    });
    test("barre should goDown", () => {
        matrix.Matrix=matrixListFrom.matrix2
        matrix.goDown()
        expect(matrix.matrix).toEqual(matrixListReturn.matrix2);
    });
    test("barre should goDown", () => {
        matrix.Matrix=matrixListFrom.matrix3
        matrix.goDown()
        expect(matrix.matrix).toEqual(matrixListReturn.matrix3);
    });
    test("barre should goDown", () => {
        matrix.Matrix=matrixListFrom.matrix4
        matrix.goDown()
        expect(matrix.matrix).toEqual(matrixListReturn.matrix4);
    });
    test("barre should goDown", () => {
        matrix.Matrix=matrixListFrom.matrix5
        matrix.goDown()
        expect(matrix.matrix).toEqual(matrixListReturn.matrix5);
    });
    test("barre should goDown", () => {
        matrix.Matrix=matrixListFrom.matrix6
        matrix.goDown()
        expect(matrix.matrix).toEqual(matrixListReturn.matrix6);
    });
})