import Board, { Symbol } from "@/Board";

describe("Game", () => {
  it("given  un tablero de 3x3 when el usuario va a poner una x en una casilla invalida then arrojar una exception", () => {
    const board = new Board();
    const position: number[] = [10, 2];
    const symbol = Symbol.X;

    expect(() => board.takePosition(position, symbol)).toThrow();
  });

  it("given  un tablero de 3x3 when el usuario va a poner una x en una casilla ya escrita then arrojar una exception", () => {
    const board = new Board();
    const symbol: Symbol = Symbol.X;

    const position: number[] = [0, 0];
    board.takePosition(position, symbol);

    expect(() => board.takePosition(position, symbol)).toThrow();
  });

  it("given  un tablero de 3x3 when el usuario va a poner una x en una casilla valida then ", () => {
    const board = new Board();
    const position: number[] = [1, 2];
    const symbol: Symbol = Symbol.X;

    board.takePosition(position, symbol);
  });

  it("given  un tablero de 3x3 when el usuario va a poner in simbolo diferente de X o Y then arrojar una exception", () => {
    const board = new Board();
    const symbol = "Z" as Symbol;
    const position: number[] = [0, 0];

    expect(() => board.takePosition(position, symbol)).toThrow();
  });
});
