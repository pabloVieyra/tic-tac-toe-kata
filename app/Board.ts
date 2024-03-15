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
}
