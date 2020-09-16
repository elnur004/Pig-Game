
/*
CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
   (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, 
   so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. 
   This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1.
   (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


// Variables for each player, for round score and for current active player
var scores, roundScore, activePlayer, gamePlaying;

init();

var prevDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
     // 1. Random number
    var dice, diceDom;
    dice = Math.floor(Math.random() * 6) + 1;  // get random number between 1 and 6

    // 2. Display the result
    diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'img/dice-' + dice + '.png';  // dynamically changing the dice image referring to the dice number

    // 3. IF prev and last dice were 6 the player lost the entire score
    if(dice === 6 && prevDice === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    } else if(dice !== 1) {  // Update the round score IF the rolled number was NOT a 1
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
         // Next player
         nextPlayer();
      }
    }
    prevDice = dice;
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add current score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if(scores[activePlayer] >= 100) {
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        gamePlaying = false;
    } else {
         // Next player
         nextPlayer();
    }
    }
});


// Function for the next player (created for the Don't Repeat Yourself principle)
function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    // Set the score to '0'
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Toggling of the active player's pointer
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // Hide the dice again
    document.querySelector('.dice').style.display = 'none';
}

// For restart the game
document.querySelector('.btn-new').addEventListener('click', init);

// Function for to initialize the game 
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // Hide the dice when beginning of the game
    document.querySelector('.dice').style.display = 'none';

    // Set all initial scores to '0'
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
