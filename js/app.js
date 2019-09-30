'use strict';

/**
  Handles most of the game features. Keeps track of most game variables (score,food,money)
*/

//Global Variables

var gameVariables = {
  money: 10,
  food: 10,
  day: 0,
  score: 0,
},

//Used to store the key at which the game information is stored
const storageKey = 'playerScores';

//If there is info load that else create a new game
function setUp () {
  //see if there is a previous save if so load that
  loadGame();
  //start the next day
  newDay();
}

//Load any saved data from the system
function loadGame () {
  var savedData = localStorage.getItem(storageKey);

  if (savedData !== null) {
    //load Game variables
    savedData = JSON.parse(savedData);

    gameVariables.money = savedData.money;
    gameVariables.food = savedData.food;
    gameVariables.day = savedData.day;
    gameVariables.score = savedData.score;

    //load fish
    loadFish();

  } else {

    //make new starting fish

  }

}

//Save current game to the file system
function saveGame () {
  var dataSaved = JSON.stringify(gameVariables);
  localStorage.setItem(storageKey, dataSaved);
  saveFish();
}

//Create a new fish either at game start or when the user buys one
function newFish () {
  //Get a new fish image

  //creat new fish object
  new Fish('../assets/gold_fish.jpg');

}

//Function to handle the different button events
function buyFood () {
  //remove money if there is enough
  //add food
}

//Function to start a new 'day'
function newDay () {

  dailyUpdate();


}

//Update the game variables each day
function dailyUpdate () {
  gameVariables.day++;

}

//Create a new event and adjust the other various values.

//Function to handle animations
//Need tick value here

//Create a random number MIN MAX Inclusive
function random(max, min = 0) {
  var difference = max - min - 1;
  return (Math.random() * min) + difference;
}


//One page load either load save data or create a new game
setUp();
