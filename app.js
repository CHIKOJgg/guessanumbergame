'use strict';
let conceivedNum = Math.round(Math.random() * 20);
const restartGame = document.querySelector('.again');
let bestResut = 0;
let score = 20;
const eventHandler = function () {
  const comparisonNumber = Number(
    document.querySelector('.number-input').value
  );
  console.log(comparisonNumber);
  if (comparisonNumber < conceivedNum) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'More';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'You loose';
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (comparisonNumber > conceivedNum) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'more';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'You loose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // else if (comparisonNumber < conceivedNum) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'more';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'You loose';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //WON
  else if (comparisonNumber === conceivedNum) {
    document.querySelector('.guess-message').textContent =
      'You're right';
    document.querySelector('.question').style.backgroundColor = '#39ca00';
    document.querySelector('.question').textContent = conceivedNum;
    if (score > bestResut) {
      bestResut = score;
      document.querySelector('.highscore').textContent = bestResut;
    }
  } else if (comparisonNumber !== conceivedNum) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        comparisonNumber > conceivedNum ? 'more' : 'less';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'You loose';
      document.querySelector('.score').textContent = 0;
    }
  }
};
document.querySelector('.check').addEventListener('click', eventHandler);

restartGame.addEventListener('click', function () {
  conceivedNum = Math.round(Math.random() * 20);
  score = 20;
  document.querySelector('.question').textContent = '???';

  document.querySelector('.guess-message').textContent = 'Start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').textContent = '???';
  document.querySelector('.question').style.backgroundColor = '#fff';
});
