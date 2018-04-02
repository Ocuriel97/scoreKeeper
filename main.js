let p1B = document.getElementById('p1');
let p2B = document.getElementById('p2');
let p1S =document.getElementById('p1S');
let p2S =document.getElementById('p2S');
let r =document.getElementById('r');
let input = document.querySelector('input');
let num = document.querySelector('#num');

p1Score = 0;
p2Score = 0;
gameOver = false;
winningScore = 5;

p1B.addEventListener('click', function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      p1S.classList.add('winner');
      console.log('GameOver');
      gameOver = true;
    }
    p1S.textContent = p1Score;
  }
});

p2B.addEventListener('click', function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      p2S.classList.add('winner');
      console.log('game over');
      gameOver = true;
    }
    p2S.textContent = p2Score;
  }
});

r.addEventListener('click', function(){
  console.log('clicked');
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1S.textContent ='0';
  p2S.textContent ='0';
  p1S.classList.remove('winner');
  p2S.classList.remove('winner');
});

input.addEventListener('change', function(){
  alert('changed');
});
