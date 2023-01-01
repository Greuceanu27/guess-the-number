'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayScore = function (scr) {
  document.querySelector('.score').textContent = scr;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = '#222';
  displayScore(score);
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When no
  if (!guess) {
    displayMessage('⛔ No number!');

    //When Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.body.style.backgroundColor = 'forestgreen';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high ⬆️' : 'Too low ⬇️';
      displayMessage(guess > secretNumber ? 'Too high ⬆️' : 'Too low ⬇️');
      score--;
      displayScore(score);

      //When score goes to 0
    } else {
      displayScore(0);
      displayMessage('😢 You lost the game!');
    }
  }
});
