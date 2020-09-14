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
    

})







// Add the dice number to the current player's round score;
//document.querySelector('#current-' + activePlayer).textContent = dice;
