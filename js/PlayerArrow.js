class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.trajectory = []
      this.image = loadImage("./assets/arrow.png");
      
      World.add(world, this.body);
    }
    shoot() {
  var loc = p5.Vector.fromAngle(playerArcher.body.angle);

       loc.mult(30);

       Body.setStatic(this.body, false);
       Body.setVelocity(this.body,{x:-loc.x+20, y:-loc.y-30});
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        if(this.body.velocity.x > 0 && this.body.position.x > 200)
        {
            //position is also an array
            var position = [pos.x, pos.y];
            //array inside an array
            this.trajectory.push(position);
        }

        for(var i=0; i<this.trajectory.length; i++ )
        {
            image(this.image, this.trajectory[i][0], this.trajectory[i][1], 10,5)
        }
    
    }
}