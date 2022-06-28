//Revisão sobre Matrizes
var matriz1 = [25,34,87,48,441];
console.log(matriz1);

var matriz2 = ["Melissa", 26, "Pedro", 13, true];
//console.log(matriz2);

var matriz3 = [matriz1, matriz2];
//console.log(matriz3);

/*console.log(matriz1[3]);
console.log(matriz2[2]);
console.log(matriz3[0][1]);*/

matriz1.push(1000);
//console.log(matriz1);
matriz1.pop();
//console.log(matriz1);


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;
var aguaquemexe;
var torredeartilharia;
var imagemdatorre;
var canhao, angulodocanhao;
var bala;
var balas = [];
var navio;

function preload() {
  aguaquemexe = loadImage("./assets/background.gif");
  imagemdatorre = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 torredeartilharia = Bodies.rectangle(160, 350, 160, 310, options);
 World.add(world, torredeartilharia);

 angleMode(DEGREES);
 angulodocanhao = 20;
 canhao = new Canhao(180,110,130,100,angulodocanhao)

 navio = new Navio(width-79, height-60, 170, 170, -80); 
}

function draw()  {
  background(189);
  image(aguaquemexe, 0, 0, 1200, 600);

  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
  
 push();
 imageMode(CENTER);
 image(imagemdatorre,torredeartilharia.position.x, torredeartilharia.position.y, 160, 310);
 pop();
  canhao.dCanhao();
  Matter.Body.setVelocity(navio.naviopirata, {x:-0.9, y:0});
  navio.dNavio();
for(var i = 0;i<balas.length;i++){
  balasM(balas[i],i)
}
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    balas[balas.length-1].canhaoA();
  }
}

function keyPressed(){
  if( keyCode===DOWN_ARROW){
    var bala = new Bala(canhao.posX, canhao.posY);
    balas.push(bala);
  }
}

function balasM(bala,i){
  if(bala){
    bala.dBala();
  }
}