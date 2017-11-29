// red: #F24440
// blue: #1785FB
// green: #73C86B
var myImage;
var myImage2;
var value = 0;
var threshold = 1;
var r;
var posX;
var posY;
function preload() {
  
  myImage= loadImage('assets/1.jpg');

}
function setup() {
	createCanvas(windowWidth,windowHeight);

  angleMode(DEGREES);
  
  frameRate(12);
}

function draw() {
	image(myImage, 0, 0, windowWidth, windowHeight);
	filter(INVERT);
  setShakeThreshold(threshold);
  //background(value);
  fill(255-value);
  textSize(45);
  textAlign(CENTER);
  text('SHAKE IT OFF!',width/2,height/2+30);
  textSize(10);
  text(threshold,width/2,height-10);
   
    
    posX += incrementX;
    posY += incrementY;
    
    if( posX >= width-r/2 || posX <= 0+r/2 ) {
        incrementX *= -1;
    }
    if (posY >= height-r/2  || posY <= 0+r/2) {
        incrementY *= -1;
    }


}

function deviceShaken() {
  value ++;
  threshold += 3;
	noStroke();
	 r = 50;
    posX = random(0.,width);
    posY = random(0,height);
	 ellipse(posX,posY,r,r);
	
}
