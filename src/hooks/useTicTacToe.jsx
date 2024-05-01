import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

function useTicTacToe() {
  const [board, setBoard] = useState(initialBoard());
  const [turnX, setTurnX] = useState(true);

  const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (curBoard) => {
    for (let i = 0; i < winPattern.length; i++) {
      const [x, y, z] = winPattern[i];
      if (
        curBoard[x] &&
        curBoard[x] == curBoard[y] &&
        curBoard[x] == curBoard[z]
      ) {
        return curBoard[x];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turnX ? "X" : "0";
    setBoard(newBoard);
    setTurnX(!turnX);
  };

  const getStatus = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return `Player ${winner} wins`;
    }
    if (!board.includes(null)) {
      return `It's a draw`;
    }
    return `Player ${turnX ? "X" : "O"} turn`;
  };

  const reset = () => {
    setBoard(initialBoard());
    setTurnX(true);
  };

  return { board, handleClick, calculateWinner, getStatus, reset };
}

export default useTicTacToe;
