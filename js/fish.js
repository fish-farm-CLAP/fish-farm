"use strict";

//The storage key for the fish objects
const fishKey = "allFish";

//Array to store all fish objects

//Constructor Function
var Fish = function(image) {
  //used in rendering
  this.image = image;

  this.positionX;
  this.positionY;

  this.xSpeedMultiplier = -1;
  this.ySpeedMultiplier = -1;

  this.age = 0;
  this.saturation = 300;
  this.hungry = false;

  Fish.all.push(this);
};

Fish.all = [];

//Increase the Age by 10 time fed
Fish.prototype.increaseAge = function() {
  this.age += 10;
};

Fish.prototype.feedFish = function() {
  this.saturation = 300;
  this.hungry = false;
};

//Save the fish objects
function saveFish() {
  var dataToSave = JSON.stringify(Fish.all);
  localStorage.setItem(fishKey, dataToSave);
}

//Load the fish objects
function loadFish() {}

function hunger () {

  for (var i = 0; i < Fish.all.length; i++) {

    Fish.all[i].saturation -= randomNum(12, 8);

    if (Fish.all[i].saturation <= 0) {

      //kill fish

    } else if (Fish.all[i].saturation <= 50) {

      Fish.all[i].hungry = true;

    }

  }

  console.log(Fish.all);

}
