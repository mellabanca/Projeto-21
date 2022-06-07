
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {

var ball_options={
	isStatic:false,
	restitution: 0.3,
	friction:0,
	density:1.2
}

	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=Bodies.circle(260,100,20,ball_options);
World.add(world,ball);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
ellipse(ball.position.x, ball.position.y, 40,40);

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		
	}
}

