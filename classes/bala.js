class Bala{
    constructor(posX, posY){
        this.raio = 30;
        var options = {
            isStatic: true
        }
        this.bola = Bodies.circle(posX, posY, this.raio, options);
        World.add(world,this.bola);
        this.imagem = loadImage("./assets/cannonball.png");
        this.rastro = [];
    }

    dBala(){
        var pos = this.bola.position;
        push();
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.raio, this.raio);
        pop();
        if(this.bola.velocity.x>0&&pos.x>10){
            var position = [pos.x,pos.y];
            this.rastro.push(position);
            for(var i = 0;i<this.rastro.length;i++){
                image(this.imagem,this.rastro[i][0],this.rastro[i][1],5,5);
            }
        }
    }
    canhaoA(){
        Matter.Body.setStatic(this.bola,false);
        var newAngle = canhao.ang - 28;
        newAngle = newAngle * (3.14/180);
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.bola, false);
        Matter.Body.setVelocity(this.bola, {x: velocity.x * (180/3.14), y: velocity.y * (180/3.14)});
    }
    apgbala(index){
        Matter.Body.setVelocity(this.bola, {x: 0, y: 0});
        setTimeout(()=>{
            Matter.World.remove(world,this.bola);
            delete balas[index];
        },1000);
    }
}