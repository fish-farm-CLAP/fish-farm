

Scope:

IN: 	
	1. The web app will show moving fish on the page.
	2. Dynamic events will occur to keep the game interesting.
	3. There will be user input to affect the animation of the fish tank and the value of gameplay variables.
	4. The user's progress in the game will be saved in local storage.
OUT: 
	1. There will not be any kind of multiplayer.


MVP:
	A play-space on the game page that has moving fish, buttons that change variables for number of fish, amount of fish food, and amount of money, a button to progress to the next day, a score counter, a day counter, and random events that affect the variables every time the 'next day' button is pressed.


Stretch Goals:
	1. Add more random events.
	2. Add different images for the fish.
	3. Make our animations better.
	4. Add sound effects.
	5. Add more variables like fish age.


Functional Requirements:
	1. The user can progress through the game by pressing a button.
	2. The button triggers a function to update the game.


Data Flow:
	1. User enters the site.
	2. User goes to home page from game page.
	3. Game function fires on load of the game page.
		a. Checks for local storage
		b. Starts new game or resumes old game
	4. The game ends when a loss condition is met (no fish).
	5. The user can go the about me or home page or game page from any page.
