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

  it("given  un tablero de 3x3 when el usuario va a poner una x en una casilla valida then no debe dar exception", () => {
    const board = new Board();
    const position: number[] = [1, 2];
    const symbol: Symbol = Symbol.X;

    expect(() => board.takePosition(position, symbol)).not.toThrow();
  });

  it("given un tablero de 3x3 when el usuario va a poner in simbolo diferente de X o Y then arrojar una exception", () => {
    const board = new Board();
    const symbol = "Z" as Symbol;
    const position: number[] = [0, 0];

    expect(() => board.takePosition(position, symbol)).toThrow();
  });

  it("given  un tablero de 3x3 when el usuario va a poner una x en una casilla valida then el juego NO debe haber terminado", () => {
    const board = new Board();
    const position: number[] = [1, 2];
    const symbol: Symbol = Symbol.X;

    board.takePosition(position, symbol);

    const result = board.isGameOver();
    expect(result).toBeFalsy();
  });

  it("given un tablero de 3x3 when un usuario completa una fila deberia then terminar  el juego ", () => {
    const board = new Board();

    const symbol: Symbol = Symbol.X;
    board.takePosition([1, 0], symbol);
    board.takePosition([1, 1], symbol);
    board.takePosition([1, 2], symbol);

    const result = board.isGameOver();
    expect(result).toBeTruthy();
  });

  it("given un tablero de 3x3 when un usuario completa una columna deberia then terminar  el juego", () => {
    const board = new Board();

    const symbol: Symbol = Symbol.X;
    board.takePosition([0, 1], symbol);
    board.takePosition([1, 1], symbol);
    board.takePosition([2, 1], symbol);

    const result = board.isGameOver();
    expect(result).toBeTruthy();
  });

  it("given un tablero de 3x3 when un usuario completa una diagonal then terminar  el juego", () => {
    const board = new Board();

    const symbol: Symbol = Symbol.X;
    board.takePosition([0, 0], symbol);
    board.takePosition([1, 1], symbol);
    board.takePosition([2, 2], symbol);

    const result = board.isGameOver();
    expect(result).toBeTruthy();
  });

  it("given un tablero de 3x3 when todos los campos están tomados then terminar el juego", () => {
    // const board = new Board();
    // const symbol: Symbol = Symbol.X;
    // board.takePosition([0, 0], symbol);
    // board.takePosition([1, 1], symbol);
    // board.takePosition([2, 2], symbol);
    // const result = board.isGameOver();
    // expect(result).toBeTruthy();
  });

  it.skip("Given a 3x3 board when a game is over then validate the winner", () => {});
});
