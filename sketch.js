var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg
var invisibleBlockGroup, invisibleBlock;
var gameState = "play" 


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav"); 
  ghostImg = loadImage ('ghost-jumping.png') 

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1; 
  ghost = createSprite (300,300,29,70) 
  ghost.addImage ('ghostJ', ghostImg)
  ghost.scale= 0.5 
  
} 
 function spawnDoorClimbers () {
   if(frameCount%100==0){
  var door = createSprite (400,200,100,40) 
  
door.velocityY= 2 
door.addImage ('door',doorImg) 
door.x= random(300,500) 
var climber = createSprite (200,260,100,40)  
climber.addImage ('climber',climberImg) 
climber.x= door.x 
climber.velocityY= 2 
   }
 } 


function draw() {
  background(200);
  spawnDoorClimbers () 

  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown('LEFT_ARROW')) {
      ghost.x= ghost.x-2
    } 
    if(keyDown('RIGHT_ARROW')) {
      ghost.x= ghost.x+2
    } 
    if(keyDown('space')) {
      ghost.velocityY= -2
    }
    ghost.velocityY= ghost.velocityY+0.5
    drawSprites () 
    
} 

