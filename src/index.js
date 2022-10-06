function initializeGame() {
  console.log("initializing the game...");

  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  var x = canvas.width/2;
  var y = canvas.height-30;
  var dx = 0;
  var dy = -4;

  function drawBall(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  var direction = null;

  canvas.addEventListener("touchstart", (e) => {
    dy = -4;

    const {
      clientX, clientY
    } = e.touches[0];
    const {
      clientHeight, clientWidth
    } = canvas;

    console.log(clientX, clientWidth)
    if (clientX < (clientWidth/ 2)) {
      direction = "left";
    } else {
      direction = "right";
    }

    if (direction == "left") dx = -4;
    else if (direction == "right") dx = 4;

    direction = null;
  },
    false);

  function draw() {
    ctx.clearRect(0,
      0,
      canvas.width,
      canvas.height);
    drawBall(x,
      y);
    x += dx;
    y += dy;

    if (dy <= 1) dy += 0.3;
  }

  setInterval(draw, 10);
}
