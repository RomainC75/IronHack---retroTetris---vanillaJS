const Matrix = require('../scripts/matrix')
const matrixList = require('./isBlockTouchingMatrixList')

const matrix = new Matrix.Matrix()


describe('isBlockTouching tests', () => {
    test("matrix1 shouldn't touch", () => {
        matrix.Matrix=matrixList.matrix1
        expect(matrix.isMovingBlockInContact()).toBe(false);
    });
    test("matrix2 should touch - direct contact", () => {
        matrix.Matrix=matrixList.matrix2
        console.log(matrix.Matrix)
        expect(matrix.isMovingBlockInContact()).toBe(true);
    });
    test("matrix3 shoud touch - moving block at the bottom of the grid", () => {
        matrix.Matrix=matrixList.matrix3
        console.log(matrix.Matrix)
        expect(matrix.isMovingBlockInContact()).toBe(true);
    });
    test("empty matrix4 shouldn't touch", () => {
        matrix.Matrix=matrixList.matrix4
        console.log(matrix.Matrix)
        expect(matrix.isMovingBlockInContact()).toBe(false);
    });
    test("empty matrix5 shouldn't touch", () => {
        matrix.Matrix=matrixList.matrix5
        console.log(matrix.Matrix)
        expect(matrix.isMovingBlockInContact()).toBe(false);
    });
});