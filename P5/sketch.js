// function movewords() {
//     $('.right').append(spawns);
//     spawns.css({
//       "right": Math.random() * window.innerWidth,
//       "top": Math.random() * window.innerHeight
//     }) }



function setup() {
    createCanvas(displayWidth, displayHeight);
  }
function mousePressed(){
    createP("wow im born")
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x,y);
    // createElement("h1","more things" )
}
  
  function draw() {
    if (mouseIsPressed){
      fill(0);
    } else{
      fill(255);
    }
    ellipse(mouseX,mouseY,10,10);
}

    function draw() {
        if (mouseIsPressed){
          fill(0);
        } else{
          fill(255);
        }
        ellipse(random,random,10,10);
    

    // weird string effect

    // if (mouseIsPressed){
    //     fill(0);
    //   } else{
    //     fill(255);
    //   }
    //   triangle(mouseX,mouseY,10,10);

    // translate(-240, -100, 0);
    // normalMaterial();
    // push();
    // rotateZ(frameCount * 0.01);
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    // plane(70);
    // pop();
  }