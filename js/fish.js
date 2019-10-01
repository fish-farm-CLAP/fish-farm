"use strict";

//The storage key for the fish objects
const fishKey = "allFish";

//Array to store all fish objects

var maxSaturation = 700;
var minSaturation = 500;

//Constructor Function
var Fish = function(image) {
  //used in rendering
  this.image = image;

  this.positionX;
  this.positionY;

  this.xSpeedMultiplier = -1;
  this.ySpeedMultiplier = -1;

  this.age = 0;
  this.saturation = randomNum(maxSaturation, minSaturation);
  this.hungry = false;
  this.isDead = false;

  Fish.all.push(this);
};

//Array of all fish objects
Fish.all = [];

//Increase the Age by 10 time fed
Fish.prototype.increaseAge = function () {
  this.age += 10;
};

//Reset the saturation level of the fish
Fish.prototype.feedFish = function () {

  if (gameVariables.food > 0 && this.hungry) {

    this.saturation = randomNum(maxSaturation, minSaturation);
    this.hungry = false;
    gameVariables.food--;

  } else if (gameVariables.food === 0) {

    //alert that they are out of food

  } else if (!this.hungry) {

    //This fish is not yet hungry

  }

};

function killFish (index) {

  //Fish.all.splice(index, 1);
  Fish.all[index].isDead = true;

}

//Save the fish objects
function saveFish() {

  var dataToSave = JSON.stringify(Fish.all);
  localStorage.setItem(fishKey, dataToSave);

}

//Load the fish objects
function loadFish() {

  var saveData = JSON.parse(localStorage.getItem(fishKey));

  for (var i = 0; i < saveData.length; i++) {

    new Fish(saveData[i].image);

  }

  localStorage.removeItem(fishKey);

}

function hunger () {

  for (var i = 0; i < Fish.all.length; i++) {

    Fish.all[i].saturation -= randomNum(20);

    if (Fish.all[i].saturation <= 0) {

      killFish(i);
      i--;

    } else if (Fish.all[i].saturation <= minSaturation / 2) {

      Fish.all[i].hungry = true;

    }

  }

}
