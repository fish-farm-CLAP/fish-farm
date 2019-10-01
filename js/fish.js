"use strict";

//The storage key for the fish objects
const fishKey = "allFish";

//Array to store all fish objects

var maxSaturation = 600;

//Constructor Function
var Fish = function(image) {
  //used in rendering
  this.image = image;

  this.positionX;
  this.positionY;

  this.xSpeedMultiplier = -1;
  this.ySpeedMultiplier = -1;

  this.age = 0;
  this.saturation = randomNum(maxSaturation + 100, maxSaturation - 100);
  this.hungry = false;

  Fish.all.push(this);
};

Fish.all = [];

//Increase the Age by 10 time fed
Fish.prototype.increaseAge = function() {
  this.age += 10;
};

//Reset the saturation level of the fish
Fish.prototype.feedFish = function() {

  this.saturation = randomNum(maxSaturation + 100, maxSaturation - 100);
  this.hungry = false;

};

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

}

function hunger () {

  for (var i = 0; i < Fish.all.length; i++) {

    Fish.all[i].saturation -= randomNum(15, 5);

    if (Fish.all[i].saturation <= 0) {

      //kill fish

    } else if (Fish.all[i].saturation <= maxSaturation / 2) {

      Fish.all[i].hungry = true;

    }

  }

}
