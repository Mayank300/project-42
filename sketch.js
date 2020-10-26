







function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
 }

function draw() {
  background(0);  
  translate(400,400)
   rotate(-90);

  var hr = hour();
  var mn = minute();
  var sc = second();

fill("white");
noStroke();
textSize(30);
text(hr + ':' + mn + ':' + sc,350,700);
  

  noFill();
  stroke(255,0,111);
  strokeWeight(7);
  var scAngle = map(sc, 0, 60, 0, 360);
  arc(0,0,400,400,0,scAngle);

  push();
  noFill();
  stroke(255,0,111);
  strokeWeight(7);
  rotate(scAngle);
  line(0,0,160,0);
  pop();

  noFill();
  stroke(148,0,211);
  strokeWeight(7);
  var mnAngle = map(mn, 0, 60, 0, 360);
  arc(0,0,440,440,0,mnAngle);

  push();
  rotate(mnAngle);
  stroke(148,0,211);
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  noFill();
  stroke(176,172,172);
  strokeWeight(7);
  var hrAngle = map(hr, 0, 60, 0, 360);
  arc(0,0,480,480,0,hrAngle);

  push();
  rotate(hrAngle);
  stroke(176,172,172);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  drawSprites();
}