//bullets, fired by the player.
"use strict"
function bullet(newX, newY) {
    this.position = new Vector(newX, newY);
    this.velocity = new Vector(0, 0);
    this.direction = new Vector(0, 0);
    
    
};