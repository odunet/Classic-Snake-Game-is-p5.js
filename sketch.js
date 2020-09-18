//Declare global variables
let snake;
let resolution = 10;
let food;
let w;
let h;
var fr;

function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);

    w = floor(width/resolution);
    h = floor(height/resolution);

    //initialize snake as snake class
    snake = new Snake();

    //reduce frame rate
    fr = 5
    frameRate(fr);

    //call food function
    foodLocation();
}

//Initialize food location
function foodLocation(){
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x,y);
}

//activate the an event in DOM when key is pressed
function keyPressed(){
    if (keyCode==37){
        snake.setDir(-1,0)
    }else if (keyCode==39){
        snake.setDir(1,0)
    }else if (keyCode==40){
        snake.setDir(0,1)
    }else if(keyCode==38){
        snake.setDir(0,-1)
    }
}

function draw()
{   scale(resolution);
		background(200);

		//If food is eaten create random location for another food
    if (snake.eat(food)){
        foodLocation();
    	}

		//Update snake location and show every frame
    snake.update();
    snake.show();

    //Draw food
     fill(255,0,0);
     noStroke();
     rect(food.x,food.y,1,1);

    //End game, checks to see if head reaches boarder or
    //if head touches any part of body
 if (snake.endGame()){
     background(255,0,0);
     noLoop();
 		}
}
