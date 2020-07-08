const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, ground, block1, polygon, slingshot;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 block1 = new Box(650,268,25,35);
  block2 = new Box(600,338,25,35);
  block3 = new Box(625,338,25,35);
  block4 = new Box(650,338,25,35);
  block5 = new Box(675,338,25,35);
  block6 = new Box(700,338,25,35);

  block13 = new Box(575,373,25,35);
  block7 = new Box(600,373,25,35);
  block8 =  new Box(625,373,25,35);
  block9 = new Box(650,373,25,35);
  block10 = new Box(675,373,25,35);
  block11 = new Box(700,373,25,35);
  block12 = new Box(725,373,25,35);
  
  
  block14 = new Box(625,303,25,35);
  block15 = new Box(650,303,25,35);
  block16 = new Box(675,303,25,35);
  

  ground = new Ground(600,height,1200,20);

  


polygon = Bodies.circle(100, 200, 50);
  World.add(world, polygon);
  //strokeWeight(3);
  //stroke("black");
  fill("yellow");
  slingshot = new Slingshot(this.polygon,{x:100, y:100});


}

function draw() {
  background(0);  
  Engine.update(engine);
ground.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();

block14.display();
block15.display();
block16.display();

block8.display();
block9.display();

ellipse(this.polygon.position.x,this.polygon.position.y,50,50)
  slingshot.display();

 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode==32){
  slingshot.attach(this.polygon)
  
  }
}