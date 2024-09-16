const player1Button = document.getElementById('player1Button');
const player2Button = document.getElementById('player2Button');
const resetButton = document.getElementById('resetButton');
const player1Score = document.getElementById('player1Score');
const player2Score = document.getElementById('player2Score');

let score1 = 0;
let score2 = 0;

player1Button.addEventListener('click', () => {
  score1++;
  player1Score.textContent = score1;
});

player2Button.addEventListener('click', () => {
  score2++;
  player2Score.textContent = score2;
});


resetButton.addEventListener('click', () => {
  score1 = 0;
  score2 = 0;
  player1Score.textContent = score1;
  player2Score.textContent = score2;
});
