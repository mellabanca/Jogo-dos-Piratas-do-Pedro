class Bala{
    constructor(posX, posY){
        this.raio = 30;
        var options = {
            isStatic: true
        }
        this.bola = Bodies.circle(posX, posY, this.raio, options);
        World.add(world,this.bola);
        this.imagem = loadImage("./assets/cannonball.png");
    }

    dBala(){
        var pos = this.bola.position;
        push();
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.raio, this.raio);
        pop();
    }
    canhaoA(){
        Matter.Body.setStatic(this.bola,false);
        Matter.Body.setVelocity(this.bola,{x:30,y:-20})
    }
}