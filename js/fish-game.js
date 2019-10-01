var canvasWidth = 800;
var canvasHeight = 640;
var fishSpeed = 3;
var fishLength = 100;
var fishHeight = 50;



function setup() {
  createCanvas(canvasWidth, canvasHeight);
  backgroundImg = loadImage('assets/underwater-bg.jpg');
  goldfishPic = loadImage('assets/goldfish-100px.png');
  goldfishPicReversed = loadImage('assets/goldfish-100pxReversed.png');

  //fish objects made for testing
  fish1 = {
    image: goldfishPic,
    xPosition: 0,
    yPosition: 0,
    xSpeedMultiplier: -1,
    ySpeedMultiplier: -1,
    isDead: false,
  };
  fish2 = {
    image: goldfishPic,
    xPosition: 500,
    yPosition: 200,
    xSpeedMultiplier: 1,
    ySpeedMultiplier: -1,
    isDead: true,
  };
  fish3 = {
    image: goldfishPic,
    xPosition: 200,
    yPosition: 500,
    xSpeedMultiplier: -1,
    ySpeedMultiplier: 1,
    isDead: false,
  };

  //TODO: replace Fish with the array used in fish.js
  Fish = [fish1, fish2, fish3];
//change to Fish.all

}

function draw() {
  image(backgroundImg, 0, 0);

  //draw each fish every frame at their x and y positions:
  for (var i = 0; i < Fish.length; i++) {
    image(Fish[i].image, Fish[i].xPosition, Fish[i].yPosition);
  }

  //////////////fish movement:
  for (var i = 0; i < Fish.length; i++) {
    //if fish hits the left or right edge of the screen reverse its direction:
    if (Fish[i].xPosition > (800 - fishLength) || Fish[i].xPosition < 0 && (Fish[i].isDead === false)) {
      Fish[i].xSpeedMultiplier *= -1;
    }
    
    //move fish left or right only if it's not dead
    if ((Fish[i].xSpeedMultiplier === -1) && (Fish[i].isDead === false)) {
      Fish[i].xPosition -= fishSpeed;
      Fish[i].image = loadImage('assets/goldfish-100pxReversed.png');
    } else if ((Fish[i].xSpeedMultiplier === 1) && (Fish[i].isDead === false)) {
      Fish[i].xPosition += fishSpeed;
      Fish[i].image = loadImage('assets/goldfish-100px.png');
    }

    //if fish hits the top or bottom it reverses direction, if it's not dead:
    if ((Fish[i].yPosition > (640 - fishHeight) || Fish[i].yPosition < 0) && Fish[i].isDead === false) {
      Fish[i].ySpeedMultiplier *= -1;
    }

    //move the fish up/down, if it's not dead:
    if ((Fish[i].ySpeedMultiplier === -1) && (Fish[i].isDead === false)) {
      Fish[i].yPosition -= fishSpeed;
    } else if ((Fish[i].ySpeedMultiplier === 1) && (Fish[i].isDead === false)) {
      Fish[i].yPosition += fishSpeed;
    }
    //move the fish up if it is dead:
    if (Fish[i].isDead === true && Fish[i].yPosition > 0) {
      Fish[i].yPosition--;
      //Fish[i].xSpeedMultiplier === 1 ? fishgoingright : fishgoingleft;
    }
  }
}




function mouseClicked() {
  console.log(mouseX, mouseY);
  //check if a fish was clicked on:
  for (var i = 0; i < Fish.length; i++) {
    if (
      mouseX > Fish[i].xPosition &&
      mouseX < (Fish[i].xPosition + fishLength) &&
      mouseY > Fish[i].yPosition &&
      mouseY < (Fish[i].yPosition + fishHeight)) 
      {
        //the clicked on fish is Fish[i]:
        console.log(`you clicked on fish ${Fish[i].image}`);
      }
  }
}