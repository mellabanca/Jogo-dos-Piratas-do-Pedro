class Canhao {
    constructor(posX, posY, lar, alt, ang){
        this.posX = posX;
        this.posY = posY;
        this.lar = lar;
        this.alt = alt;
        this.ang = ang;
        this.cano = loadImage("./assets/canon.png");
        this.base = loadImage("./assets/cannonBase.png");
    }
    dCanhao(){
        if(keyIsDown(RIGHT_ARROW)&&this.ang<70){
            this.ang+=1
        }
        if(keyIsDown(LEFT_ARROW)&&this.ang>-50){
            this.ang-=1
        }
        push();
        translate(this.posX,this.posY);
        rotate(this.ang)
        imageMode(CENTER);
        image(this.cano,
            0,
            0,
            this.lar,
            this.alt);
        pop();
        image(this.base,70,20,200,200);
        noFill();    
    }
}