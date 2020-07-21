import React, {Component} from "react";
import {Swipeable} from "react-swipeable";
import "../assets/Snake.css";
import {Link} from "react-router-dom";
import Modal from "./Modal";
import {Button, Form, FormGroup, Spinner, Table} from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Skeleton from "@material-ui/lab/Skeleton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const width = 32;
const height = 16;
const sq = 3.125;
const blank = [];
const board = [];
const spRate = 7;
// http://127.0.0.1:8000/scores/
// https://www.aahilm.com/scores/
const server = "https://www.aahilm.com/scores/"

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
  gameOverModal: false,
  scoreModal: false,
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

function getRandomCoordinates(gameState) {
  if (gameState) {
    /* For variation to avoid glitch */
    let x = Math.floor(Math.random() * (width - 2)) + 1;
    let y = Math.floor(Math.random() * (height - 2)) + 1;
    let valid = false;
    while (!valid) {
      x = Math.floor(Math.random() * (width - 2)) + 1;
      y = Math.floor(Math.random() * (height - 2)) + 1;
      const head = [x, y];
      valid = !gameState.snake.some(
        (point) => point[0] === head[0] && point[1] === head[1]
      );
      if (gameState.specialFruit !== undefined) {
        const sp = gameState.specialFruit;
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
    this.toggleHighScores = this.toggleHighScores.bind(this);
    this.toggleGameOver = this.toggleGameOver.bind(this);
    this.submitScore = this.submitScore.bind(this);
    this.success = this.success.bind(this);
    this.loadLeaderboard = this.loadLeaderboard.bind(this);
    this.dismissSnackbar = this.dismissSnackbar.bind(this);
    this.state = {
      dname: "",
      error: false,
      helperText: " ",
      thresholdScore: 500,
      loading: false,
      leaderboardLoading: true,
      success: false,
      leaderboard: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      gameState: initialState
    };
  }

  loadLeaderboard() {
    console.log("loading leaderboard");

    axios.get(server).then((response) => {
      this.setState({
        leaderboardLoading: false,
        leaderboard: response.data,
      });
      this.setState({
        leaderboard: this.state.leaderboard.sort((a, b) => b.score - a.score)
      })
    });
  }


  toggleHighScores() {
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        scoreModal: !this.state.gameState.scoreModal
      }
    }));
  }

  toggleGameOver() {
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        gameOverModal: !this.state.gameState.gameOverModal
      }
    }));
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    let ascii = /^[ -~]+$/;
    if (e.target.value.toLowerCase().includes("fuck")) {
      this.setState({
        error: true,
        helperText: "Please avoid profanity"
      })
    } else if (e.target.value !== "" && !ascii.test(e.target.value)) {
      this.setState({
        error: true,
        helperText: "Please use only ASCII characters"
      })
    } else {
      this.setState({
        error: false,
        helperText: " "
      })
    }
  };

  submitScore() {
    this.setState({
      loading: true,
      leaderboardLoading: true
    });

    axios.post(server, {
      username: this.state.dname,
      score: this.state.gameState.score
    }).then((response) => {
      console.log(response);
      this.success();
    }).catch((error) => {
      console.log(error);
      this.setState({
        loading: false,
        leaderboardLoading: false
      });
      alert("Unable to connect to server");
    });
  }

  success() {
    this.loadLeaderboard();
    this.setState({
      success: true,
      loading: false,
    })
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        gameOverModal: false,
      }
    }));
  };

  dismissSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      success: false,
    })
  };

  render() {
    return (
      <Swipeable onSwipedLeft={this.moveLeft.bind(this)} onSwipedRight={this.moveRight.bind(this)}
                 onSwipedUp={this.moveUp.bind(this)} onSwipedDown={this.moveDown.bind(this)} trackMouse={false}>
        <div onDoubleClick={this.spaceDown.bind(this)} className="game-board-wrapper">
          <div className="game-board-wrapper-inner">
            <div style={{ marginTop: "-1.6em" }}>
              {this.state.gameState.gameState === 1
                ? `Score: ${this.state.gameState.score}`
                : "Press Space or Double Tap to Play"}
            </div>
            <div className="game-board">
              <div>
                {draw(blank, "blank tile")}
                {draw(board, "board tile")}
                {draw([this.state.gameState.fruit], "food tile")}
                {draw(this.state.gameState.snake, "snake tile")}
                {this.state.gameState.specialFruit !== undefined
                  ? draw([this.state.gameState.specialFruit], "spfood tile")
                  : null}
              </div>
            </div>
            <div style={{ paddingTop: "1px" }}>
              {this.state.gameState.specialFruit !== undefined
                ? `Lifetime: ${this.state.gameState.lifetime}`
                : null}
              {this.state.gameState.gameState !== 1
                ? <Link onClick={this.toggleHighScores} to="snake" style={{ zIndex: "20" }}>View Leaderboard</Link>
                : null}
            </div>
          </div>
          <div className="pad"/>
        </div>
        {this.state.gameState.scoreModal ?
          <Modal title="Leaderboard" toggle={this.toggleHighScores}>
            <Table style={{ textAlign: "left", margin: "auto" }}>
              <thead>
              <tr>
                <th width={10}/>
                <th width={10}/>
                <th>Name</th>
                <th>Score</th>
              </tr>
              </thead>
              <tbody>
              {this.state.leaderboard.map((entry, index) => {
                return (
                  <tr key={index}>
                    <th>
                      {index === 0 ?
                        <FontAwesomeIcon style={{ color: "#d4af37" }} icon={faCrown}/>
                        : (index === 1 ? <FontAwesomeIcon style={{ color: "#aaa9ad" }} icon={faCrown}/>
                          : (index === 2 ? <FontAwesomeIcon style={{ color: "#b08d57" }} icon={faCrown}/>
                            : null))}
                    </th>
                    <th>{index + 1}</th>
                    <td>{this.state.leaderboardLoading ? <Skeleton/> : entry.username}</td>
                    <td>{this.state.leaderboardLoading ? <Skeleton/> : entry.score}</td>
                  </tr>
                );
              })}
              </tbody>
            </Table>
          </Modal> :
          null}
        {this.state.gameState.gameOverModal ?
          <Modal title="Game Over" toggle={this.toggleGameOver}>
            <br/>
            <p className="text-muted" style={{ textAlign: "center" }}>You scored {this.state.gameState.score} points</p>
            <br/>
            <Form>
              <FormGroup>
                <TextField disabled={this.state.gameState.score < this.state.thresholdScore || this.state.loading}
                           value={this.state.dname} helperText={this.state.helperText} id="dname" color="primary"
                           size="small" label="Name" variant="outlined" onChange={this.onChange}
                           error={this.state.error} autoComplete="off"/>
              </FormGroup>
              <Button color="primary"
                      disabled={this.state.gameState.score < this.state.thresholdScore || this.state.loading
                      || this.state.error || this.state.dname.trim() === ""}
                      onClick={this.submitScore} size="sm">
                Submit to Leaderboard
                {this.state.loading ? <Spinner className="ml-1" size="sm"/> : null}
              </Button>
            </Form>
            <br/>
          </Modal>
          : null}
        <Snackbar open={this.state.success} autoHideDuration={2000} onClose={this.dismissSnackbar}>
          <Alert elevation={6} variant="filled" severity="success" onClose={this.dismissSnackbar}>
            Score successfully submitted
          </Alert>
        </Snackbar>
      </Swipeable>
    );
  }

  componentDidMount() {
    this.loadLeaderboard();
    setInterval(this.moveSnake, this.state.gameState.refreshRate);
    document.onkeydown = this.onKeyDown;
  }

  /* Check collisions */
  componentDidUpdate(prevProps, prevState, SS) {
    if (this.state.gameState.gameState !== 1) {
      return;
    }
    /* Collision with border */
    let head = this.state.gameState.snake[this.state.gameState.snake.length - 1];
    let x = head[0];
    let y = head[1];
    if (x < 1 || y < 1 || x >= width - 1 || y >= height - 1) {
      this.onGameOver();
    }

    /* Collision with self */
    let snake = [...this.state.gameState.snake];
    head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((point) => {
      if (head[0] === point[0] && head[1] === point[1]) {
        this.onGameOver();
      }
    });

    /* Collision with fruit */
    head = this.state.gameState.snake[this.state.gameState.snake.length - 1];
    let fruit = this.state.gameState.fruit;
    if (head[0] === fruit[0] && head[1] === fruit[1]) {
      this.setState(prevState => ({
        gameState: {
          ...prevState.gameState,
          fruit: getRandomCoordinates(this.state.gameState)
        }
      }));
      this.onEatFruit(50);
    }

    /* Collision with special fruit */
    if (this.state.gameState.specialFruit !== undefined) {
      head = this.state.gameState.snake[this.state.gameState.snake.length - 1];
      let sp = this.state.gameState.specialFruit;
      if (head[0] === sp[0] && head[1] === sp[1]) {
        this.setState(prevState => ({
          gameState: {
            ...prevState.gameState,
            specialFruit: undefined,
          }
        }));
        this.onEatFruit(400);
      } else {
        if (this.state.gameState.lifetime <= 0) {
          this.setState(prevState => ({
            gameState: {
              ...prevState.gameState,
              specialFruit: undefined,
            }
          }));
        }
      }
    }
  }

  onEatFruit(score) {
    /* Enlarge */
    let newSnake = [...this.state.gameState.snake];
    newSnake.unshift([]);
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        snake: newSnake
      }
    }));

    /* Increment Score */
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        score: this.state.gameState.score + score,
        fruits: this.state.gameState.fruits + 1,
      }
    }));

    /* Speed up */
    // if (this.state.refreshRate > 30) {
    //   this.setState({
    //     refreshRate: this.state.refreshRate + 100,
    //   });
    // }

    /* Spawn Special Fruit */
    if (this.state.gameState.fruits !== 0 && this.state.gameState.fruits % spRate === 0) {
      this.setState(prevState => ({
        gameState: {
          ...prevState.gameState,
          specialFruit: getRandomCoordinates(this.state.gameState),
          lifetime: 50,
        }
      }));
    }
  }

  onGameOver() {
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        gameState: 2,
      }
    }));
    this.toggleGameOver();
    // setTimeout(this.toggleGameOver, 300);
    // alert(`Game Over. Snake length is ${this.state.snake.length}`);
  }

  onNewGame() {
    this.setState({
      gameState: initialState
    });
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        gameState: 1,
      }
    }));
  }

  moveSnake = () => {
    if (this.state.gameState.gameState !== 1) {
      return;
    }
    let snake = [...this.state.gameState.snake];
    let head = snake[snake.length - 1];

    switch (this.state.gameState.direction) {
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
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        lifetime: this.state.gameState.lifetime - 1,
        snake: snake,
      }
    }));
  };

  onKeyDown = (e) => {
    e = e || window["event"];
    switch (e.keyCode) {
      case 27:
        this.setState(prevState => ({
          gameState: {
            ...prevState.gameState,
            gameOverModal: false,
          }
        }));
        this.setState(prevState => ({
          gameState: {
            ...prevState.gameState,
            scoreModal: false,
          }
        }));
        break;
      case 38:
        this.moveUp();
        break;
      case 40:
        this.moveDown();
        break;
      case 37:
        this.moveLeft();
        break;
      case 39:
        this.moveRight();
        break;
      case 32:
        this.spaceDown();
        break;
      default:
        break;
    }
  };

  spaceDown() {
    if (this.state.gameState.gameState !== 1 && !this.state.gameState.gameOverModal) {
      this.onNewGame();
    }
  }

  moveLeft() {
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        direction: "l"
      }
    }));
  }

  moveRight() {
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        direction: "r"
      }
    }));
  }

  moveUp() {
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        direction: "u"
      }
    }));
  }

  moveDown() {
    this.setState(prevState => ({
      gameState: {
        ...prevState.gameState,
        direction: "d"
      }
    }));
  }
}

export default Snake;
