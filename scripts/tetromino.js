class Tetromino {
  constructor() {
    this.x = 4
    this.y = -3
    this.positionIndex = 0
  }
  rotateTetromino() {
    this.positionIndex = (this.positionIndex + 1) % 4
  }
  getTetrominoActualPositionArray() {
    return this.positions[this.positionIndex]
  }
  goDownTetromino() {
    this.y++
  }
  distanceToTheRight(index) {
    const actualPosition =
      typeof index === 'number'
        ? this.positions[index]
        : this.positions[this.positionIndex]
    let rightSpace = 0
    for (let i = this.totalWidth - 1; i >= 0; i--) {
      if (
        actualPosition.some((line) => {
          return line[i] === 1
        })
      ) {
        rightSpace = rightSpace == 0 ? i : rightSpace
      }
    }
    return rightSpace
  }
  distanceToTheLeft(index) {
    const actualPosition =
      typeof index === 'number'
        ? this.positions[index]
        : this.positions[this.positionIndex]
    let leftSpace = 2
    for (let i = 0; i < this.totalWidth; i++) {
      if (
        actualPosition.some((line) => {
          return line[i] === 1
        })
      ) {
        leftSpace = leftSpace == 2 ? i : leftSpace
      }
    }
    return leftSpace
  }
  distanceToTheBottom(index) {
    const actualPosition =
      typeof index === 'number'
        ? this.positions[index]
        : this.positions[this.positionIndex]
    for (let i = this.totalWidth - 1; i >= 0; i--) {
      if (actualPosition[i].includes(1)) {
        return i
      }
    }
    return null
  }
}
