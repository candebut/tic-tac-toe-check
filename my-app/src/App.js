import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [winner, setWinner] = useState(false)
  const [message, setMessage] = useState('')
  const tictactoe = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  const isSolved = (board) => {
    if ((board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) || //primera horizontal
      (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) || //segunda horizontal
      (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1) || //tercera horizontal

      (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) || //primera vertical
      (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) || //segunda vertical
      (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) || //tercera vertical

      (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) || //primera diagonal
      (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1))   //segunda diagonal
    {
      setWinner(true);
      setMessage("¡Ganó X!")
      return 1;
    }

    if ((board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2) || //primera horizontal
      (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2) || //segunda horizontal
      (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2) || //tercera horizontal

      (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) || //primera vertical
      (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) || //segunda vertical
      (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2) || //tercera vertical

      (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) || //primera diagonal
      (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2)) { //segunda diagonal
      setWinner(true);
      setMessage("¡Ganó 0!")
      return 2;
    }

    if ((board[0].includes(0)) || (board[1].includes(0)) || (board[2].includes(0))) {
      setMessage("¡El juego aún no terminó!")
      return -1;
    }
    if (winner === false && !board.includes(0)) {
      setMessage('¡Es un empate!');
      return 0;
    }
  }
  return (
    <>
      <div>{winner ? "¡Felicitaciones!" : "¡A jugar!"}</div>
      <button onClick={() => isSolved(tictactoe)}>Hacé click para ver el estado del juego</button>
      <div>{message}</div>
    </>
  )
}

export default App;
