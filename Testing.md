<p align="center"> 
<img src="https://github.com/cfaulkner985/premier-league-memory-game/blob/master/assets/img/memory-game-logo.jpg">
</p>

# Testing

## Client stories
*	As a visitor to the website I want to see the logo of the game and a description on how to play it etc.
    *	The user will see that when the website loads up the first thing they will see will be the logo and a brief deception on how to use the site.
<p align="center"> 
<img src="https://github.com/cfaulkner985/premier-league-memory-game/blob/master/testing/logo-description.png">
</p>
    
*	As a visitor to the website I want to see that the grid has loaded properly which will display 16 playing cards. There will be 8 different badges 2 from each team behind each playing card.
    *	The user will see when they scroll down the page there will be a 4 x 4 grid with 16 identical cards. When the user start clicking on the cards they will see that there will be 16 badges on the other side of the playing cards (2 from each team).
<p align="center"> 
<img src="https://github.com/cfaulkner985/premier-league-memory-game/blob/master/testing/finished-grid.png">
</p>

*	As a visitor to the website I want to make sure that the grid is randomize so the game is the way it is supposed to be
    *	The user will see that all of the cards are the same so it will be hard to know they are ranomized with actually playing the game. But I did a test by changing the colour of the back of the cards which shows that the cards so ranomize
<p align="center"> 
<img src="https://github.com/cfaulkner985/premier-league-memory-game/blob/master/testing/random-grid.png">
</p>

*	As a visitor to the website when 2 badges are selected I should be updated if they are a match or not. If they are a match they will turn keep turned over to the badge and stay on the page. If they are not a match they will turn back to the card.
    *	When the user matches 2 cards they will see that they stay turned over to show they have found a match. When the user doesn’t find a match they will see that they will turn back over to their original position. 
<p align="center"> 
<img src="https://github.com/cfaulkner985/premier-league-memory-game/blob/master/testing/correct-match.png">
</p>

*	As a visitor to the website I want to click on the ‘Start Game’ button and see if the timer starts counting. 
    *	The user will see that when they click on the ‘Start Game’ button the time will start from 0 and start counting upwards.
<p align="center"> 
<img src="https://github.com/cfaulkner985/premier-league-memory-game/blob/master/testing/timer-working.png">
</p>

*	As a visitor to the website I want to click on the ‘Start Game’ and complete the game before the time runs out to see how many matches I got and what message appears
    * The user will see that when they click on the ‘Start Game’ and complete the game before 60 seconds they will see a message of ‘Congratulations you got all 8 matches’
<p align="center"> 
<img src="https://github.com/cfaulkner985/premier-league-memory-game/blob/master/testing/completed-game.png">
</p>

*	As a visitor to the website I want to click on the ‘Start Game’ and not complete the game before the time runs out to see how many matches I got and what message appears
    * The user will see that when they click on the ‘Start Game’ and not complete the game before 60 seconds they will see a message of ‘Time's up! You got (number of correct matches) matches"
<p align="center"> 
<img src="https://github.com/cfaulkner985/premier-league-memory-game/blob/master/testing/times-up.png">
</p>

*	As a returning visitor to the website I want to see if the game is still running correctly as if any new features have been added.
    * The user will see that the game is still running as in should be and any future updates will be displayed at the bottom of this page.

## Fixed Issues
*	The logo of the game loads correctly and scales correctly when I view it on different devices
*	The description of the game loads correctly and scales correctly when I view it on different devices.
*	The grid of all 16 cards loads correctly and scales correctly when I view it on different devices.
*	If I get a match they stay turned over to the badge as expected.
*	If I don’t get a match they turn back over to the card view as expected.
*	I changed the colour of the cards to see if they actually do randomize on loading the page and they do randomize as expected. I only changed colour for this test and changed them all back to red. 
*	Clicking on a card before the game starts does not flip over a card which is the way I expected this to work.
*	I clicked on every card and they are all turning over as expected in a randomize order
*	When I clicked on the ‘Start Game’ button the timer starts counting as expected.
*	When I match all badges before the 60 seconds I get the message “"Congratulations you got all 8 matches" as this is what I expected to happen 
*	If I match 1-7 pairs when the time runs out I get the message “"Time's up! You got (No. of matches 1-7) matches which is what expected.
* The grid refreshes to its originasl state after completed game or timwer runs out.


## Pending Issues
*	When finishing the game with all matches the last card does not turn over as expected and this would be something I would have to look at in the future.


## Validation
I have used the W3C validators to make sure my HTML and CSS codes have no errors. The links for these can be found below:
- W3C CSS validation (https://jigsaw.w3.org/css-validator/) 
- W3C Markup Validation (https://validator.w3.org/)
- I also used (https://esprima.org/demo/validate.html) to validate there was no errors on the JavaScript file.

## Further Testing
*	I checked the website on different devices and from different locations and looks good.
*	I asked friend and family to check the website and let me know if there was anything they would to improve. They suggested that fix the refresh issue and maybe a rating at the end.
*	I have tested all pages on the following devices:
    * Desktop - Chrome (Version 83.0.4103.61), Firefox Version 76.0.1), Internet Explorer (Version 11)
    * Galaxy S5
    * Pixel 2
    * IPhone X
    * IPad
    * IPad Pro

All pages are aligned and look good on all these devices.
