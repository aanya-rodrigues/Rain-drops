class rainClass{
    
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Matter.circle(x,y,radius,options,{isStatic:true});
        World.add(world, this.body);
    }
      display(){
        push();
        this.display();
        pop();
      }
}

