var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 700;
canvas.style.top = (window.innerHeight - canvas.height) / 2 + "px";
canvas.style.left = (window.innerWidth - canvas.width) / 2 + "px";

var ball = document.getElementById("ball");
ball.src = "./images/block-breaker/ball.png";
var ballW = 32;
var ballH = 32;

var ballX = canvas.width * 0.5 + ballW;
var ballY = canvas.height * 0.75 + ballH;
var dx = 1.5;
var dy = -1.5;


var paddleW = 128;
var paddleH = 32;

var paddleX = (canvas.width - paddleW) * 0.5;
var paddleY = (canvas.height - paddleH) * 0.9;

const el = document.querySelector('canvas');



function drawball() {
    ctx.beginPath();
    //ctx.arc(ballX, ballY, ballH, 0, Math.PI*2);
    //ctx.fillStyle = "#0095DD";
    //ctx.fill();
    ctx.drawImage(ball, ballX, ballY, ballW, ballH);
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.fillRect(paddleX, paddleY, paddleW, paddleH);
    ctx.fillStyle = "gray";
    ctx.closePath();
}

function movePaddle(event) {
    event.preventDefault();
    paddleX += event.deltaY * -0.1;
    paddleX = Math.min(Math.max(paddleX, 0), canvas.width - paddleW);
}
el.onwheel = movePaddle;

function draw() {
    canvas.style.left = (window.innerWidth - canvas.width) / 2 + "px";
    canvas.style.top = (window.innerHeight - canvas.height) / 2 + "px";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    


    drawPaddle();

    ballX += dx;
    ballY += dy;


    if (ballX + dx > paddleX - ballW) {
        dx = -dx;
    }
    
    
    
    
    /*
    if (ballX < paddleX + paddleW && ballX + ballW > paddleX && ballY < paddleY + paddleH && ballY + ballH > paddleY) {
        dy = -dy;
    }*/

    if ((ballX + dx < 0) || (ballX + dx > canvas.width - ballW)) {
        dx = -dx;
    }
    if ((ballY + dy < 0) || (ballY + dy > canvas.height - ballH)) {
        dy = -dy;
    }
    drawball();

    //document.getElementById("dx").innerHTML = "dx:" + dx;
    //document.getElementById("dy").innerHTML = "dy:" + dy;

    if (ballX > canvas.width - ballW || ballX < 0 || ballY > canvas.height - ballH || ballY < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ballX = canvas.width / 2 + ballW;
        ballY = canvas.height / 1.5 + ballH;
    }
}

setInterval(draw, 2);	