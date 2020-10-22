import Player from "../Player";

const WHITE = 1;
const BLACK = -1;
const INF = Number.MAX_SAFE_INTEGER - 1;
const MAX_TIME = 1000;
let startTime = 0;

export default class MinimaxPlayer extends Player {
  selectMove(moves, game) {
    // return this.minimax(game, 10, -INF, INF, this.colour)[1];
    startTime = Date.now();
    let depth = 6;
    let bestMove = moves[0];
    let bestEval = 0;
    while ((Date.now() - startTime) <= MAX_TIME) {
      const minimax = this.minimax(game, depth, -INF, INF, this.colour);
      const currEval = minimax[0];
      const move = minimax[1];
      if (currEval > bestEval) {
        bestMove = move;
        bestEval = currEval;
      }
      depth++;
    }
    return bestMove;
  }

  minimax(game, depth, alpha, beta, colour) {
    if (depth === 0 || ((Date.now() - startTime) > MAX_TIME)) {
      return [this.staticEval(game.board), null];
    }

    const validMoves = game.generateValidMoves().sort((a, b) => b.value() - a.value());
    const gm = game.checkTerminal(validMoves);
    if (gm[0]) {
      if (gm[1] === 0) {
        return [0, null];
      }
      return [-INF * colour, null]
    }

    let bestEval = -INF;
    let bestMove = null;
    for (let i = 0; i < validMoves.length; i++) {
      game.applyMove(validMoves[i]);
      const negamax = this.minimax(game, depth - 1, -beta, -alpha, -colour);
      game.unapplyMove(validMoves[i]);

      const currEval = -negamax[0];
      if (currEval > bestEval) {
        bestEval = currEval;
        bestMove = validMoves[i];
      }
      alpha = Math.max(alpha, bestEval);
      if (beta <= alpha) {
        break;
      }
    }
    if (bestMove === null) {
      bestMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    }
    return [bestEval, bestMove];
  }

  staticEval(board) {
    let wp = 0
    let bp = 0
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (board[r][c] === WHITE) {
          wp++;
        } else if (board[r][c] === BLACK) {
          bp++;
        }
      }
    }
    return wp - bp
  }
}