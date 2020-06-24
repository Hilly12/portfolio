import React, { Component } from "react";
import "../assets/snake.css";

class Snake extends Component {
  render() {
    return (
      <div className="game-board-wrapper">
        <div className="game-board-wrapper-inner">
          <div className="game-board"></div>
        </div>
        <div className="pad" />
      </div>
    );
  }
}

export default Snake;
