'use strict';
/*collision detection:

get the image data for where the item is going to be, with offset being the number of pixels it'll move and snapWidth and snapHeight being the dimensions of the item.


ctx.getImageData(thingX + offset, thingY + offset, snapWidth, snapHeight);

Length of the clip is snapWidth * snapHeight, because the above will create an array of color elements,
storing the rgba values for each pixel

You can then loop through the array in increments of 4 to check color values, and if something corresponds to 
a color you want, do a thing!


*/

function detectCollisions(detThing, offset, snapWidth, snapHeight, snap) {
    for(var i = 0; i < snapWidth * snapHeight * 4; i += 4) {
            
        if(snap[i] == '0' && snap[i+1] == '0' && snap[i+2] == '0') {
            //dostuff if colliding with black!
        }
        
        /*else
        if(othercolors)
        {
        
        }
        
        etc.
        */
            
    }
}