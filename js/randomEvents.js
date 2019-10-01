"use strict";
console.log('starteventjs');
// global variables
// var gameVariables = {
//   money: 10,
//   food: 10,
//   score: 0,
// };
var eventRun = document.getElementById('randomEventDiv');
var eventText = document.createElement('p');
eventText.textContent ='random event'
eventRun.appendChild(eventText);


// aray of randome funtion events
var eventOption = [];
// array witll be chosen at ramdom
console.log('hooked in');
//random source generator from array eventOption in constructor
function choiceGeni(){
  var eventSelect = Math.floor(Math.random() * eventOption.length );
  return eventOption[eventSelect]; // console.log('eventSelectt', eventSelect);

}
// console.log(choiceGeni());


// funtion will have a name
function tooMuchFood(){
  if ( gameVariables.food <= 3){
    gameVariables.food -= 2;
  } eventText.textContent = 'the lid fell off your feeder and you have overfed you fish and lost food';
}
eventOption.push(tooMuchFood);



function winFish(){
  if (Fish.all.length <= 1){
    newFish();
  }eventText.textContent = 'you had a lucky throw at a ring toss game and won a new goldfish';
}
eventOption.push(winFish);

function suficate(){
  if (Fish.all.length <= 3){
    for (var i = 0 ; i < Fish.all.length; i++){
      Fish.all.splice(0,1) ; // randomgrab of array object
    } eventText.textContent = 'Your tank had an algie bloom and you lost a fish';
  }
}
eventOption.push(suficate);

function noFood(){
  for (var i = 0; i < Fish.all.length; i++){
    if (Fish.all[1].saturation <= 50/100 * maxSaturation){ //if 
      Fish.all[1].saturation = 0;
    }
  }
  eventText.textContent = 'You forgot to keep an eye on your fishfood and you ran out. All your fish go hungry today';
}
eventOption.push(noFood);


function zombie(){
  if (Fish.all.length <= 3){
    for (var i = 0 ; i < Fish.all.length; i++){
      Fish.all.splice(0,2) ;
    }
  }
  eventText.textContent = 'one of your fish tuned zombie and ate eat the brain of another. your down two fish';
}

eventOption.push(zombie);

function popExpode(){
  new Fish();
  new Fish();
  new Fish();
  new Fish();
  new Fish();
  eventText.textContent = 'one of your fish laid eggs and now you have 5 baby fish';
}
eventOption.push(popExpode);


function lameDay(){
  eventText.textContent = 'Today was a slow day your fish are happy and healthy';
}
eventOption.push(lameDay);

function yourFishCanTalk(){
  if (gameVariables.money <= 1){
    gameVariables.money += 5;
  } eventText = 'your fish started talking and you gained $5 tuering the talk cercit';
}
eventOption.push(yourFishCanTalk);


function fishShow(){
  if (gameVariables.food < 0){
    gameVariables.food++;
  }eventText = 'your fish took second prize at the fish show, your prze is another unit of fishfood.';
}
eventOption.push(fishShow);

function kidsWillBe(){
  if (Fish.all.length <= 3){
    for (var i = 0 ; i < Fish.all.length; i++){
      Fish.all.splice(0,1) ;
    }eventText = 'you held a family friendly party but some of the kids wern\'t so friendly with your fish.  you lost two fish to their gruby little mits ';
  }
}
eventOption.push(kidsWillBe);
