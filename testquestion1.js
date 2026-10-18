let bird;
let background, birdImg;

function preload(){ 
    background = loadImage("assets/background.png")
    birdImg = loadImage("assets/bird.png")
}


function setup(){
    bird.collider = "static"
    new Canvas(400, 600)
    new Sprite(background)
    bird = new Sprite()
    // write code to create sprite and load bird image on sprite
}


function draw(){
    
    // image(background, 0, 0, width, height);
}

// Creating an array (also known as a list in python) of strings

// let arrayName = [“String A”, “String B”, “String C”];

// How to add another element to the end of an existing array?
// arrayName.push(element);

// How to access an array?
// Example: let arrayName = [“String A”, “String B”, “String C”];
// Arrays are 0-indexed (they start from 0)
// In order to get “String B” from the example, the syntax is arrayName[1]

// How to print in Javascript?
// console.log(<string you want to print>)

// Creating an object (also known as a dictionary in python)
// An object is a collection of key-value pairs stored in a variable
// Syntax to create an object:
// let watermelon = {
//     type: “fruit”
//     price: 2
// }

// How to show text in p5play.js?

// text(“String you want to see”, x position, y position)


// Coordinates in p5play.js

// Top left is (0, 0). x increases as we go to the right, y increases as we go down



// How and when is preload() used in p5play.js?
// It runs once before the project’s other code (setup() and draw()) runs
// By extension, functions within preload() will always finish before setup() and draw()
// Syntax to preload an image onto a bird sprite:
// let birdImg;
// let bird;

// preload() {
//     birdImg = loadImage(<path from your current Javascript folder to the image png>)
// }

// setup() {
//     new Canvas(length, height);
//     bird.img = birdImg;;
// }

// Where and what is setTimeout() used for?
// It schedules a function to run after a specified delay (in milliseconds)
// (1 in the image below) The first argument is the function we want to run after waiting for the delay
// (2 in the image below) The second argument is the delay in milliseconds (/ 1000 to convert into s)

// We used it in flappybird to wait for 3s before restarting the game when we hit a pipe


// What is new Group() used for?
// To keep track of all the sprites of a similar type (like all the fruits in fruit ninja and the pipes in flappy bird)
// We can loop over all of them to and check how sprites there are in the group
// We can remove all of them using <group variable>.removeAll()
// We can control all of them at the same time using the group instead of the individual sprites (e.g. setting attributes like velocity and position on them)

// How to check if sprite A is touching sprite B?
// We can use .collides() to check if 2 sprites are touching
// Syntax from flappy bird:

