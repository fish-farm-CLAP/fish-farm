'use strict';

/**
  Handles most of the game features. Keeps track of most game variables (score,food,money)
*/

//Global Variables

//Get the page elements that display the food/money/score
var scoreDisplay = document.getElementById('scoreArea');
var moneyDisplay = document.getElementById('currentMoney');
var foodDisplay = document.getElementById('currentFood');
var buyFishButton = document.getElementById('buyFish');
var buyFoodButton = document.getElementById('buyFood');
var gameHasEnded = false;


//Counter for how many 'ticks' have gone by between events
var newEvent = 0;

//The main game variables. Will be stored localy as the game progresses.
var gameVariables = {
  money: 140,
  food: 10,
  score: 0,
};

//Used to store the key at which the game information is stored
const storageKey = 'playerScores';

//If there is info load that else create a new game
function setUp() {
  //see if there is a previous save if so load that
  loadGame();

  //Start the game loop
  setInterval(tick, 250);

}

//Controls the game loop
function tick() {

  if (!gameHasEnded) {
    displayVar();
    checkIfAllFishAreDead();

    //Make your fish hungry
    hunger();
    //Sees if it is time to sttart a new event.
    if (newEvent >= 120) {
      choiceGeni();
      newEvent = 0;
    } else {
      newEvent++;
    }

  }

  gameVariables.score += Fish.all.length*10;

}

//Load any saved data from the system
function loadGame() {

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
function saveGame() {

  var dataSaved = JSON.stringify(gameVariables);
  localStorage.setItem(storageKey, dataSaved);

  saveFish();

}

//Create a new fish either at game start or when the user buys one
function newFish() {
  //Get a new fish image
  //var randomIndex = randomNum(images.length);
  //need more fish images

  //creat new fish object
  new Fish();

}

//Function to handle the different button events
function buyFood() {

  displayVar();

  if (gameVariables.money >= 20) {

    gameVariables.food += 10;
    gameVariables.money -= 20;

  } else {

    //Tell the user they are short on cash

  }

}


function buyFish() {

  displayVar();

  if (gameVariables.money >= 50) {

    gameVariables.money -= 50;
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

function displayVar() {

  scoreDisplay.textContent = `Score: ${gameVariables.score}`;
  moneyDisplay.textContent = `Money: $${gameVariables.money}`;
  foodDisplay.textContent = `Food Reserves: ${gameVariables.food}`;

}

function checkIfAllFishAreDead() {
  var numberOfDeadFish = 0;
  //get the amount of dead fish
  for (var i = 0; i < Fish.all.length; i++) {
    if (Fish.all[i].isDead === true) {
      numberOfDeadFish++;
    }
  }
  //compare the amount to the total number of fish
  if (numberOfDeadFish === Fish.all.length) {
    gameOver();
  }
}

function gameOver() {
  gameHasEnded = true;
  console.log('game over!');
  var gameArea = document.getElementById('gameOver');
  var messageDisplayBox = document.createElement('form');
  gameArea.appendChild(messageDisplayBox);
  var youLose = document.createElement('h6');
  youLose.textContent = 'You have o-fish-ally LOST the game!';
  messageDisplayBox.appendChild(youLose);
  //Remove the buy buttons
  buyFishButton.removeEventListener('click', buyFish);
  buyFoodButton.removeEventListener('click', buyFood);
  //need to add a "start new game" button
  var newGameButton = document.createElement('input');
  messageDisplayBox.appendChild(newGameButton);
  newGameButton.setAttribute('value', 'New Game');
  newGameButton.setAttribute('type', 'submit');
  newGameButton.addEventListener('submit', newGame);
}

function newGame() {
  console.log('newGame button clicked');
  //set all game vars to their defaults, remove the html made by gameOver, etc
  document.location.reload();
}

buyFishButton.addEventListener('click', buyFish);
buyFoodButton.addEventListener('click', buyFood);

//One page load either load save data or create a new game
setUp();
