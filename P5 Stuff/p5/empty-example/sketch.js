function setup() {
  createCanvas(480, 400);
}
function windowResized() {
  centerCanvas();
}
function draw() {
  if(mouseIsPressed){
    fill(0);
  } else{
    fill(random (255), random (255), random (255));
  } 
  ellipse(mouseX,mouseY, 80, 80);
}