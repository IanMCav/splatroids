function Asteroid(newX, newY) {
    "use strict";
    this.position = new Vector(newX, newY);
    this.velocity = new Vector(0, 0);
    this.direction = new Vector(0, 0);
    
    this.circRad = 30;
    
    this.numTris = (Math.random() * 16) + 40;
    
    this.points = new Array();
    
    for(var i = 0; i < this.numTris; i++)
        {
            this.points[i] = new Array(3);
            
            for(var j = 0; j < 3; j++)
                {
                    if(j == 0)
                        {
                            var angle = Math.random() * 6.28319;
                            
                            this.points[i][j] = new Vector(Math.cos(angle) * Math.random() * this.circRad,
                                Math.sin(angle) * Math.random() * this.circRad);
                        }
                    
                    else
                        {
                            this.points[i][j] = new Vector(Math.random()*15, Math.random()*15);
                        }
                }
        }
    
    this.draw = function() {
        ctx.fillStyle = "black";
        
        ctx.beginPath();
        for(var i = 0; i < this.numTris; i++)
        {
            ctx.save();
            ctx.translate(this.position.x, this.position.y);
            
            ctx.moveTo(0, 0);
            ctx.lineTo(this.points[i][0].x, this.points[i][0].y);
            ctx.lineTo(this.points[i][1].x, this.points[i][1].x);
            ctx.lineTo(this.points[i][2].x, this.points[i][2].x);
            ctx.restore();
        }
        
        ctx.arc(this.x,this.y, this.circRad, 0, 2*Math.PI);
        ctx.fill();
        
        
    }
};