'use strict';

// global variables
var food = 0;
var money = 0
var eventRun = document.getElementById ('ramdomEventDiv');
var eventText = document.createElement ('p');
eventRun.appendChild(eventText);


// aray of randome funtion events 
var eventOption = []
// array witll be chosen at ramdom
console.log('hooked in')
//random source generator from array eventOption in constructor
function choiceGeni(){
  var eventSelect = Math.floor(Math.random() * eventOption.length );
  // console.log('eventSelectt', eventSelect);
  return eventSelect;
}
console.log(choiceGeni())


// funtion will have a name 
function tooMuchFood(){
if ( food <= 3){
  food-=2;
 } eventText.textContent = 'the lid fell off your feeder and you have overfed you fish and lost food' 
}
eventOption.push(tooMuchFood()); 



function winFish(){
if (Fish <== 1){
  new Fish();
  }eventText.textContent = 'you had a lucky throw at a ring toss game and won a new goldfish';
}
eventOption.push(winFish());

function suficate(){
  var deadFish = Fish.all[Math.floor(Math.random()*Fish.all.length)];
  deadFish = killAFish();  // randomgrab of array object
  eventText.textContent = 'Your tank had an algie bloom and you lost a fish';
  }
eventOption.push(suficate());

function noFood(){
 if (fish.all.saturation <= 1); // incrament saturation = 0
  fish.all.saturation === 0
 eventText.textContent = 'You forgot to keep an eye on your fishfood and you ran out. All your fish go hungry today';
}
eventOption.push(noFood());


function zombie(){
if (fish.all <= 3);
fish.all-=2;
}else {
  fish.all = 0
eventText.textContent ='one of your fish tuned zombie and ate eat the brain of another. your down two fish';
}
eventOption.push(zombie());

function popExpode(){
  new Fish();
  new Fish();
  new Fish();
  new Fish();
  new fish();
  eventText.textContent = 'one of your fish laid eggs and now you have 5 baby fish';
  }
eventOption.push(popExpode());


function lameDay(){
eventText.textContent = 'Today was a slow day your fish are happy and healthy';
}
eventOption(lameDay());
// each array will have Text what is happening "text "
// what the affect is "incriment counter, exicute other funtions 

// funtion to select random Array

// assigne randome array as text



