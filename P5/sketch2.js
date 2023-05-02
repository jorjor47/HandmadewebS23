var circlex=0;
var circley=10;
var col = 0;
var col2 = 0;
var w = window.innerWidth;
var h = window.innerHeight;
var circlex2 =50;
var circley2 =-60;

var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0

function setup() {
  createCanvas(w, h);
  // circlex=50;
  background(200);
}

function move() {
    xBall += xSpeed;
    yBall += ySpeed;
    
}


function draw() {
  // background(100);
  var w = window.innerWidth;
var h = window.innerHeight;
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  move();
  // display();
  bounce();
  // paddle();

  // for (let i = 0; i < 1000; i++) {
  // let r = random(w);
  // stroke(r * 1);
  // line(7, 250, h + r, i);}

fill(255, 0, 0);
//   rect(mouseX, mouseY, 20, 100);
    fill(0, 0, 0);
  ellipse(xBall, yBall, 60, 60);
  fill(255, 255, 255);
  ellipse(xBall, yBall, 30, 30);
  fill(0, 0, 0);
  text('7', xBall - 3, yBall + 2)  
  
  
  //Body
//   fill(255, 0, 0);
// //   rect(mouseX, mouseY, 20, 100);
//     fill(0, 0, 0);
//   ellipse(circlex2, circley2, 60, 60);
//   fill(255, 255, 255);
//   ellipse(circlex2, circley2, 30, 30);
//   fill(0, 0, 0);
//   text('7', circlex2 - 3, circley2 + 2)  

//   //head
//   // background(col, 0, col2)
//   fill(0, 0, 0);
//   ellipse(circlex, circley, 60, 60);
//   fill(255, 255, 255);
//   ellipse(circlex, circley, 30, 30);
//   fill(0, 0, 0);
//   text('7', circlex - 3, circley + 2)
//    rect(mouseX, mouseY, 20, 100);
  col = map(mouseX, 0, 400, 0, 255);
  col2 = map(mouseY, 0, 400, 255, 0);
  circlex=circlex+1;
  circley=circley+2;
  circlex2=circlex2+3;
  circley2=circley2+1.3;
//   if (circley>100){
//     console.log('positive');
// } else {
//   console.log('negative');
//   }
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
}

function colorshift() {
    if ((xBall > mouseX &&
        xBall < mouseX + 90) &&
      (yBall + 10 >= 375)) {
      score *=score ++;
}
}

function colorshift2() {
  if ((score > 1)) {
    fill(30, 20, 40);
  ellipse(xBall, yBall, 60, 60);
}
}

// function paddle() {
//   if ((xBall > mouseX &&
//       xBall < mouseX + 90) &&
//     (yBall + 10 >= 375)) {
//     xSpeed *= -1;
//     ySpeed *= -1;
//     score++;
//   }
// }

function mousePressed(){
  background(200);
}

// if (mouseIsPressed){
//         fill(0);
//       } else{
//         fill(255);
//       }
//       triangle(mouseX,mouseY,10,10);

//     translate(-240, -100, 0);
//     normalMaterial();
//     push();
//     rotateZ(frameCount * 0.01);
//     rotateX(frameCount * 0.01);
//     rotateY(frameCount * 0.01);
//     plane(70);
//     pop();

