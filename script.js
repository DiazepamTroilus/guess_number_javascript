'use strict';
// console.log(dispMessage(// dispMessage('🎉Correct Number');
// console.log(dispMessage(// document.querySe)lector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const dispMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(document.querySelector('.guess').value);
  //when empty or zero
  if (!guess) {
    dispMessage('No Number⛔');
  } //when player wins
  else if (guess === secretNumber) {
    dispMessage('🎉Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      dispMessage(guess < secretNumber ? 'Too low 👇' : 'Too High☝️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dispMessage('💥You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     dispMessage('Too low 👇' );
  //    score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     dispMessage('💥You lost the game)';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     dispMessage('Too High☝️');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     dispMessage('💥You lost the game)';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  dispMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
