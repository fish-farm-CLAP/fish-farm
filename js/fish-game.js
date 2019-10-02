var canvasWidth = 960;
var canvasHeight = 450;
var fishLength = 100;
var fishHeight = 50;



function setup() {
  createCanvas(canvasWidth, canvasHeight);

  backgroundImg = loadImage('assets/underwater.jpg');
  goldfishPic = loadImage('assets/goldfish-100px.png');
  goldfishPicReversed = loadImage('assets/goldfish-100pxReversed.png');
  goldfishPicDead = loadImage('assets/goldfish-100px-dead.png');
  goldfishPicDeadReversed = loadImage('assets/goldfish-100px-dead-reversed.png');
  goldfishPicHungry = loadImage('assets/goldfish-100px-hungry.png');
  goldfishPicReversedHungry = loadImage('assets/goldfish-100pxReversed-hungry.png');
}

function draw() {
  image(backgroundImg, 0, 0);


  //draw each fish every frame at their x and y positions:
  for (var i = 0; i < Fish.all.length; i++) {
    if (Fish.all[i].image === null) { Fish.all[i].image = goldfishPic; }
    image(Fish.all[i].image, Fish.all[i].xPosition, Fish.all[i].yPosition);
  }

  //////////////fish movement:
  for (var i = 0; i < Fish.all.length; i++) {
    //if fish hits the left or right edge of the screen reverse its direction:
    if (Fish.all[i].xPosition > (960 - fishLength) || Fish.all[i].xPosition < 0 && (Fish.all[i].isDead === false)) {
      Fish.all[i].xSpeedMultiplier *= -1;
    }

    //move fish left or right only if it's not dead
    if ((Fish.all[i].xSpeedMultiplier === -1) && (Fish.all[i].isDead === false)) {
      //draw the fish:
      if (Fish.all[i].hungry === true) {
        Fish.all[i].image = goldfishPicReversedHungry;
      } else {
        Fish.all[i].image = goldfishPicReversed;
      }
      Fish.all[i].xPosition -= Fish.all[i].xSpeed;
    } else if ((Fish.all[i].xSpeedMultiplier === 1) && (Fish.all[i].isDead === false)) {
      //draw the fish:
      if (Fish.all[i].hungry === true) {
        Fish.all[i].image = goldfishPicHungry;
      } else {
        Fish.all[i].image = goldfishPic;
      }
      Fish.all[i].xPosition += Fish.all[i].xSpeed;
    }

    //if fish hits the top or bottom it reverses direction, if it's not dead:
    if ((Fish.all[i].yPosition > (450 - fishHeight) && Fish.all[i].isDead === false)) {
      Fish.all[i].ySpeedMultiplier = -1;
    } else if (( Fish.all[i].yPosition < 0) && Fish.all[i].isDead === false) {
      Fish.all[i].ySpeedMultiplier = 1;
    }

    //move the fish up/down, if it's not dead:
    if ((Fish.all[i].ySpeedMultiplier === -1) && (Fish.all[i].isDead === false)) {
      Fish.all[i].yPosition -= Fish.all[i].ySpeed;
    } else if ((Fish.all[i].ySpeedMultiplier === 1) && (Fish.all[i].isDead === false)) {
      Fish.all[i].yPosition += Fish.all[i].ySpeed;
    }
    //move the fish up if it is dead:
    if (Fish.all[i].isDead === true && Fish.all[i].yPosition > 0) {
      Fish.all[i].yPosition--;
      //dead fish are upside down:
      if (Fish.all[i].xSpeedMultiplier === 1) {
        Fish.all[i].image = goldfishPicDead;
      } else {
        Fish.all[i].image = goldfishPicDeadReversed;
      }
    }
  }
}


function mousePressed() {
  //check if a fish was clicked on:

  for (var i = 0; i < Fish.all.length; i++) {
    if (
      mouseX > Fish.all[i].xPosition &&
      mouseX < (Fish.all[i].xPosition + fishLength) &&
      mouseY > Fish.all[i].yPosition &&
      mouseY < (Fish.all[i].yPosition + fishHeight)) {
      //Fish.all[i] has been clicked on, execute the code below:
      Fish.all[i].feedFish();
      console.log('fed a fish');
    }
  }
  
  //update food/score/money counters
  displayVar();
}