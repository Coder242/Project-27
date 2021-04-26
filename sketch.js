
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var wire1,wire2,wire3,wire4,wire5;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Paper(200,600,25);
	bob2 = new Paper(250,600,25);
	bob3 = new Paper(300,600,25);
	bob4 = new Paper(350,600,25);
	bob5 = new Paper(400,600,25);

	roof = new Ground(15);

	wire1 = new slingshot(bob1.body,roof.body,-100,0);
	wire2 = new slingshot(bob2.body,roof.body,-50,0);
	wire3 = new slingshot(bob3.body,roof.body,0,0);
	wire4 = new slingshot(bob4.body,roof.body,50,0);
	wire5 = new slingshot(bob5.body,roof.body,100,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(140);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();

  wire1.display();
  wire2.display();
  wire3.display();
  wire4.display();
  wire5.display();

  keydown();
 
}

function keydown(){
	if(keyIsDown(LEFT_ARROW)){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-10,y:0})
		
	}
}

