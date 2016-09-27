//bullets, fired by the player.
function bullet(newX, newY) {
    "use strict";
    this.position = new Vector(newX, newY);
    this.velocity = new Vector(0, 0);
    this.direction = new Vector(0, 0);
    
    
}