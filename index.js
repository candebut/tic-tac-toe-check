//      0   1   2
// a [“o”,” “,”o”]
// b [“ “,”x”,” “]     --> Guía
// c [“x”,” “,” “]

let board = Array(3).fill(Array(3).fill(0))

const add = (a, b) => a + b;
let sum = array => array.reduce(add);

const checkWinner = (board) => {
  let winner = whoIsTheWinner(board);
  if (winner !== 0) return winner;
  const stranspose = board.map((col, i) => board.map(row => row[i]));
  return whoIsTheWinner(stranspose);
}

const whoIsTheWinner = (board) => { //maybe this parameter is unnecessary called board
  for (let i = 0; i < board.length; i++) {
    if (board[i].length === sum(board[i])) { return 1 }
    if (board[i].length === - sum(board[i])) { return -1 }
  }
  const diagonal = board.map((row, i) => board[i][i]);

  if (board[0].length === sum(diagonal)) { return 1 }
  if (board[0].length === -sum(diagonal)) { return -1 }

  const len = board.length;
  const crossdiagonal = board.map((row, i) => board[i][len - i - 1]);

  if (board[0].length === sum(crossdiagonal)) { return 1 }
  if (board[0].length === -sum(crossdiagonal)) { return -1 }
  return 0;
}
