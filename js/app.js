'use strict';

/**
  Handles most of the game features. Keeps track of most game variables (score,food,money)
*/

//Global Variables

var newEvent = 0;

var gameVariables = {
  money: 10,
  food: 10,
  score: 0,
};

//Used to store the key at which the game information is stored
const storageKey = 'playerScores';

//If there is info load that else create a new game
function setUp () {
  //see if there is a previous save if so load that
  loadGame();

  //Start the game loop
  setInterval(tick, 1000);

}

//Controls the game loop
function tick () {

  hunger();

  if (newEvent >= 30) {

    //Get new event

    newEvent = 0;

  }else {

    newEvent++;

  }

}

//Load any saved data from the system
function loadGame () {

  var savedData = localStorage.getItem(storageKey);

  if (savedData !== null) {
    //load Game variables
    savedData = JSON.parse(savedData);

    //Reasign all variables
    gameVariables.money = savedData.money;
    gameVariables.food = savedData.food;
    gameVariables.day = savedData.day;
    gameVariables.score = savedData.score;

    //load fish
    loadFish();

  } else {

    //Make 2 fish at the start of the game
    newFish();
    newFish();

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

  //need more fish images

  //creat new fish object
  new Fish('../assets/gold_fish.jpg');

}

//Function to handle the different button events
function buyFood () {
  //remove money if there is enough
  //add food
}


//Create a new event and adjust the other various values.

//Function to handle animations
//Need tick value here

//Create a random number MIN MAX Inclusive
function randomNum(max, min = 0) {

  var difference = max - min - 1;

  return Math.round((Math.random() * difference) + min);

}


//One page load either load save data or create a new game
setUp();
