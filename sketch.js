// Physics Engine
// Matter engine, Matter bodies, Matter world

// Namespacing - nicknameing

//mito is op
// jai mito

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine1, world, ground, box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;
var platform;
var backgroundImage, bkimage;
var sling;
var score = 0;

//Arrays!
function preload() {
  backgroundImage = loadImage("sprites/bg.png");
  timeapi();
}

function setup() {
  createCanvas(1200, 400);

  engine1 = Engine.create(); // Matter.Engine.create();
  world = engine1.world;

  // JSON Format  - Javscript object notation

  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  box5 = new Box(810, 160, 70, 70);

  pig2 = new Pig(810, 220);

  ground = new Ground(600, 390, 1200, 20);
  platform = new Ground(150, 295, 300, 170);

  pig1 = new Pig(810, 320);
  log1 = new Log(815, 260, 300, PI / 2);
  log2 = new Log(810, 160, 300, PI / 2);
  log3 = new Log(749, 120, 150, PI / 7);
  log4 = new Log(869, 120, 150, -PI / 7);

  bird = new Bird(100, 50);
  sling = new Slingshot(bird.body, { x: 200, y: 50 });
}

function draw() {
  background(backgroundImage);

  fill("black");
  textSize(25);
  text("Score : "+ score,1000,35)


  Engine.update(engine1);
  ground.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log2.display();
  log1.display();
  log3.display();
  log4.display();
  bird.display();

  sling.display();
}
function mouseDragged() {
  Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  sling.bird_flying();
}

function keyPressed() {
  if ((keyCode = 32)) {
    sling.attach(bird.body);
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body, { x: 200, y: 50 });
  }
}

//synchronous language
//mito bhaiya.gif

async function timeapi() {
  var response = await fetch(
    "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  var time = await response.json();
  console.log(time);
  console.log(time.datetime);

  var dateT = time.datetime;
  var hour = dateT.slice(11, 13);

  console.log(hour);

  if (hour >= 06 && hour <= 19) {
    bkimage = "sprites/bg.png";
  } else {
    bkimage = "sprites/bg2 .jpeg";
  }
  backgroundImage = loadImage(bkimage);
}
