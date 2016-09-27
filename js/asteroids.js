function Asteroid(newX, newY) {
    "use strict";
    this.position = new Vector(newX, newY);
    this.velocity = new Vector(0, 0);
    this.direction = new Vector(0, 0);
    
    this.circRad = 30;
    
    this.numTris = (Math.random() * 16) + 40
        
    this.draw = function() {
        ctx.fillStyle = "black";
        
        ctx.beginPath();
        for(var i = 0; i < this.numTris; i++)
        {
            ctx.save();
            ctx.translate(this.position.x, this.position.y);
            ctx.moveTo(0, 0);
            var angle = Math.random() * 6.28319;
            ctx.lineTo(Math.cos(angle) * Math.random() * this.circRad,
                      Math.sin(angle) * Math.random() * this.circRad);

            ctx.lineTo(Math.random()*10, Math.random()*10);
            ctx.lineTo(Math.random()*10, Math.random()*10);
            ctx.restore();
        }
        
        ctx.arc(this.x,this.y, this.circRad, 0, 2*Math.PI);
        ctx.fill();
        
        
    }
};