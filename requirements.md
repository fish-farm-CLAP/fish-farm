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
	The home page links to the game page, a game rules page, and an About Us page. The game page has a score counter that updates periodically during the game, a canvas that shows moving images of fish for each fish that is alive. 
	Each fish has a corresponding button to feed it, and 'hunger' property that is periodically decreased. At 50%, the fish is "hungry" and its button turns red. Clicking the button feeds the fish and resets its 'hunger' property, and subtracts one food. If the fish isn't fed before its 'hunger' property reaches 0, it dies and the button is removed. 
	Throughout the game, each fish will earn the player money which can be used to buy more fish or buy more food. A setInterval function gives the player a certain amount of money based on how many fish are alive and the 'age' of the fish. The age of each fish is incremented when it is fed.
	The game gets progressively more difficult using a variety of functions which can do things like increase the cost of food, kill a random fish, or make fish get hungry faster. These functions are stored in an array, and a function in that array gets called on a setInterval function.
	If all fish are dead, the game ends.


Stretch Goals:  
	1. Add more random events.  
	2. Add different images for the fish.  
	3. Make our animations better. 
	4. Add sound effects. 
	5. Make the fish clickable, instead of using buttons.

Functional Requirements:  
	1. The player can start a new game or resume on from localStorage.
	2. There is a button for each fish, which can only be clicked on if the user has >0 food.
	3. The fish periodically get hungry and die if not fed.
	4. The feed-fish button resets the timer that makes a fish hungry.
	5. The player's money increases over time depending on the fish and their age.
	6. The player can buy fish or fish food with the money.
	7. The game gets more difficult over time.
	8. There is a score which increases as the player plays the game.


Data Flow:  
	1. User enters the site. There are links to "new game" "resume game" "about us" or "rules".
	2. User either clicks "new game" or "resume game" button on home page.
	3. Game function fires on load of the game page.  
		a. Checks for local storage  
		b. Starts new game or resumes old game using data from local storage
	4. The player tries to keep their fish fed while the game gets more difficult.
	5. When all fish die, the player sees their score.
