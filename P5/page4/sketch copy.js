var circlex=0;
var circley=10;
var col = 0;
var col2 = 0;
var w = window.innerWidth;
var h = window.innerHeight;

var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0

function setup() {
  createCanvas(w, h);
  // circlex=50;
  background(100);
}

// function display() {
//     fill('//#region 255');
//     ellipse(xBall, yBall, 20, 20);
//   }

function draw() {
  // background(100);
  // ellipseMode(CENTER);
  // rectMode(CENTER);
  
  fill('//#region 255');
    ellipse(xBall, yBall, 20, 20);
//   for (let i = 0; i < 100; i++) {
//   let r = random(50);
//   stroke(r * 5);
//   line(50, i, 50 + r, i);
// }
  
  
  //Body
  // fill(255, 0, 0);
  // rect(mouseX, mouseY, 20, 100);
  
  //head
//   background(col, 0, col2)
  // fill(0, 0, 255);
  // ellipse(circlex, circley, 60, 60);
  //  rect(mouseX, mouseY, 20, 100);
  // col = map(mouseX, 0, 400, 0, 255);
  // col2 = map(mouseY, 0, 400, 255, 0);
  // circlex=circlex+1;
  // circley=circley+2;
//   if (circley>100){
//     console.log('positive');
// } else {
//   console.log('negative');
//   }
}

// function mousePressed(){
//   background(200);
// }

// function bounce() {

//     if (xBall < 10 ||
//       xBall > 400 - 10) {
//       xSpeed *= -1;
//     }
//     if (yBall < 10 ||
//       yBall > 400 - 10) {
//       ySpeed *= -1;
//     }
//   }


  
  // Bounce off Paddle
  function paddle() {
    if ((xBall > mouseX &&
        xBall < mouseX + 90) &&
      (yBall + 10 >= 375)) {
      xSpeed *= -1;
      ySpeed *= -1;
      score++;
    }
}