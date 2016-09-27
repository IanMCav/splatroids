/*collision detection:

get the image data for where the item is going to be, with offset being the number of pixels it'll move and snapWidth and snapHeight being the dimensions of the item.


ctx.getImageData(thingX + offset, thingY + offset, snapWidth, snapHeight);

Length of the clip is snapWidth * snapHeight, because the above will create an array of color elements,
storing the rgba values for each pixel

You can then loop through the array in increments of 4 to check color values, and if something corresponds to 
a color you want, do a thing!


*/