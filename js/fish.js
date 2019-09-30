'use strict';

//The storage key for the fish objects
const fishKey = 'allFish';

//Array to store all fish objects
Fish.all = [];

//Constructor Function
var Fish = function (image) {

  //used in rendering
  this.image = image;
  this.positionX;
  this.positionY;

  this.age = 0;

  Fish.all.push(this);

};

//Increase the Age by 10 each day
Fish.prototype.increaseAge = function () {

  this.age += 10;

};


//Save the fish objects
function saveFish () {

}

//Load the fish objects
function loadFish () {

}