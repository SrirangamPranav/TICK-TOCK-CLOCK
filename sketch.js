var hr;
var min ;
var sec;
var secangle,minangle,hourangle;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
}

function draw() {
  background("black");  
  translate(200,200)
  rotate(-90)
  hr = hour();
  sec = second();
  min = minute();

  hourangle = map(hr%12,0,12,0,360);
  minangle = map(min,0,60,0,360);
  secangle = map(sec,0,60,0,360);

  push();
  rotate(hourangle)
  stroke("lightgreen")
  strokeWeight(5)
  line(0,0,30,0)
  pop();

  push();
  rotate(minangle)
  stroke("blue")
  strokeWeight(5)
  line(0,0,70,0)
  pop();

  push();
  rotate(secangle)
  stroke("red")
  strokeWeight(5)
  line(0,0,100,0)
  pop();

  stroke("lightgreen");
  strokeWeight(9);
  noFill();
  arc(0,0,240,240,0,hourangle);

  stroke("blue");
  strokeWeight(9);
  noFill();
  arc(0,0,270,270,0,minangle);

  stroke("red");
  strokeWeight(9);
  noFill();
  arc(0,0,300,300,0,secangle);
  drawSprites();
}