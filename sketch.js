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
var navios = [];
var naviosAnimation = [];
var naviosSpritesheet, naviosDados;
var anavioanimation = [];
var anavioSpritesheet, anavioDados;
var balaa = [];
var balaSpritesheet, balaDados;

function preload() {
  aguaquemexe = loadImage("./assets/background.gif");
  imagemdatorre = loadImage("./assets/tower.png");
  naviosSpritesheet = loadImage("./assets/boat/boat.png");
  naviosDados = loadJSON("./assets/boat/boat.json");
  anavioSpritesheet = loadImage("./assets/boat/brokenBoat.png");
  anavioDados = loadJSON("./assets/boat/brokenBoat.json")
  balaSpritesheet = loadImage("./assets/waterSplash/waterSplash.png");
  balaDados = loadJSON("./assets/waterSplash/waterSplash.json")
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

 var naviosFrames = naviosDados.frames;
 for(var i = 0; i < naviosFrames.length; i++){
  var pos = naviosFrames[i].position;
  var img = naviosSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  naviosAnimation.push(img);
 }
 var anaviosFrames = anavioDados.frames;
 for(var i = 0; i < anaviosFrames.length; i++){
  var pos = anaviosFrames[i].position;
  var img = anavioSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  anavioanimation.push(img);
 }
 var balaFrames = balaDados.frames;
 for(var i = 0; i < balaFrames.length; i++){
  var pos = balaFrames[i].position;
  var img = balaSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  balaa.push(img);
 }
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

  naviosM();
  
for(var i = 0;i<balas.length;i++){
  balasM(balas[i],i)
  colisaoBalaN(i);
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
    bala.animBala();
    if(bala.bola.position.x>=width||bala.bola.position.y>=height-50){
      bala.apgbala(i);
    }
  }
}

function naviosM(){
  if(navios.length>0){
    if(navios[navios.length-1]===undefined||navios[navios.length-1].naviopirata.position.x<width-300){
      var position = [-40,-60,-70,-20];
      var position2 = random(position);
      var  navio = new Navio(width, height-60, 170, 170, position2, naviosAnimation); 
      navios.push(navio);
    }
    for(var i =0;i<navios.length;i++){
      if(navios[i]){
        Matter.Body.setVelocity(navios[i].naviopirata, {x:-0.9, y:0});
        navios[i].dNavio();
        navios[i].animNavio();
      }
    }
  }
  else{
  var  navio = new Navio(width, height-60, 170, 170, -60, naviosAnimation); 
  navios.push(navio);
  }
}

function colisaoBalaN(index){
  for(var i = 0;i<navios.length;i++){
    if(balas[index]!==undefined&&navios[i]!==undefined){
      var colisao = Matter.SAT.collides(balas[index].bola,navios[i].naviopirata);
      if(colisao.collided){
        navios[i].apgNavio(i);
        Matter.World.remove(world,balas[index].bola);
        delete balas[index];
      }
    }
  }
}