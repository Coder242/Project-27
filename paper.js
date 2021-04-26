class Paper {
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 1.1,
            friction : 0.001,
            density : 1
        }

        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        Matter.Body.setMass(this.body, 1000)
        fill("violet");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r);
        pop();
    }
}