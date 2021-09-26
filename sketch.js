
var work;
var astronaut_workingout; 
var spaceshipImage;
var spaceship;


function preload(){
  astronaut_workingout = loadAnimation("gym1.png","gym2.png");
  spaceshipImage = loadImage("iss.png")
}

function setup(){
  createCanvas(600,600);
//
spaceship = createSprite(50,170,600,50);
spaceship.addAnimation("space",spaceshipImage);
 work = createSprite(100,200,20,50);
work.addAnimation("working", astronaut_workingout);

//



}

function draw() {

drawSprites()
}
