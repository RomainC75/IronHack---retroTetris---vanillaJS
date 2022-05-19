const Matrix = require('../scripts/matrix')
const matrixList = require('./matrixFiles/isBlockTouchingMatrixList')

const matrix = new Matrix.Matrix()


describe('isBlockTouching tests', () => {
    test("matrix1 shouldn't touch", () => {
        matrix.Matrix=matrixList.matrix1
        expect(matrix.isMovingBlockInContact()).toBe(false);
    });
    test("matrix2 should touch - direct contact", () => {
        matrix.Matrix=matrixList.matrix2
        expect(matrix.isMovingBlockInContact()).toBe(true);
    });
    test("matrix3 shoud touch - moving block at the bottom of the grid", () => {
        matrix.Matrix=matrixList.matrix3
        expect(matrix.isMovingBlockInContact()).toBe(true);
    });
    test("empty matrix4 shouldn't touch", () => {
        matrix.Matrix=matrixList.matrix4
        expect(matrix.isMovingBlockInContact()).toBe(false);
    });
    test("matrix5 shouldn't touch", () => {
        matrix.Matrix=matrixList.matrix5
        expect(matrix.isMovingBlockInContact()).toBe(false);
    });
    test("matrix6 shouldn't touch", () => {
        matrix.Matrix=matrixList.matrix6
        expect(matrix.isMovingBlockInContact()).toBe(false);
    });
    test("matrix7 should touch", () => {
        matrix.Matrix=matrixList.matrix7
        expect(matrix.isMovingBlockInContact()).toBe(true);
    });
});