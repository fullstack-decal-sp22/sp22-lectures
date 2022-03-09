import React from "react";
import './styles/Game.css';
import Board from "./Board";

function Game() {

    return (
      <div className="game">
        <div className="game-baord">
          <Board />
        </div>
      </div>
    )
  }

export default Game;