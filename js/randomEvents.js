'use strict';
console.log('starteventjs');
// global variables
var gameVariables = {
  money: 10,
  food: 10,
  score: 0,
};
var eventRun = document.getElementById('randomEventDiv');
var eventText = document.createElement('p');
eventText.textContent = 'random event';
eventRun.appendChild(eventText);


// aray of randome funtion events
var eventOption = [tooMuchFood(), winFish(), suficate(), lameDay(),fishShow(), yourFishCanTalk(), inheritFish(), noFood(), zombie(), kidsWillBe(),fishSpeed()];
// array witll be chosen at ramdom
console.log('hooked in');
//random source generator from array eventOption in constructor
function choiceGeni(){
  var eventSelect = Math.floor(Math.random() * eventOption.length );
  return eventOption[eventSelect]; // console.log('eventSelectt', eventSelect);

}



// funtion will have a name
function tooMuchFood(){
} eventText.textContent = 'the lid fell off your feeder and you have overfed you fish and lost food';
if ( gameVariables.food <= 5 ){
  gameVariables.food -= 4 ;
}



function winFish(){
}eventText.textContent = 'you had a lucky throw at a ring toss game and won a new goldfish';
if (Fish.all.length <= 1){
  newFish();
}

function suficate(){
} eventText.textContent = 'Your tank had an algie bloom and you lost a fish';
if (Fish.all.length <= 3){
  for (var i = 0 ; i < Fish.all.length; i++){
    Fish.all.splice(0,1) ; // randomgrab of array object
  }
}


function noFood(){
  eventText.textContent = 'You forgot to keep an eye on your fishfood and you ran out. All your fish go hungry today';
  for (var i = 0; i < Fish.all.length; i++){
    if (Fish.all[1].saturation <= 50 / 100 * maxSaturation){ //if
      Fish.all[1].saturation = 0;
    }
  }
}


function zombie(){
  eventText.textContent = 'one of your fish tuned zombie and ate eat the brain of another. your down two fish';
  if (Fish.all.length <= 3){
    for (var i = 0 ; i < Fish.all.length; i++){
      Fish.all.splice(0,2) ;
    }
  }
}


function popExpode(){
  eventText.textContent = 'one of your fish laid eggs and now you have 5 baby fish';
  new Fish();
  new Fish();
  new Fish();
  new Fish();
  new Fish();
}


function lameDay(){
  eventText.textContent = 'Today was a slow day your fish are happy and healthy';
}

function yourFishCanTalk(){
}eventText.textContent = 'your fish started talking and you gained $5 tuering the talk cercit';
if (gameVariables.money <= 1){
  gameVariables.money += 5;
}


function fishShow(){
}eventText.textContent = 'your fish took second prize at the fish show, your prze is another unit of fishfood.';
if (gameVariables.food < 0){
  gameVariables.food++;
}

function kidsWillBe(){
}eventText.textContent = 'you held a family friendly party but some of the kids wern\'t so friendly with your fish.  you lost two fish to their gruby little mits ';
if (Fish.all.length <= 3){
  for (var i = 0 ; i < Fish.all.length; i++){
    Fish.all.splice(0,1) ;
  }
}


function inheritFish(){
  eventText.textContent = 'your friend is moving and knows that you will care for their fish and offers them to you';
  new Fish();
  new Fish();
  new Fish();
}

function speedfish(){
  eventText.textContent = 'your fish are affected by the new fishfood you are using and now have twice the activity levle';
  if (fishSpeed === 3){
    fishSpeed += 3;
  }
}
