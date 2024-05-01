import React from "react";
import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const { board, handleClick, reset, getStatus } = useTicTacToe();
  return (
    <div className="game">
      <div className="status">
        {getStatus()}
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="board">
        {board.map((item, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={item !== null}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
