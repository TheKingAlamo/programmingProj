var diam1=0;
function setup() {
  // put setup code here
    createCanvas(500,500);
    //background("#003366");
}

function draw() {
  // put drawing code here
    background('#fae');
    fill("#13EAE7");
    stroke("#ED0D0D");
    strokeWeight(6);
    ellipse(random(width),random(height),20,20);
    fill("#13EAE7");
    ellipse(mouseX,mouseY,20,20);
    fill("#13EAE7");
    ellipse(50,50,diam1,diam1);
}

function mousePressed(){
    diam1=diam1+50;
}