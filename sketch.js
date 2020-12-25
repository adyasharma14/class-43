bg;
function preload(){
  bg=loadImage("images/bg.png");
  birdImg=loadImage("images/bird.png");
  pipeUp=loadImage("images/pipeNorth.png");
  pipeDown=loadImage("images/pipeSouth.png");
}

function setup() {
  createCanvas(displayWidth-50,displayHeight-40);

  bird=createSprite(displayWidth/2-80,displayHeight/2);
  bird.addImage(birdImg);

}



function draw() {
  background(bg); 
  
  bg.velocityX=-3;

  if(keyDown("space")){
    bird.velocityY=-5;
  }
  bird.velocityY=bird.velocityY+2;

  drawSprites();
}
function spawnObstacles(){
  var pipeTop=createSprite(0,100);

}