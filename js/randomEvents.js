console.log('loaded random events script');
console.log('starteventjs');
// global variables
// var gameVariables = {
//   money: 10,
//   food: 10,
//   score: 0,
// };
var eventRun = document.getElementById('randomEventDiv');
var eventText = document.createElement('p');
eventText.textContent = 'random event';
eventRun.appendChild(eventText);


// aray of randome funtion events


// array witll be chosen at ramdom
console.log('hooked in');
//random source generator from array eventOption in constructor
function choiceGeni(){
  var optionSelect = randomNum(eventOption.length);
  console.log(optionSelect);
  return eventOption[optionSelect]();
}



// funtion will have a name
var tooMuchFood = function() {
  eventText.textContent = 'the lid fell off your feeder and you have overfed you fish and lost food';
  if ( gameVariables.food >= 5 ){
    gameVariables.food -= 4 ;
  }
};


var winFish = function(){
  eventText.textContent = 'you had a lucky throw at a ring toss game and won a new goldfish';
  newFish();
};

var suficate = function(){
  eventText.textContent = 'Your tank had an algie bloom and you lost a fish';
  if (Fish.all.length >= 3){
    Fish.all.splice(0,Fish.all.length / 2) ; // randomgrab of array object

  }
};

var noFood = function(){
  eventText.textContent = 'You forgot to keep an eye on your fishfood and you ran out. All your fish go hungry today';
  for (var i = 0; i < Fish.all.length; i++){
    if (Fish.all[i].saturation >= minSaturation / 2 ){ //if
      Fish.all[i].saturation = minSaturation / 2;
    }
  }
};


var zombie = function(){
  eventText.textContent = 'one of your fish tuned zombie and ate eat the brain of another. your down two fish';
  if (Fish.all.length <= 3){
    for (var i = 0 ; i < Fish.all.length; i++){
      Fish.all.splice(0,2) ;
    }
  }
};


var popExpode = function(){
  eventText.textContent = 'one of your fish laid eggs and now you have 5 baby fish';
  new Fish();
  new Fish();
  new Fish();
  new Fish();
  new Fish();
};


var lameDay = function(){
  eventText.textContent = 'Today was a slow day your fish are happy and healthy';
};

var yourFishCanTalk = function(){
  eventText.textContent = 'your fish started talking and you gained $5 touring the talk cercit';
  if (gameVariables.money <= 1){
    gameVariables.money += 5;
  }
};

var fishShow = function(){
  eventText.textContent = 'your fish took second prize at the fish show, your prze is another unit of fishfood.';
  if (gameVariables.food < 0){
    gameVariables.food++;
  }
};

var kidsWillBe = function(){
  eventText.textContent = 'you held a family friendly party but some of the kids wern\'t so friendly with your fish.  you lost two fish to their gruby little mits ';
  if (Fish.all.length <= 3){
    for (var i = 0 ; i < Fish.all.length; i++){
      Fish.all.splice(0,1) ;
    }
  }
};

var inheritFish = function(){
  eventText.textContent = 'your friend is moving and knows that you will care for their fish and offers them to you';
  new Fish();
  new Fish();
  new Fish();
};

var speedFish = function(){
  eventText.textContent = 'your fish are affected by the new fishfood you are using and now have twice the activity levle';
  if (fishSpeed === 3){
    fishSpeed += 3;
  }
};

var heatWave = function(){
  eventText.textContent = 'you are in the middle of an unpresidented heat wave. you have lost 2 fish and need to buy more to replace them';

  if (Fish.all.saturation >= minSaturation / 2 ){
    Fish.all.saturation = minSaturation / 2;
    buyFish();
    buyFish();
  }
};


var slowDay = function(){
  eventText.textContent = 'even your fish think today was slow.  They have started swiming slower.';
  if (fishSpeed === 3){
    fishSpeed -= 1;
  }
};

var payDay = function(){
  eventText.textContent = 'it\'s payday. you add $100 to your fish tank fund.';
  gameVariables.money += 100;
};

var boughtFish = function(){
  eventText.textContent = 'you couldn\'t resist that fishie in the window, so you bought it';
  gameVariables.money -= 50;
  newFish();
};

var superFood = function(){
  eventText.textContent = ' you bought some super food and your fish love it';
  gameVariables.food ++;
  gameVariables.money -= 10;
  console.log(Fish.all.saturation);
  for (var i = 0; i < Fish.all.length; i++){
    if (Fish.all[i].saturation <= minSaturation / 1 ){
      Fish.all[i].saturation = minSaturation / 1;
    }
  }console.log(Fish.all.saturation);
};

// var  = function(){
// };
var eventOption = [tooMuchFood,heatWave, superFood, payDay, boughtFish , winFish, suficate, lameDay,fishShow,yourFishCanTalk, inheritFish, noFood, zombie, kidsWillBe , speedFish, popExpode];
