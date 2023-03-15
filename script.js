'use strict';
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const resetBtn = document.querySelector('.btn--new');
let randomNum = 0;
let player0CurrentScore = 0;
let player0MainScore = 0;
let player1CurrentScore = 0;
let player1MainScore = 0;
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// switching the player
const switchUser = function () {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const resetButtonfunction = function () {
  player0CurrentScore = 0;
  player0MainScore = 0;
  player1CurrentScore = 0;
  player1MainScore = 0;
  document.querySelector('#score--0').textContent = player0MainScore;
  document.querySelector('#score--1').textContent = player1MainScore;
  document.querySelector('.dice').src = `dice-5.png`;
  if (player1.classList.contains('player--active')) {
    switchUser();
    player1.classList.remove('player--winner');
  } else {
    player0.classList.add('player--winner');
  }
};

rollBtn.addEventListener('click', function () {
  randomNum = Math.trunc(Math.random() * 6 + 1);
  document.querySelector('.dice').src = `dice-${randomNum}.png`;
  if (player0.classList.contains('player--active')) {
    if (randomNum === 1) {
      player0CurrentScore = 0;
      switchUser();
    } else {
      player0CurrentScore += randomNum;
    }
    document.querySelector('#current--0').textContent = player0CurrentScore;
  } else {
    if (randomNum === 1) {
      player1CurrentScore = 0;
      switchUser();
    } else {
      player1CurrentScore += randomNum;
    }
    document.querySelector('#current--1').textContent = player1CurrentScore;
  }
});

// const holdbtnfunction = function (playerNum) {
//   //if (player0.classList.contains('player--active')) {
//   player0MainScore += player0CurrentScore;
//   if (player0MainScore >= 20) {
//     player0.classList.add('player--winner');
//   }
//   document.querySelector('#score--0').textContent = player0MainScore;
//   player0CurrentScore = 0;
//   document.querySelector('#current--0').textContent = player0CurrentScore;
//   switchUser();
//   // }
// };

holdBtn.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    player0MainScore += player0CurrentScore;
    if (player0MainScore >= 20) {
      player0.classList.add('player--winner');
    }
    document.querySelector('#score--0').textContent = player0MainScore;
    player0CurrentScore = 0;
    document.querySelector('#current--0').textContent = player0CurrentScore;
    switchUser();
  } else {
    player1MainScore += player1CurrentScore;
    if (player1MainScore >= 20) {
      player1.classList.add('player--winner');
    }
    document.querySelector('#score--1').textContent = player1MainScore;
    player1CurrentScore = 0;
    document.querySelector('#current--1').textContent = player1CurrentScore;

    switchUser();
  }
});

resetBtn.addEventListener('click', resetButtonfunction);
