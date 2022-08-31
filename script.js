/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas0');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_WIDTH = canvas.height = 1000;

enemy0 = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  enemy0.x++;
  ctx.fillRect(enemy0.x, enemy0.y, enemy0.width, enemy0.height);
  requestAnimationFrame(animate);
}
animate();