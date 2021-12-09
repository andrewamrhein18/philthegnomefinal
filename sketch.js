var rover =0;
var john =0;
var joe=1;

function setup() {
  createCanvas(500, 500);// this is the size of the canvas
   background(173,216,210);// purple color
}

function draw () {
  
  fill(244,255,127,150);//blue
  stroke(255,396,200);
  strokeWeight(8);
  ellipse(mouseX,mouseY ,40,30); 
  fill(123, rover,30,60);
  ellipse(140,140,rover , rover) ;
  textSize (50);
  textFont("Times New Roman");
  textStyle(BOLD);
  textAlign(CENTER);
  text("HI",300,rover);
  stroke (400,1,2);
  line(joe, 110, john,9);
}

function mousePressed(){
  (rover=250);
  rover=0;
 {
   rover=rover=7;
 }
john=john+5;
joe=joe+5;
}
