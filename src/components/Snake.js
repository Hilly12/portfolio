import React, { Component } from "react";
import "../assets/snake.css";

const width = 32;
const height = 16;
const sq = 3.125;
const blank = [];
const board = [];
const spRate = 7;

const initialState = {
  snake: [
    [10, 8],
    [9, 8],
  ],
  fruit: getRandomCoordinates(undefined),
  specialFruit: undefined,
  lifetime: 0,
  fruits: 0,
  score: 0,
  refreshRate: 100,
  direction: "r",
  gameState: 0,
};

for (let x = 0; x < width; x++) {
  for (let y = 0; y < height; y++) {
    if (x === 0 || y === 0 || x === width - 1 || y === height - 1) {
      board.push([x, y]);
    } else {
      blank.push([x, y]);
    }
  }
}

function getRandomCoordinates(state) {
  if (state) {
    /* For variation to avoid glitch */
    var x = Math.floor(Math.random() * (width - 2)) + 1;
    var y = Math.floor(Math.random() * (height - 2)) + 1;
    var valid = false;
    while (!valid) {
      x = Math.floor(Math.random() * (width - 2)) + 1;
      y = Math.floor(Math.random() * (height - 2)) + 1;
      const head = [x, y];
      valid = !state.snake.some(
        (point) => point[0] === head[0] && point[1] === head[1]
      );
      if (state.specialFruit !== undefined) {
        const sp = state.specialFruit;
        valid = valid && !(sp[0] === head[0] && sp[1] === head[0]);
      }
    }
    console.log(x + " " + y);
    return [x, y];
  } else {
    const x = Math.floor(Math.random() * (width - 2)) + 1;
    const y = Math.floor(Math.random() * (height - 2)) + 1;
    console.log(x + " " + y);
    return [x, y];
  }
}

function draw(array, str) {
  return array.map((points, i) => {
    return (
      <div
        className={str}
        key={i}
        style={{
          left: `${points[0] * sq}%`,
          top: `${points[1] * sq * 2}%`,
        }}
      />
    );
  });
}

class Snake extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  render() {
    return (
      <div className="game-board-wrapper">
        <div className="game-board-wrapper-inner">
          <div>
            {this.state.gameState === 2
              ? "Game Over! Press Space to play again"
              : this.state.gameState === 1
              ? `Score: ${this.state.score}`
              : "Press Space to Play"}
          </div>
          <div className="game-board">
            {draw(blank, "blank")}
            {draw(board, "board")}
            {draw([this.state.fruit], "food")}
            {draw(this.state.snake, "snake")}
            {this.state.specialFruit !== undefined
              ? draw([this.state.specialFruit], "spfood")
              : null}
          </div>
          <div>
            {this.state.specialFruit !== undefined
              ? `Lifetime: ${this.state.lifetime}`
              : null}
          </div>
        </div>
        <div className="pad" />
      </div>
    );
  }

  componentDidMount() {
    setInterval(this.moveSnake, this.state.refreshRate);
    document.onkeydown = this.onKeyDown;
  }

  /* Check collisions */
  componentDidUpdate() {
    if (this.state.gameState !== 1) {
      return;
    }
    /* Collision with border */
    let head = this.state.snake[this.state.snake.length - 1];
    let x = head[0];
    let y = head[1];
    if (x < 1 || y < 1 || x >= width - 1 || y >= height - 1) {
      this.onGameOver();
    }

    /* Collision with self */
    let snake = [...this.state.snake];
    head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((point) => {
      if (head[0] === point[0] && head[1] === point[1]) {
        this.onGameOver();
      }
    });

    /* Collision with fruit */
    head = this.state.snake[this.state.snake.length - 1];
    let fruit = this.state.fruit;
    if (head[0] === fruit[0] && head[1] === fruit[1]) {
      this.setState({
        fruit: getRandomCoordinates(this.state),
      });
      this.onEatFruit(50);
    }

    /* Collision with special fruit */
    if (this.state.specialFruit !== undefined) {
      head = this.state.snake[this.state.snake.length - 1];
      let sp = this.state.specialFruit;
      if (head[0] === sp[0] && head[1] === sp[1]) {
        this.setState({
          specialFruit: undefined,
        });
        this.onEatFruit(400);
      } else {
        if (this.state.lifetime <= 0) {
          this.setState({
            specialFruit: undefined,
          });
        }
      }
    }
  }

  onEatFruit(score) {
    /* Enlarge */
    let newSnake = [...this.state.snake];
    newSnake.unshift([]);
    this.setState({
      snake: newSnake,
    });

    /* Increment Score */
    this.setState({
      score: this.state.score + score,
      fruits: this.state.fruits + 1,
    });

    /* Speed up */
    // if (this.state.refreshRate > 30) {
    //   this.setState({
    //     refreshRate: this.state.refreshRate + 100,
    //   });
    // }

    /* Spawn Special Fruit */
    if (this.state.fruits !== 0 && this.state.fruits % spRate === 0) {
      this.setState({
        specialFruit: getRandomCoordinates(this.state),
        lifetime: 50,
      });
    }
  }

  onGameOver() {
    this.setState({
      gameState: 2,
    });
    // alert(`Game Over. Snake length is ${this.state.snake.length}`);
  }

  onNewGame() {
    this.setState(initialState);
    this.setState({
      gameState: 1,
    });
  }

  moveSnake = () => {
    if (this.state.gameState !== 1) {
      return;
    }
    let snake = [...this.state.snake];
    let head = snake[snake.length - 1];

    switch (this.state.direction) {
      case "r":
        head = [head[0] + 1, head[1]];
        break;
      case "l":
        head = [head[0] - 1, head[1]];
        break;
      case "d":
        head = [head[0], head[1] + 1];
        break;
      case "u":
        head = [head[0], head[1] - 1];
        break;
      default:
        break;
    }
    snake.push(head);
    snake.shift();
    this.setState({
      lifetime: this.state.lifetime - 1,
      snake: snake,
    });
  };

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "u" });
        break;
      case 40:
        this.setState({ direction: "d" });
        break;
      case 37:
        this.setState({ direction: "l" });
        break;
      case 39:
        this.setState({ direction: "r" });
        break;
      case 32:
        if (this.state.gameState !== 1) {
          this.onNewGame();
        }
        break;
      default:
        break;
    }
  };
}

export default Snake;
