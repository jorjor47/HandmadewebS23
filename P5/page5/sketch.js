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
let slider;

function setup() {
  createCanvas(w, h, WEBGL);
  // circlex=50;
  // background(100);

  sphereslider = createSlider(-1000, 1000, 100);
  sphereslider.position(100, 200);
  sphereslider.addClass("mySliders");
  sphereslider.style('width', '80px');
  sphereslider.style('background', 'red');

  heightslider = createSlider(-1000, 1000, 100);
  heightslider.position(200, 200);
  heightslider.addClass("mySliders");

  sizeslider = createSlider(-1000, 1000, 100);
  sizeslider.position(350, 200);
  sizeslider.addClass("mySliders");

}

// function display() {
//     fill('//#region 255');
//     ellipse(xBall, yBall, 20, 20);
//   }

function draw() {

  let val = sphereslider.value();

  let val2 = heightslider.value();

  let val3 = sizeslider.value();
  // background(val);

  
  // for (let val = val; val < width; val += 10) 
  //   // If 'i' divides by 20 with no remainder draw the first line
  //   // else draw the second line
  //   if (val % 20 === 0) {
  //     stroke(255);
  //     line(val, 80, val, height / 2);
  //   } else {
  //     stroke(153);
  //     line(val, 20, val, 180);
  //   }

  
  for (let i = 0; i < 1000; i++) {
    let r = random(w);
    stroke(r * 1);
    line(7, 5, h + r, i);}
  
    background(255);

    noStroke();
    fill(50);
    push();
    translate(-20, 175);
    rotateY(val);
    rotateX(-0.9);
    box(100);
    pop();
  
    noFill();
    stroke(50);
    push();
    translate(val, val2 * 0.35, -200);
    sphere(val3);
    pop();
  
}

function testNum(val) {
  let result;
  if (a > 0) {
    
  } else {
    result = 'NOT positive';
  }
}