const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

//Declare an array for arrows playerArrows = [ ]
var playerArrows = [];

//var arrow;


function setup() {
createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
 


}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()

 // Use for loop to display arrow using showArrow() function
 for(var i= 0; i<playerArrows.length; i++)
 {
  showArrows(playerArrows[i], i)
 }

}

function keyPressed() {

  if(keyCode === RIGHT_ARROW){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
    var arrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y,40,10);
    playerArrows.push(arrow);
  }
}

function keyReleased () {

  if(keyCode === RIGHT_ARROW){
    //call shoot() function for each arrow in an array playerArrows
    playerArrows[playerArrows.length-1].shoot();
  }


}
//Display arrow and Tranjectory
function showArrows(arrows,index) {
  arrows.display();

  if(arrows.body.position.x >=width || arrows.body.position.y >= height -10)
  {
      World.remove(world, arrows.body);
      //array
      playerArrows.splice(index,1);
  }

}
