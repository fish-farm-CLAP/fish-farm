"use strict";

//The storage key for the fish objects
const fishKey = "allFish";

//Array to store all fish objects

var maxSaturation = 600;
var minSaturation = 400;

//Constructor Function
var Fish = function () {
  //used in rendering
  this.image = null;

  this.xPosition = randomNum(850, 10);
  this.yPosition = randomNum(395, 30);

  this.xSpeed = 3;
  this.ySpeed = 3;
  this.xSpeedMultiplier = -1;
  this.ySpeedMultiplier = -1;

  this.fed = 0;
  this.saturation = randomNum(maxSaturation, minSaturation);
  this.hungry = false;
  this.isDead = false;

  Fish.all.push(this);
};

//Array of all fish objects
Fish.all = [];

//Increase the Age by 10 time fed
Fish.prototype.timesFed = function () {
  this.fed++;
  if (this.fed % 3 === 0) {
    gameVariables.money += 10;
  }
};

//Reset the saturation level of the fish
Fish.prototype.feedFish = function () {

  if (gameVariables.food > 0 && this.hungry) {

    this.saturation = randomNum(maxSaturation, minSaturation);
    this.hungry = false;
    gameVariables.food--;
    this.timesFed();

  } else if (gameVariables.food === 0) {

    //alert that they are out of food

  } else if (!this.hungry) {

    //This fish is not yet hungry

  }

};


Fish.prototype.fishSpeedChanger = function () {
  var chance = Math.random();
  if (chance < 0.2 && this.xSpeed < 10 + dead) {
    this.xSpeed++;
  } else if (chance > 0.8 && this.xSpeed > 1 + dead) {
    this.xSpeed--;
  }
  chance = Math.random();
  if (chance < 0.2 && this.ySpeed < 6 + dead) {
    this.ySpeed++;
  } else if (chance > 0.8 && this.ySpeed > 1 + dead) {
    this.ySpeed--;
  }
  chance = Math.random();
  if (chance < 0.05) {
    this.xSpeedMultiplier *= -1;
  }
  chance = Math.random();
  if (chance < 0.05) {
    this.ySpeedMultiplier *= -1;
  }

}

function fishSpeedUpdater() {
  for (var i = 0; i < Fish.all.length; i++) {
    Fish.all[i].fishSpeedChanger();
  }
}


function killFish(index) {

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

function hunger() {

  for (var i = 0; i < Fish.all.length; i++) {

    Fish.all[i].saturation -= randomNum(20);

    if (Fish.all[i].saturation <= 0) {
      killFish(i);
    } else if (Fish.all[i].saturation <= minSaturation / 2) {
      Fish.all[i].hungry = true;
    } else  {
      Fish.all[i].hungry = false;
    }
  }

}
