var canvasWidth = 800;
var canvasHeight = 640;
var fishSpeed = 2;
var fishLength = 100;
var fishHeight = 50;



function setup() {
  createCanvas(canvasWidth, canvasHeight);
  backgroundImg = loadImage('https://www.leisurepro.com/blog/wp-content/uploads/2019/03/shutterstock_1174604908-1366x800@2x.jpg');
  goldfishPic = loadImage('assets/goldfish-100px.png');

  //fish objects made for testing
  fish1 = {
    image: goldfishPic,
    xPosition: 0,
    yPosition: 0,
    xSpeedMultiplier: -1,
    ySpeedMultiplier: -1,
  };
  fish2 = {
    image: goldfishPic,
    xPosition: 500,
    yPosition: 200,
    xSpeedMultiplier: 1,
    ySpeedMultiplier: -1,
  };
  fish3 = {
    image: goldfishPic,
    xPosition: 200,
    yPosition: 500,
    xSpeedMultiplier: -1,
    ySpeedMultiplier: 1,
  };

  //TODO: replace allFish with the array used in fish.js
  allFish = [fish1, fish2, fish3];


}

function draw() {
  image(backgroundImg, 0, 0);

  //draw each fish:
  for (var i = 0; i < allFish.length; i++) {
    image(allFish[i].image, allFish[i].xPosition, allFish[i].yPosition);
  }



  //if a fish hits a wall, reverse its speed:
  for (var i = 0; i < allFish.length; i++) {
    ////////////left and right edges:
    if (allFish[i].xPosition > (800 - fishLength) || allFish[i].xPosition < 0) {
      allFish[i].xSpeedMultiplier *= -1;
    }
    if (allFish[i].xSpeedMultiplier === -1) {
      allFish[i].xPosition -= fishSpeed;
    } else {
      allFish[i].xPosition += fishSpeed;
    }
    //////////////top and bottom edges:
    if (allFish[i].yPosition > (640 - fishHeight) || allFish[i].yPosition < 0) {
      allFish[i].ySpeedMultiplier *= -1;
    }
    if (allFish[i].ySpeedMultiplier === -1) {
      allFish[i].yPosition -= fishSpeed;
    } else {
      allFish[i].yPosition += fishSpeed;
    }
  }
}


function mouseClicked() {
  console.log(mouseX, mouseY);
  //check if a fish was clicked on:
  for (var i = 0; i < allFish.length; i++) {
    if (
      mouseX > allFish[i].xPosition &&
      mouseX < (allFish[i].xPosition + fishLength) &&
      mouseY > allFish[i].yPosition &&
      mouseY < (allFish[i].yPosition + fishHeight)) 
      {
        //the clicked on fish is allFish[i]:
        console.log(`you clicked on fish ${allFish[i].image}`);
      }
  }
}
