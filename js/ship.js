function Ship(newX, newY) {    
    "use strict";
    this.circRad = 15;
    this.angle =  Math.PI / 4;
    
    this.position = new Vector(newX, newY);
    this.velocity = new Vector(1, 1);
    this.acceleration = new Vector(1, 1);
    this.direction = new Vector(this.circRad*Math.cos(this.angle), this.circRad*Math.sin(this.angle));
    
    
    this.speed = 0.2;
    
    this.maxSpeed = 6.5;
    this.prevMilli = 0;
    this.buls = new Array();
    
    
    this.points = new Array();
    
    this.points[0] = new Vector(0, 0);
    this.points[1] = new Vector(Math.cos(1.8675) * this.circRad * 2, Math.sin(1.8675) * this.circRad * 2);
    this.points[2] = new Vector(Math.cos(1.25664) * this.circRad * 2, Math.sin(1.25664) * this.circRad * 2);
        
    this.draw = function() {
        ctx.fillStyle = "red";
        
        ctx.beginPath();
        
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.direction.direction());
        console.log(this.direction.direction());
        ctx.translate(0, -this.circRad);
        
        ctx.moveTo(0, 0);
        ctx.lineTo(this.points[0].x, this.points[0].y);
        ctx.lineTo(this.points[1].x, this.points[1].y);
        ctx.lineTo(this.points[2].x, this.points[2].y);
        ctx.lineTo(this.points[0].x, this.points[0].y);
        
        ctx.restore();
        
        ctx.fill();
    };
    
}