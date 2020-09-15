// Variables for each player, for round score and for current active player
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Hide the dice when beginning of the game
document.querySelector('.dice').style.display = 'none';

// Set all initial scores to '0'
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    var dice, diceDom;
    dice = Math.floor(Math.random() * 6) + 1;  // get random number between 1 and 6
    
    // 2. Display the result
    diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'img/dice-' + dice + '.png';  // dynamically changing the dice image referring to the dice number
    
    // 3. Update theround score IF the rolled number was NOT a 1
    if(dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextPlayer();
    }
})


document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add current score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if(scores[activePlayer] >= 20) {
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.dice').style.display = 'none';
    } else {
         // Next player
         nextPlayer();
    }
})


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




