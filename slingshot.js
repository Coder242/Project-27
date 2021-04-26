class slingshot{

    constructor(bodyA,bodyB,offsetX,offsetY){

        var option;

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        option = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            length: 300,
            stiffness: 1
        }

        this.slingshot = constraint.create(option);
        World.add(world, this.slingshot);

    }

    display(){

        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;

        strokeWeight(4);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x+this.offsetX;
        var Anchor2Y = pointB.y+this.offsetY;

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

    }

}