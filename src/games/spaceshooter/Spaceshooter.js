import React, {Component} from 'react';
import UIfx from 'uifx';

const sp = 40;
const vel = 4;

const bulletSound = new UIfx("https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-three/leisure_video_game_retro_laser_gun_fire_001.mp3?_=2", {
  volume: 0.01
});

const explosionSound = new UIfx("https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-little-robot-sound-factory/little_robot_sound_factory_Explosion_02.mp3?_=3", {
  volume: 0.1
});

class Spaceshooter extends Component {
  constructor(props) {
    super(props);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.update = this.update.bind(this);
    this.paint = this.paint.bind(this);
    this.state = {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      movingLeft: false,
      movingRight: false,
      movingUp: false,
      movingDown: false,
      firing: false,
      game: false,
      bullets: [],
      bulletVel: 8,
      stars: [],
      powerups: [],
      powerupVel: 4,
      frameCount: 0,
      bulletRefresh: 10,
      starRefresh: 200,
    }
  }

  componentDidMount() {
    this.canvasRef = React.createRef();

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    document.onkeydown = this.onKeyDown;
    document.onkeyup = this.onKeyUp;
  }

  componentWillUnmount() {
    document.onkeydown = null;
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let height = window.innerHeight * 0.88;
    if (window.innerHeight < 400) {
      height = window.innerHeight * 0.76
    } else if (window.innerHeight < 700) {
      height = window.innerHeight * 0.8
    } else if (window.innerHeight < 900) {
      height = window.innerHeight * 0.84
    }

    let width = height * 0.8;
    if (window.innerWidth < 600) {
      width = window.innerWidth * 0.99;
    }

    this.setState({
      width: width,
      height: height,
      x: (width - sp) / 2,
      y: height - sp * 2
    });
  }

  render() {
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: '20px' }}/>
        <canvas className="border" ref={this.canvasRef} width={this.state.width} height={this.state.height}/>
        <br/>
      </div>
    );
  }

  onNewGame() {
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 2 + 0.5;
      this.state.stars.push([Math.random() * (this.state.width - 20) + 10, Math.random() * (this.state.height - 20) + 10, size, size, 0.3]);
    }
    if (!this.state.game) {
      this.setState({
        game: true,
        interval: setInterval(this.update, 10)
      });
    }
  }

  update() {
    /* Input Handler */
    if (this.state.movingLeft && this.state.x - vel >= 0) { /* left */
      this.setState({
        x: this.state.x - vel
      })
    }
    if (this.state.movingRight && this.state.x + vel + sp < this.state.width) { /* right */
      this.setState({
        x: this.state.x + vel
      })
    }
    if (this.state.movingUp && this.state.y - vel >= 0) { /* up */
      this.setState({
        y: this.state.y - vel
      })
    }
    if (this.state.movingDown && this.state.y + vel + sp < this.state.height) { /* down */
      this.setState({
        y: this.state.y + vel
      })
    }

    /* Controller */
    this.state.bullets.forEach(bullet => {
      bullet[1] -= this.state.bulletVel;
    });
    this.setState({
      bullets: this.state.bullets.filter(bullet => bullet[1] > -10)
    })
    if (this.state.frameCount % this.state.bulletRefresh === 0) {
      if (this.state.firing) {
        // Single
        this.state.bullets.push([this.state.x + sp / 2 - 1, this.state.y - 5, 2, 12]);

        // Double
        // this.state.bullets.push([this.state.x + sp * 0.4, this.state.y - 5, 2, 12]);
        // this.state.bullets.push([this.state.x + sp * 0.6 - 2, this.state.y - 5, 2, 12]);

        // Triple
        // this.state.bullets.push([this.state.x + sp * 0.35, this.state.y - 5, 2, 12]);
        // this.state.bullets.push([this.state.x + sp / 2 - 1, this.state.y - 5, 2, 12]);
        // this.state.bullets.push([this.state.x + sp * 0.65 - 2, this.state.y - 5, 2, 12]);

        bulletSound.play();
      }
    }
    this.state.stars.forEach(star => {
      star[1] = (star[1] + star[4]) % this.state.height;
    });

    this.paint();
    this.setState({
      frameCount: this.state.frameCount + 1
    });
  }

  paint() {
    const canvas = this.canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#555555";
    this.state.stars.forEach(star => {
      ctx.beginPath();
      // ctx.moveTo((star[0] + star[2]) / 2, star[1]);
      // ctx.lineTo((star[0] + star[2]) / 2, star[1] + star[3]);
      // ctx.moveTo(star[0], (star[1] + star[3]) / 2);
      // ctx.lineTo(star[0] + star[2], (star[1] + star[3]) / 2);
      // if (this.state.frameCount % 2 === 0) {
      ctx.moveTo(star[0], star[1]);
      ctx.lineTo(star[0] + star[2], star[1] + star[3]);
      ctx.moveTo(star[0] + star[2], star[1]);
      ctx.lineTo(star[0], star[1] + star[3]);
      // } else {
      //   ctx.moveTo((star[0] + star[2]) / 2, star[1]);
      //   ctx.lineTo((star[0] + star[2]) / 2, star[1] + star[3]);
      //   ctx.moveTo(star[0], (star[1] + star[3]) / 2);
      //   ctx.lineTo(star[0] + star[2], (star[1] + star[3]) / 2);
      // }
      ctx.stroke();
      // ctx.fillRect(star[0], star[1], star[2], star[3]);
    });

    ctx.fillStyle = "#dc3545";
    this.state.bullets.forEach(bullet => {
      ctx.fillRect(bullet[0], bullet[1], bullet[2], bullet[3]);
    });

    this.drawSpaceShip(ctx);
  }

  drawSpaceShip(ctx) {
    ctx.fillStyle = "#007BFF";
    ctx.strokeStyle = "#007BFF";

    const x = this.state.x;
    const y = this.state.y;

    ctx.beginPath();
    ctx.moveTo(x, y + sp);
    ctx.lineTo(x + sp / 2, y + sp * 0.3);
    ctx.lineTo(x + sp, y + sp);
    ctx.stroke();
    ctx.fill();

    const spikes = [[[0.5, 1], [0, 1.1]], [[0.5, 3], [0.2, 0.4]], [[0.35, 1], [0.2, 0.4]], [[0.65, 1], [0.2, 0.4]]];
    spikes.forEach(spike => {
      ctx.fillRect(x + sp * spike[0][0] - spike[0][1] / 2, y + sp * spike[1][0], spike[0][1], sp * (spike[1][1] - spike[1][0]));
      ctx.strokeRect(x + sp * spike[0][0] - spike[0][1] / 2, y + sp * spike[1][0], spike[0][1], sp * (spike[1][1] - spike[1][0]));
    })

    const xlevels = [0.25, 0.125, 0];
    const ylevels = [0.4, 0.5, 0.6];
    const widths = [0.5, 0.75, 1];
    const heights = [0.3, 0.3, 0.4];

    for (let i = 0; i < 3; i++) {
      ctx.fillRect(x + sp * xlevels[i], y + sp * ylevels[i], sp * widths[i], sp * heights[i]);
      ctx.strokeRect(x + sp * xlevels[i], y + sp * ylevels[i], sp * widths[i], sp * heights[i]);
    }

    ctx.fillRect(x, y + sp, 2, 2);
    ctx.strokeRect(x, y + sp, 2, 2);
    ctx.fillRect(x + sp - 2, y + sp, 2, 2);
    ctx.strokeRect(x + sp - 2, y + sp, 2, 2);
  }

  onKeyDown = (e) => {
    e = e || window["event"];
    if (e.keyCode === 32) {
      if (this.state.game) {
        this.setState({
          firing: true
        });
      } else {
        this.onNewGame();
      }
    }
    if (e.keyCode === 37) { /* left */
      this.setState({
        movingLeft: true
      })
    }
    if (e.keyCode === 39) { /* right */
      this.setState({
        movingRight: true
      })
    }
    if (e.keyCode === 38) { /* up */
      this.setState({
        movingUp: true
      })
    }
    if (e.keyCode === 40) { /* down */
      this.setState({
        movingDown: true
      })
    }
  };

  onKeyUp = (e) => {
    e = e || window["event"];
    if (e.keyCode === 32) {
      this.setState({
        firing: false
      });
    }
    if (e.keyCode === 37) { /* left */
      this.setState({
        movingLeft: false
      })
    }
    if (e.keyCode === 39) { /* right */
      this.setState({
        movingRight: false
      })
    }
    if (e.keyCode === 38) { /* up */
      this.setState({
        movingUp: false
      })
    }
    if (e.keyCode === 40) { /* down */
      this.setState({
        movingDown: false
      })
    }
  };
}

export default Spaceshooter;