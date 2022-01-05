var bg , astronaut, sleep, brush , gym, eat, drink, move;
var bgImg, sleepImg, brushImg, gymImg, eatImg, drinkImg, moveImg,bathImg;
var score = 0;

function preload(){
bgImg = loadImage ("iss.png");
sleepImg = loadImage ("Images/sleep.png");
brushImg = loadImage("Images/brush.png");
gymImg = loadImage("Images/gym1.png");
drinkImg= loadImage("Images/drink1.png");
moveImg= loadImage("Images/move.png");
bathImg= loadImage("Images/bath1.png");

}

function setup() {
  createCanvas(800,400);

  bg = createSprite(400, 200, 50, 50);
  bg.addImage(bgImg);
  bg.scale = 0.1;

  astronaut=createSprite(400,230);
  astronaut.addAnimation("sleeping", sleepImg);
  astronaut.scale=0.1;

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y= 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming", gymImg);
    astronaut.changeAnimation("gyming");
    astronaut.y= 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eatImg);
    astronaut.changeAnimation("eating");
    astronaut.y= 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.y= 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("M")){
    astronaut.addAnimation("moving", moveImg);
    astronaut.changeAnimation("moving");
    astronaut.y= 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
  textSize(20);
  text ("Instructions:", 170,80);
  textSize(13);
  text("up arrow=Brushing", 170,95);
  text("down arrow=Gymming", 170, 110);
  text("left arrow=Eating", 170, 125);
  text("right arrow=Bathing", 170, 140);
  text("M key=Moving", 170, 155);
}