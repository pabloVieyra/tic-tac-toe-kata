type BoardPositionType = string[][];

export enum Symbol {
  X = "X",
  O = "O",
}

export default class Board {
  private positions: BoardPositionType = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  takePosition(position: number[], symbol: Symbol) {
    const [x, y] = position;

    if (!Object.values(Symbol).includes(symbol))
      throw new Error("Invalid symbol");

    if (this.positions.length - 1 < x) throw new Error("Out of range");
    if (this.positions[x].length - 1 < y) throw new Error("Out of range");

    if (this.positions[x][y]) throw new Error("Position already taken");

    this.positions[x][y] = symbol;
  }

  isGameOver(): boolean {
    // Check rows
    for (const row of this.positions) {
      if (!row[0] || !row[1] || !row[2]) continue;
      if (row[0] === row[1] && row[1] === row[2]) return true;
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (this.positions.every((cell) => cell[col] === Symbol.O)) {
        return true;
      }

      if (this.positions.every((cell) => cell[col] === Symbol.X)) {
        return true;
      }
    }

    // Chec Diagonal
    if (
      this.positions[0][0] === Symbol.O &&
      this.positions[1][1] === Symbol.O &&
      this.positions[2][2] === Symbol.O
    ) {
      return true;
    }

    if (
      this.positions[0][0] === Symbol.X &&
      this.positions[1][1] === Symbol.X &&
      this.positions[2][2] === Symbol.X
    ) {
      return true;
    }

    if (
      this.positions[0][2] === Symbol.O &&
      this.positions[1][1] === Symbol.O &&
      this.positions[2][0] === Symbol.O
    ) {
      return true;
    }

    if (
      this.positions[0][2] === Symbol.X &&
      this.positions[1][1] === Symbol.X &&
      this.positions[2][0] === Symbol.X
    ) {
      return true;
    }

    // Check all are fill

    return false;
  }
}
