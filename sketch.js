var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var ground_options ={
		isStatic: true	
	}

	ground = Bodies.rectangle(700,730,2000,50,ground_options);
	ground.shapeColor = "black";
	World.add(world,ground);

    starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	

	console.log(ground);
	
}


function draw() {
  background(bgImg);
 
  Engine.update(engine);
    rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

 ellipseMode(RADIUS);
	ellipse(starBody.position.x, starBody.position.y, 20, 20);
	
	star.x= starBody.position.x
	star.y= starBody.position.y
 
 
 drawSprites();

}

function keyPressed() {
	//write code here

	if (keyDown("left")) {
		fairy.velocityX = fairy.velocityX-5;
	}

	if (keyDown("right")) {
		fairy.velocityX = fairy.velocityX+5;
	}

	//if (keyDown("down")) {
		
	//}

}
