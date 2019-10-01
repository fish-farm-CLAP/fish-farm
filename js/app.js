'use strict';

/**
  Handles most of the game features. Keeps track of most game variables (score,food,money)
*/

//Global Variables

//Image array
var images = ['gold_fish.jpg'];

//Counter for how many 'ticks' have gone by between events
var newEvent = 0;

//The main game variables. Will be stored localy as the game progresses.
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

  //Make your fish hungey
  hunger();

  //Sees if it is time to sttart a new event.
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

    localStorage.removeItem(storageKey);

  } else {

    //Make 2 fish at the start of the game
    new Fish();
    new Fish();

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
  var randomIndex = randomNum(images.length);
  //need more fish images

  //creat new fish object
  new Fish(`../assets/${images[randomIndex]}`);

}

//Function to handle the different button events
function buyFood () {

  if (gameVariables.money >= 30) {

    gameVariables.food += 15;
    gameVariables.money -= 30;

  } else {

    //Tell the user they are short on cash

  }

}


function buyFish () {

  if (gameVariables.money >= 100) {

    gameVariables.money -= 100;
    new Fish();

  } else {

    //Inform user they are short on cash

  }
}

//Create a random number MIN MAX Inclusive
function randomNum(max, min = 0) {

  var difference = max - min - 1;

  return Math.round((Math.random() * difference) + min);

}

//One page load either load save data or create a new game
setUp();
