"use strict"
function ship(newX, newY) {
    this.position = new Vector(newX, newY);
    this.velocity = new Vector(0, 0);
    this.direction = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    
    
};