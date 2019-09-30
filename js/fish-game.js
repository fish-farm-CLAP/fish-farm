function setup() {
  createCanvas(800, 640);
  backgroundImg = loadImage('https://www.leisurepro.com/blog/wp-content/uploads/2019/03/shutterstock_1174604908-1366x800@2x.jpg');
  fishPic = loadImage('assets/gold_fish.jpg');
  fish1 = {
    image: fishPic,
    xPosition: 0,
    yPosition: 0,
  };
}

function draw() {
  image(backgroundImg, 110, 110);
  rect(mouseX, mouseY, 10, 10);
  image(fish1.image, fish1.xPosition, fish1.yPosition);
  fish1.yPosition += 0.4;
  fish1.xPosition += 0.5;

}


//TODO:
//fix background image size/placement
//fix fish size
//make fish bounce off the edges of the screen
//make addition/removal of fish work with constructor function
//    add a function inside draw that draws/tracks a fish for each fish in allFish array?