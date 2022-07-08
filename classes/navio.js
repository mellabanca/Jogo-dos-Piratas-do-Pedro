class Navio {
    constructor(posX, posY, lar, alt, navioPos, navioAnimation){
        this.naviopirata = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.navioPos = navioPos;
        this.naviod = loadImage("./assets/boat.png");
        this.navioa = navioAnimation;
        this.naviov = 0.05;
        this.navioq = false;
        World.add(world,this.naviopirata);
    }

    animNavio(){
        this.naviov += 0.05;
    }

    dNavio(){
        var pos = this.naviopirata.position;
        var ang = this.naviopirata.angle;
        var index = floor(this.naviov % this.navioa.length);

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.navioa[index], 0, this.navioPos, this.lar, this.alt);
        pop();
    }
    apgNavio(index){
        this.navioa = anavioanimation;
        this.naviov = 0.05;
        this.lar = 300;
        this.alt = 300;
        this.navioq = true
        setTimeout(()=>{
            Matter.World.remove(world,navios[index].naviopirata);
            delete navios[index];
        },2000);
    }
}
