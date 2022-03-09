import React, {useState} from "react";
import Square from "./Square";
import "./styles/Board.css";

function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsPlaying, setXIsPlaying] = useState(true);
    const winner = calculateWinner(squares);

    function handleClick(i) {
        const squaresCopy = squares.slice();
        if (winner || squaresCopy[i]) {
          return;
        }
        squaresCopy[i] = xIsPlaying ? "X" : "O";
        setXIsPlaying(!xIsPlaying);
        setSquares(squaresCopy);
    }

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsPlaying ? "X" : "O");
    }

    function renderSquare(i) {
        return (
            <Square 
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    }
    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div className="status">{status}</div>
        </div>
    )
}

export default Board;
