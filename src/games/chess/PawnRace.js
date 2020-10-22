import Move from "./Move"

const WHITE = 1;
const BLACK = -1;
const EMPTY = 0;

class PawnRace {
  constructor() {
    this.board = []
    for (let r = 0; r < 8; r++) {
      const arr = []
      for (let c = 0; c < 8; c++) {
        arr.push(EMPTY);
      }
      this.board.push(arr);
    }
    this.enpassant_col = -1
    this.turn = 1
    this.moves = []

    // Turing Test

    this.board[1][1] = WHITE
    this.board[2][2] = WHITE
    this.board[2][3] = WHITE
    this.board[4][1] = BLACK
    this.board[4][2] = BLACK
    this.board[4][3] = BLACK

    // Normal Board

    // for (let i = 0; i < 8; i++) {
    //   this.board[1][i] = WHITE;
    // }
    //
    // this.board[1][Math.floor(Math.random() * 8)] = 0
    //
    // for (let i = 0; i < 8; i++) {
    //   this.board[6][i] = BLACK;
    // }
    //
    // this.board[6][Math.floor(Math.random() * 8)] = 0
  }

  getCurrentColor() {
    return this.turn % 2 === 1 ? WHITE : BLACK;
  }

  generateValidMoves() {
    const color = this.getCurrentColor();
    const moves = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (this.board[row][col] === color && color === WHITE) {
          if (row === 1 && this.board[row + 1][col] === EMPTY && this.board[row + 2][col] === EMPTY) {
            moves.push(new Move([row, col], [row + 2, col], false, false));
          }
          if (row < 7 && this.board[row + 1][col] === EMPTY) {
            moves.push(new Move([row, col], [row + 1, col], false, false));
          }
          if (row < 7 && col < 7 && this.board[row + 1][col + 1] === BLACK) {
            moves.push(new Move([row, col], [row + 1, col + 1], true, false));
          }
          if (row < 7 && col > 0 && this.board[row + 1][col - 1] === BLACK) {
            moves.push(new Move([row, col], [row + 1, col - 1], true, false));
          }
          if (row === 4 && col < 7 && this.board[row][col + 1] === BLACK && this.enpassant_col === col + 1) {
            moves.push(new Move([row, col], [row + 1, col + 1], true, true));
          }
          if (row === 4 && col > 0 && this.board[row][col - 1] === BLACK && this.enpassant_col === col - 1) {
            moves.push(new Move([row, col], [row + 1, col - 1], true, true));
          }
        } else if (this.board[row][col] === color && color === BLACK) {
          if (row === 6 && this.board[row - 1][col] === EMPTY && this.board[row - 2][col] === EMPTY) {
            moves.push(new Move([row, col], [row - 2, col], false, false));
          }
          if (row > 0 && this.board[row - 1][col] === EMPTY) {
            moves.push(new Move([row, col], [row - 1, col], false, false));
          }
          if (row > 0 && col < 7 && this.board[row - 1][col + 1] === WHITE) {
            moves.push(new Move([row, col], [row - 1, col + 1], true, false));
          }
          if (row > 0 && col > 0 && this.board[row - 1][col - 1] === WHITE) {
            moves.push(new Move([row, col], [row - 1, col - 1], true, false));
          }
          if (row === 3 && col < 7 && this.board[row][col + 1] === WHITE && this.enpassant_col === col + 1) {
            moves.push(new Move([row, col], [row - 1, col + 1], true, true));
          }
          if (row === 3 && col > 0 && this.board[row][col - 1] === WHITE && this.enpassant_col === col - 1) {
            moves.push(new Move([row, col], [row - 1, col - 1], true, true));
          }
        }
      }
    }

    return moves;
  }

  applyMove(move) {
    this.moves.push(move);

    const occupant = this.board[move.fr[0]][move.fr[1]];
    this.board[move.to[0]][move.to[1]] = occupant;
    this.board[move.fr[0]][move.fr[1]] = EMPTY

    this.enpassant_col = move.isDoublePush() ? move.to[1] : -1

    if (move.enp) {
      this.board[move.fr[0]][move.to[1]] = EMPTY
    }

    this.turn += 1
  }

  unapplyMove(move) {
    const lastMove = this.moves.pop();

    const occupant = this.board[move.to[0]][move.to[1]];
    this.board[move.to[0]][move.to[1]] = EMPTY;
    this.board[move.fr[0]][move.fr[1]] = occupant;

    this.enpassant_col = lastMove.isDoublePush() ? lastMove.to[1] : -1

    const other = -occupant;
    if (move.enp) {
      this.board[move.fr[0]][move.to[1]] = other;
    } else if (move.cap) {
      this.board[move.to[0]][move.to[1]] = other;
    }

    this.turn += 1
  }

  checkTerminal(moves) {
    if (moves.length === 0) {
      return [true, EMPTY];
    }
    for (let i = 0; i < 8; i++) {
      if (this.board[0][i] === BLACK) {
        return [true, BLACK];
      }
    }
    for (let i = 0; i < 8; i++) {
      if (this.board[7][i] === WHITE) {
        return [true, WHITE];
      }
    }
    return [false, EMPTY];
  }
}

export default PawnRace