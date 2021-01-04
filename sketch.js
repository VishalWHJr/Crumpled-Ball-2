var ball, rect1, rect2, rect3;
var ground;
var bin, binImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	binImage=loadImage("dustbin.png");
}
function setup() {
	createCanvas(1000, 650);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	bin=createSprite(1000-200,650-155,1,1);
	bin.addImage(binImage);
	bin.scale=0.6
	rect1=new Dustbin(1000-270,650-145,20,150);
	rect2=new Dustbin(1000-200,650-70,150,20);
	rect3=new Dustbin(1000-130,650-145,20,150);
	ground=new Ground(1000/2,650-50,1000,20);
	ball=new Paper(50,650-90,20);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  rect1.display();
  rect2.display();
  rect3.display();
  ground.display();
  
  drawSprites();
  ball.display();
  console.log(1000, 650);
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-90});
	}
}
