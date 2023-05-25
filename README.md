# Rock Paper Scissors with GUI

This is my first Project working with Code from a colleague.
The point of this project was to use his basecode for the game and build a GUI around it.

First is the init function()

This function enables the icons to listen to a click event.
If the Player clicks the icon of choice this will start the playRound function and hand over the choice made by the player to the playRound function.

The playRound function() has multiple uses.

First it adds an icon to the scoreboard that shows what choice the Computer randomly made.
Then it will check what choices have been made and who wins the round based on those choices. Depending on who wins it will also give a point to the winner.
And lastly if the player or computer reaches 5 points it will put out a message that includes who won and whats the end-score.

And last we have a click event for the reset button which will trigger the resetFunc().

This Function resets all the score counts, the icon that resemble the computer choices and the winning message to the starting ones.
