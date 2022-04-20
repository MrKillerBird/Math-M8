var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 620;
canvas.style.top = ((window.innerHeight + 48) - canvas.height) / 2 + "px";
canvas.style.left = (window.innerWidth - canvas.width) / 2 + "px";

var ball = document.getElementById("ball");
ball.src = "./images/block-breaker/ball.png";
var ballW = 16;
var ballH = 16;

var ballX = canvas.width * 0.5 + ballW;
var ballY = canvas.height * 0.85 + ballH;
var dx = 1.5;
var dy = -1.5;

var paddleW = 80;
var paddleH = 16;

var paddleX = (canvas.width - paddleW) * 0.5;
var paddleY = (canvas.height - paddleH) * 0.95;

const el = document.querySelector('canvas');

var gameOver = false;
var seconde = 0;
var levens = 3;

var brickRowCount = 5;
var brickColumnCount = 12;
var brickPadding = 5;
var brickWidth = canvas.width / brickColumnCount - brickPadding;
var brickHeight = 20;
var brickOffsetTop = 50;
var brickOffsetLeft = /*canvas.width - brickWidth * 14*/ brickPadding / 2;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}





var bC1 = Math.round(Math.random() * 99);
var bC2 = Math.round(Math.random() * 2);

function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.fillStyle = "#" + bC1 + (r * bC2);
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}


function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if ((ballY + ballH > b.y && ballY < b.y + brickHeight) && (ballX + ballW > b.x && ballX < b.x + brickWidth)) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }

    ballX += dx;
    ballY += dy;

    if (ballY + ballH > paddleY + paddleH + 25) {
        levens -= 1;
        lifeLost();
    }

    if (ballY + ballH > paddleY && ballX + ballW > paddleX && ballX < paddleX + paddleW) {
        if (paddleX + paddleW / 2 - ballX > 0 && dx < 0) {
            dx = -dx;
        }
        if (paddleX + paddleW / 2 - ballX < 0 && dx > 0) {
            dx = -dx;
        }
        dy = -dy;
    }


    if (ballY + ballH > paddleY && ballY < paddleY + paddleH && ballX + ballW > paddleX && ballX < paddleX + paddleW) {
        dx = -dx;
    }

    if (ballX < 0 || ballX + ballW > canvas.width) {
        dx = -dx;
    }
    if (ballY < 0) {
        dy = -dy;
    }
}





function drawball() {
    ctx.beginPath();
    //ctx.arc(ballX, ballY, ballH, 0, Math.PI*2);
    //ctx.fillStyle = "#0095DD";
    //ctx.fill();

    if (gameOver && seconde == 1) {
        ctx.fillStyle = "red";
        ctx.fillRect(ballX, ballY, ballW, ballH);
    } else {
        ctx.drawImage(ball, ballX, ballY, ballW, ballH);
    }

    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(paddleX, paddleY, paddleW, paddleH);
    ctx.closePath();
}

/* beweeg platform met scrollwheel
function movePaddle(event) {
    event.preventDefault();
    console.log(event);
    paddleX += event.deltaY * -0.1;
    paddleX = Math.min(Math.max(paddleX, 0), canvas.width - paddleW);
}
el.onwheel = movePaddle;*/

window.addEventListener("keydown", (e) => {
    if (!gameOver) {
        if (e.key == "ArrowLeft") { paddleX -= 6; }
        if (e.key == "ArrowRight") { paddleX += 6; }
        paddleX = Math.min(Math.max(paddleX, 0), canvas.width - paddleW);
    }
});

function drawScore() {
    ctx.beginPath();
    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText("Levens: " + levens, 5, 20);
    ctx.closePath();
}

function lifeLost() {
    if (levens <= 0) {
        gameOver = true;
    } else {
        ballX = canvas.width * 0.5 + ballW;
        ballY = canvas.height * 0.85 + ballH;
        dx = 1.5;
        dy = -1.5;

        paddleX = (canvas.width - paddleW) * 0.5;
        paddleY = (canvas.height - paddleH) * 0.95;
    }
}

function gameIsOver() {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
    ctx.closePath();
}

function draw() {
    canvas.style.left = (window.innerWidth - canvas.width) / 2 + "px";
    canvas.style.top = ((window.innerHeight + 48) - canvas.height) / 2 + "px";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
    drawPaddle();

    if (levens <= 0) {
        gameOver = true;
    }

    if (!gameOver) {
        collisionDetection();
    } else {
        gameIsOver();
    }
    drawBricks();
    drawball();






    //document.getElementById("dx").innerHTML = "dx:" + dx;
    //document.getElementById("dy").innerHTML = "dy:" + dy;
    /*
        if (ballX > canvas.width - ballW || ballX < 0 || ballY > canvas.height - ballH || ballY < 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ballX = canvas.width / 2 + ballW;
            ballY = canvas.height / 1.5 + ballH;
        }*/
}

function secondes() {
    if (seconde == 1) {
        seconde = 0;
    } else {
        seconde = 1;
    }
}
setInterval(secondes, 500)


setInterval(draw, 10);
