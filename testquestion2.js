let square;

function setup(){
    new Canvas(400, 600);
   
    // code to set the gravity of the world
    world.gravity.y = 2
    // code to create a new square sprite
    square = new Sprite()
}

function draw(){
    background("grey");
    if (mouse.presses()) {
        square.vel.y = -2
    }




    // code to check if mouse is pressed i.e. mouse.presses()
        // if mouse is pressed, the square sprite "flies" up
}