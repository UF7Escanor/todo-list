import React, { useState } from "react";
import Board from "./component/board.jsx";
import "./App.css";

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const win = checkWinner(newBoard);
    if (win) setWinner(win);
  };

  const checkWinner = (board) => {
    for (let combo of WINNING_COMBOS) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // X or O
      }
    }

    if (board.every((cell) => cell !== null)) {
      return "draw";
    }

    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Board board={board} onClick={handleClick} />
      <p>
        {winner
          ? winner === "draw"
            ? "It's a draw!"
            : `${winner} wins!`
          : `Turn: ${isXTurn ? "X" : "O"}`}
      </p>
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}

export default App;
