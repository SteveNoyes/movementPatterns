/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas0');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_WIDTH = canvas.height = 1000;
const numberOfEnemies = 100;
class Enemy {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = 100;
    this.height = 100;
  }

  update() {
    this.x++;
    this.y++;
  }

  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

const enemy0 = new Enemy();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  enemy0.update();
  enemy0.draw();
  requestAnimationFrame(animate);
}
animate();