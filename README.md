# unit-4-game

Debug/Overview:

-User wins and losses doesn't register with the game
-therefore game reset doesn't run
-essentially game logic is incorrect

Unfortunately this week was very hectic for me in terms of outside work, and I was unable to complete the project as thoroughly as I would have liked to. Aside from the logic being incorrect, the CSS and stylization is completely lacking and I really want to maintain and build on those skills from the beginning of class. I'll do better next week!

Pseudocode:
-set variables for wins, losses, random number, score, random crystal assignments
-for random number: set computer to generate random number between 19-120
-push variables into html
-reset:
new random computerNumber
new hidden values
user score set to 0


-for random crystal assignments: set computer to generate random numbers for the crystals between 1-12
-set on click events for all crystals
-push click results to add together into score variable

-write logic for if userScore is more than computerNumber, user loses
-change losses amount

-if userScore is less than computerNumber, keep playing
-if userScore equals computerNumber, user wins
