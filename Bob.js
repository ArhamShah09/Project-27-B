class Bob {
    constructor(x,y,diameter) {
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0,
            density :0.8
        }
        this.body = Bodies.circle(x, y, diameter/2, options);
        this.diameter = diameter;
        
        World.add(world, this.body);
        } 
      
      display(){
        push();
        var pos =this.body.position;
        fill("grey");
        ellipseMode(CENTER); 
        ellipse(pos.x, pos.y, this.diameter);
        pop();
    }
}