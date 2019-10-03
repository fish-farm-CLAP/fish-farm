var canvasWidth = 960;
var canvasHeight = 450;
var fishLength = 100;
var fishHeight = 50;

// the different fish types. Stores the different sprites
var goldfish;
var cracker;
var salmon;

var canvasDiv = document.getElementById('canvasDiv');



function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(canvasDiv);
  backgroundImg = loadImage('assets/underwater.jpg');

  goldfish = {
    fishPic: loadImage('assets/goldfish-100px.png'),
    fishPicReversed: loadImage('assets/goldfish-100pxReversed.png'),
    fishHungry: loadImage('assets/goldfish-100px-hungry.png'),
    fishHungryReversed: loadImage('assets/goldfish-100pxReversed-hungry.png'),
    fishDead: loadImage('assets/goldfish-100px-dead.png'),
    fishDeadReversed: loadImage('assets/goldfish-100px-dead-reversed.png'),
  };

  cracker = {
    fishPic: loadImage('assets/cracker.png'),
    fishPicReversed: loadImage('assets/cracker-Reversed.png'),
    fishHungry: loadImage('assets/cracker-Hungry.png'),
    fishHungryReversed: loadImage('assets/cracker-Hungry-Reversed.png'),
    fishDead: loadImage('assets/cracker-Dead.png'),
    fishDeadReversed: loadImage('assets/cracker-Dead-Reversed.png'),
  };

  salmon = {
    fishPic: loadImage('assets/salmon.png'),
    fishPicReversed: loadImage('assets/salmon-Reversed.png'),
    fishHungry: loadImage('assets/salmon-hungry.png'),
    fishHungryReversed: loadImage('assets/salmon-hungry-Reversed.png'),
    fishDead: loadImage('assets/salmon-dead.png'),
    fishDeadReversed: loadImage('assets/salmon-dead-Reversed.png'),
  };

}

function draw() {
  image(backgroundImg, 0, 0);


  //draw each fish every frame at their x and y positions:
  for (var i = 0; i < Fish.all.length; i++) {
    if (typeof(Fish.all[i].fishType) === 'string') {
      if (Fish.all[i].fishType === 'cracker') {
        Fish.all[i].fishType = cracker;
      } else if (Fish.all[i].fishType === 'goldfish') {
        Fish.all[i].fishType = goldfish;
      } else if (Fish.all[i].fishType === 'salmon') {
        Fish.all[i].fishType = salmon;
      } else {
        Fish.all[i].fishType = goldfish;
      }
    }
    if (Fish.all[i].image === null) { 
      Fish.all[i].image = Fish.all[i].fishType.fishPic;
    }
    image(Fish.all[i].image, Fish.all[i].xPosition, Fish.all[i].yPosition);
  }

  //////////////fish movement:
  for (var i = 0; i < Fish.all.length; i++) {
    var currentFish = Fish.all[i];
    //if fish hits the left or right edge of the screen reverse its direction:
    if (currentFish.xPosition > (960 - fishLength) && (currentFish.isDead === false)) {
      currentFish.xSpeedMultiplier = -1;
    } else if (currentFish.xPosition < 0 && (currentFish.isDead === false)) {
      currentFish.xSpeedMultiplier = 1;
    }

    //move fish left or right only if it's not dead
    if ((currentFish.xSpeedMultiplier === -1) && (currentFish.isDead === false)) {
      //draw the fish:
      if (currentFish.hungry === true) {
        currentFish.image = currentFish.fishType.fishHungryReversed;
      } else {
        currentFish.image = currentFish.fishType.fishPicReversed;
      }
      currentFish.xPosition -= currentFish.xSpeed;
    } else if ((currentFish.xSpeedMultiplier === 1) && (currentFish.isDead === false)) {
      //draw the fish:
      if (currentFish.hungry === true) {
        currentFish.image = currentFish.fishType.fishHungry;
      } else {
        currentFish.image = currentFish.fishType.fishPic;
      }
      currentFish.xPosition += currentFish.xSpeed;
    }

    //if fish hits the top or bottom it reverses direction, if it's not dead:
    if ((currentFish.yPosition > (450 - fishHeight) && currentFish.isDead === false)) {
      currentFish.ySpeedMultiplier = -1;
    } else if ((currentFish.yPosition < 0) && currentFish.isDead === false) {
      currentFish.ySpeedMultiplier = 1;
    }

    //move the fish up/down, if it's not dead:
    if ((currentFish.ySpeedMultiplier === -1) && (currentFish.isDead === false)) {
      currentFish.yPosition -= currentFish.ySpeed;
    } else if ((currentFish.ySpeedMultiplier === 1) && (currentFish.isDead === false)) {
      currentFish.yPosition += currentFish.ySpeed;
    }
    //move the fish up if it is dead:
    if (currentFish.isDead === true && currentFish.yPosition > 0) {
      currentFish.yPosition--;
      //dead fish are upside down:
      if (currentFish.xSpeedMultiplier === 1) {
        currentFish.image = currentFish.fishType.fishDead;
      } else {
        currentFish.image = currentFish.fishType.fishDeadReversed;
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