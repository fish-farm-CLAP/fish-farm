[Read Me](./README.md)

Scope:
	IN: 	
		1. The web app will show moving fish on the page.  
		2. Dynamic events will occur to keep the game interesting.  
		3. There will be user input in the form of buttons/event handlers.  
		4. The user's progress in the game will be saved in local storage.  
	OUT: 
		1. There will not be any kind of multiplayer.  


MVP:  
	The home page links to the game page and an About Us page. The game page has a score counter that updates periodically during the game, and a canvas that shows moving images of fish for each fish that is alive. 
	Each fish can be clicked on to feed it, and has a 'hunger' property that is periodically decreased. At 50%, the fish is "hungry" and it changes color. Clicking the fish feeds it and resets its 'hunger' property, and subtracts one food. If the fish isn't fed before its 'hunger' property reaches 0, it dies and the button is removed. 
	Throughout the game, each fish will earn the player money which can be used to buy more fish or buy more food. The game gets progressively more difficult using a variety of functions which can do things like increase the cost of food, kill random fish, modify fish speed, or make fish get hungry faster. These functions are stored in an array, and a function in that array gets called on a setInterval function.
	If all fish are dead, the game ends and the high score is updated if the current score exceeds it.


Stretch Goals:  
	1. Add more random events.  
	2. Add different images for the fish.  
	3. Make our animations better. 
	4. Add sound effects. 
	5. Make the fish clickable, instead of using buttons.

Functional Requirements:  
	1. Fish change color to show if they are healthy, hungry, or dead.
	2. There are moving fish that can be clicked on to trigger functions.
	3. The fish periodically get hungry and die if not fed.
	4. The player can buy fish or fish food with the money.
	5. The game gets more difficult over time.
	6. There is a score which increases as the player plays the game.


Data Flow:  
	1. User enters the site. There are links to "new game" or "about us".
	2. User clicks "new game" button on home page.
	3. Game function fires on load of the game page.
	4. The player tries to keep their fish fed while the game gets more difficult.
	5. When all fish die, the game ends, and the player can click a 'restart' button.
