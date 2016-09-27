function Ship(newX, newY) {    
    "use strict";
    this.position = new Vector(newX, newY);
    this.velocity = new Vector(0, 0);
    this.direction = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    
    this.speed = 0.2;
    
    this.maxSpeed = 6.5;
    this.prevMilli = 0;
    this.buls = new Array;
    
    this.draw = function() {
        ctx.fillStyle = "red";
        
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        
        ctx.restore();
        
        /*
        keeping rotation preserved:
        
        let theta be the angle you want to rotate by
        cos(theta) = cs
        sin(theta) = sn
        
        tempX = x
        tempY = y
        
        tempX = x * cs - y * sn
        tempY = x * sn - y * cs
        
        x = tempX
        y = tempY
        
        */
    };
    
}