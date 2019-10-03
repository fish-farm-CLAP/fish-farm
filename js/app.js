'use strict';

/**
  Handles most of the game features. Keeps track of most game variables (score,food,money)
*/

//Global Variables

//Get the page elements that display the food/money/score
var scoreDisplay = document.getElementById('scoreArea');
var moneyDisplay = document.getElementById('currentMoney');
var foodDisplay = document.getElementById('currentFood');
var highScoreDisplay = document.getElementById('highScore');
var buyFishButton = document.getElementById('buyFish');
var buyFoodButton = document.getElementById('buyFood');
var eventBar = document.getElementById('eventBar');
var gameHasEnded = false;
var highScore = 0;


//Counter for how many 'ticks' have gone by between events
var newEvent = 0;

//The main game variables. Will be stored localy as the game progresses.
var gameVariables = {
  money: 90,
  food: 10,
  score: 0,
};

// eslint-disable-next-line no-unused-vars
var dead = 0;

//Used to store the key at which the game information is stored
const storageKey = 'playerScores';

//If there is info load that else create a new game
function setUp() {
  //see if there is a previous save if so load that
  loadGame();

  //Start the game loop
  setInterval(tick, 250);
  setInterval(playThemeSong, 0);

}

//Controls the game loop
function tick() {

  if (!gameHasEnded) {

    displayVar();
    checkIfAllFishAreDead();
    fishSpeedUpdater();

    //Make your fish hungry
    hunger();

    //Sees if it is time to sttart a new event.
    if (newEvent >= 120) {

      choiceGeni();
      newEvent = 0;
      eventBar.style.width = 0 + '%';

    } else {

      newEvent++;
      eventBar.style.width = Math.round((newEvent / 120) * 100) + '%';

    }

  }

  gameVariables.score += (Fish.all.length - dead) * 10;

}

//Load any saved data from the system
function loadGame() {

  var savedData = localStorage.getItem(storageKey);

  if (savedData !== null) {

    highScore = parseInt(savedData);

  }
  //Make 2 fish at the start of the game
  newFish();
  newFish();
  newFish();

}

//Save current game to the file system
function saveScore() {
  localStorage.setItem(storageKey, highScore);
}

//Create a new fish either at game start or when the user buys one
function newFish() {

  var rand = randomNum(40);

  if (rand === 1) {
    new Fish('cracker');
  } else if (rand === 2) {
    new Fish('salmon');
  }else {
    new Fish('goldfish');
  }

}

//Function to handle the different button events
function buyFood() {

  displayVar();

  if (gameVariables.money >= 20) {

    gameVariables.food += 10;
    gameVariables.money -= 20;

  } else {

    errorSound.play();
    //Tell the user they are short on cash

  }

}


function buyFish() {

  displayVar();

  if (gameVariables.money >= 50) {

    gameVariables.money -= 50;
    newFish();

  } else {

    errorSound.play();
    //Inform user they are short on cash

  }
}

//Create a random number MIN MAX Inclusive
function randomNum(max, min = 0) {

  var difference = max - min - 1;

  return Math.round((Math.random() * difference) + min);

}

function displayVar() {

  if (!gameHasEnded) {

    scoreDisplay.textContent = `Score: ${gameVariables.score}`;
    moneyDisplay.textContent = `Money: $${gameVariables.money}`;
    foodDisplay.textContent = `Food Reserves: ${gameVariables.food}`;

    if (gameVariables.score >= highScore) {

      highScore = gameVariables.score;

    }

    highScoreDisplay.textContent = `High Score: ${highScore}`;

  }

}

function checkIfAllFishAreDead() {
  var numberOfDeadFish = 0;
  //get the amount of dead fish
  for (var i = 0; i < Fish.all.length; i++) {
    if (Fish.all[i].isDead === true) {
      numberOfDeadFish++;
    }
  }
  dead = numberOfDeadFish;
  //compare the amount to the total number of fish
  if (numberOfDeadFish === Fish.all.length) {
    gameOver();
    gameOverSound.play();
  }
}

function gameOver() {
  gameHasEnded = true;
  saveScore();
  console.log('game over!');
  var gameArea = document.getElementById('gameOver');
  var messageDisplayBox = document.createElement('form');
  gameArea.appendChild(messageDisplayBox);
  var youLose = document.createElement('h6');
  youLose.textContent = 'You have o-fish-ially LOST the game!';
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
