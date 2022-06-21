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
        var novoAng = canhao.ang - 28;
        novoAng *= (3.14/180);
        var velocity = p5.Vector.fromAngle(novoAng);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.bola,false);
        Matter.Body.setVelocity(this.bola,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)});
    }
}