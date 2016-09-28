function Game() {
    'use strict';
    
    this.player = new Ship(300, 300);
        
    this.takeInput = function(e) {
        var code = e.keyCode;
        
        console.log('in');
        
        switch(code) {
        case 32:
            //do spacebar things here!
            break;

        case 37:
            game.player.angle -= 0.02 * Math.PI;
            game.player.direction = new Vector(game.player.circRad * Math.cos(game.player.angle),
                                                       game.player.circRad * Math.sin(game.player.angle));
                
            break;

        case 38:
            //do up arrow things here!
            break;

        case 39:
            game.player.angle += 0.02 * Math.PI;
            game.player.direction = new Vector(game.player.circRad * Math.cos(game.player.angle),
                                                   game.player.circRad * Math.sin(game.player.angle));
            break;

        case 40:
            //do down arrow things here!
            break;
        }
        
    };
    
    this.update = function() {
        ctx.fillStyle = "white";
        
        ctx.fillRect(0, 0, 400, 400);
                
        game.player.draw();
        
        window.requestAnimationFrame(game.update);
    };
    
}