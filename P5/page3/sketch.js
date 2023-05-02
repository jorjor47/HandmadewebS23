// Random Ball Placement
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0

var xBall2 = Math.floor(Math.random() * 280) + 65;
var yBall2 = 700;
var xSpeed2 = (1.6, 5);
var ySpeed2 = (-70, -1.6);



var w = window.innerWidth;
var h = window.innerHeight;

// Canvas
function setup() {
  createCanvas(w, h);
}

//Background

function draw() {

  // Background
  // background(0);

  move();
  display();
  bounce();
  //resetBall();
  paddle();

  
}
// Ball Functions
function move() {
  xBall += xSpeed;
  yBall += ySpeed;
  xBall2 += xSpeed2;
  yBall2 += ySpeed2;

}


function bounce() {

  if (xBall < 10 ||
    xBall > w - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 ||
    yBall > h - 10) {
    ySpeed *= -1;
  }

  if (xBall2 < 10 ||
    xBall2 > w - 10) {
    xSpeed2 *= -1;
  }
  if (yBall2 < 10 ||
    yBall2 > h - 10) {
    ySpeed2 *= -1;
  }

  // if (xBall2 = mouseX ||
  //   xBall2 > mouseX - 10) {
  //   xSpeed2 *= -1;
  // }
  // if (yBall2 < mouseY ||
  //   yBall2 > mouseY - 10) {
  //   ySpeed2 *= -1;
  // }

}


// Reset Ball
//function resetBall() {
//  if (yBall >= 400 ||
//    yBall > 400 - 10) {
//    ySpeed = 4;
// }

//}

function display() {
  fill('#d9c3f7');
  triangle(xBall, yBall, 20, 20);
  fill('#d9c3f7');
  // ellipse(xBall, yBall, 20, 20);
  text('7', xBall, yBall);
  textSize(40);

    fill('#d9c7f3');
    // ellipse(xBall, yBall, 20, 20);
  

  fill('#d9c3f7');
  triangle(xBall2, yBall2, 20, 20);
 
    fill('#d9c7f3');
    text('7', xBall2, yBall2);
    textSize(60);
  }



// // Bounce off Paddle
function paddle() {
  if ((xBall > mouseX &&
      xBall < mouseX + 90) &&
    (yBall + 10 >= h)) {
    xSpeed *= -1;
    ySpeed *= -1;
    score++;

  }
}

function mousePressed(){
  fill('#d9c7f3');
  text('7', mouseX, mouseY);
  textSize(50);
}