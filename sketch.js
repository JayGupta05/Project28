var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2;
var paper,dustbin,launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);

	fill("red");
	paper = new Paper(100,320);
	dustbin = new Dustbin(500,670);
	ground = new Ground(400,690,800,20);
	launcher = new Launcher(paper.body,{x:100,y:250});
	
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(225);
	
	paper.display();
  	dustbin.display();
	ground.display();
	launcher.display();
  
  	drawSprites();
 }

 function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}



