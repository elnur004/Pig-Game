// Variables for each player, for round score and for current active player
var scores, roundScore, activePlayer, gamePlaying;

init();

var prevDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
     // 1. Random number
    var dice1, dice2, diceDom1, diceDom2;
    dice1 = Math.floor(Math.random() * 6) + 1;  // get random number between 1 and 6
    dice2 = Math.floor(Math.random() * 6) + 1;  // get random number between 1 and 6

    // 2. Display the result
    // First dice
    diceDom1 = document.querySelector('.dice-1');
    diceDom1.style.display = 'block';
    diceDom1.src = 'img/dice-' + dice1 + '.png';  // dynamically changing the dice image referring to the dice number
    
    // Second dice
    diceDom2 = document.querySelector('.dice-2');
    diceDom2.style.display = 'block';
    diceDom2.src = 'img/dice-' + dice2 + '.png';  // dynamically changing the dice image referring to the dice number

    if(dice1 !== 1 && dice2 !== 1) {
        // Add score
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextPlayer();
    }


    // 3. IF prev and last dice were 6 the player lost the entire score
    // if(dice === 6 && prevDice === 6) {
    //     scores[activePlayer] = 0;
    //     document.querySelector('#score-' + activePlayer).textContent = '0';
    //     nextPlayer();
    // } else if(dice !== 1) {  // Update the round score IF the rolled number was NOT a 1
    //     // Add score
    //     roundScore += dice;
    //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
    // } else {
    //      // Next player
    //      nextPlayer();
    //   }
    // }
    // prevDice = dice1;
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add current score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Adding an input value to the input field
    var input = document.getElementById('input').value;
    var winningScore;

    // Undifined, 0, null or '' are COERCED to false
    // Anything else is COERCED to true 
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }

    // Check if player won the game
    if(scores[activePlayer] >= winningScore) {
        hideDice();
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


function hideDice() {
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}


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
    hideDice();
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
   hideDice();

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

