// Variables for each player, for round score, for current active player and for the dice
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;  // get random number between 1 and 6
//console.log(dice);

// Add the dice number to the current player's round score;
document.querySelector('#current-' + activePlayer).textContent = dice;

// Hide the dice when beginning of the game
document.querySelector('.dice').style.display = 'none';




