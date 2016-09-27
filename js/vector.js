// 2D vector class object for further use in js.
// Assuming initial point is the origin
// for use only with translations
function Vector(x, y) {
    "use strict";
    //standard x and y coordinates.
    this.x = x;
    this.y = y;
    
    //Returns magnitude
    this.magnitude = function() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    
    //Returns direction (in rads)
    this.direction = function() {
        return Math.atan((this.x / this.y));
    };
    
    //Add two vectors
    this.addVec = function(otherVec) {
        return new Vector(this.x + otherVec.x, this.y + otherVec.y);
    };
    
    //Subtract two vectors
    this.subVec = function(otherVec) {
        return new Vector(this.x - otherVec.x, this.y + otherVec.y);
    };
    
    //Multiply vector and scalar
    this.multScalar = function(multInt) {
        return new Vector(this.x * multInt, this.y * multInt);
    };
    
    //dot product
    this.dot = function(dotVec) {
        return ((this.x * dotVec.x) + (this.y * dotVec.y));
    };

};