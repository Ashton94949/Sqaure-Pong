import Paddle from '/src/paddle';
let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGTH = 600;



let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);
let lastTime = 0;

fuction gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  
  requestAnimationFrame(gameLoop);
}
