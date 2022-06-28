class Navio {
    constructor(posX, posY, lar, alt, navioPos){
        this.naviopirata = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.navioPos = navioPos;
        this.naviod = loadImage("./assets/boat.png");
        World.add(world,this.naviopirata);
    }

    dNavio(){
        var pos = this.naviopirata.position;
        var ang = this.naviopirata.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.naviod, 0, this.navioPos, this.lar, this.alt);
        pop();
    }
}