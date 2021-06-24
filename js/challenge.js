let counter = setInterval(function() {
  let counterText = document.getElementById('counter');
  let counterInt = parseInt(counterText.innerText);
  counterText.innerText = `${counterInt + 1}`;
  }, 1000);

document.getElementById('minus').addEventListener('click', function() {
  let counterText = document.getElementById('counter');
  let counterInt = parseInt(counterText.innerText);
  counterText.innerText = `${counterInt - 1}`;
});

document.getElementById('plus').addEventListener('click', function() {
  let counterText = document.getElementById('counter');
  let counterInt = parseInt(counterText.innerText);
  counterText.innerText = `${counterInt + 1}`;
});

document.getElementById('heart').addEventListener('click', function() {
  let likes = document.querySelector('.likes');
  let newLike = document.createElement('li');
  let counterText = document.getElementById('counter').innerText;
  newLike.innerHTML = `${counterText} got a like!`;
  likes.appendChild(newLike);
});

function pause() {
  if (document.getElementById('pause').innerText == 'pause') {
    clearInterval(counter);
    document.getElementById('pause').innerText = 'resume';
    document.getElementById('minus').disabled = true;
    document.getElementById('plus').disabled = true;
    document.getElementById('heart').disabled = true;
    document.getElementById('submit').disabled = true;
  } else {
    resume();
  };
};

function resume() {
  setInterval(function() {
    let counterText = document.getElementById('counter');
    let counterInt = parseInt(counterText.innerText);
    counterText.innerText = `${counterInt + 1}`;
  }, 1000);
  counter = counter + 1
    document.getElementById('pause').innerText = 'pause';
    document.getElementById('minus').disabled = false;
    document.getElementById('plus').disabled = false;
    document.getElementById('heart').disabled = false;
    document.getElementById('submit').disabled = false;
};

document.getElementById('pause').addEventListener('click', pause);

document.getElementById('submit').addEventListener('click', function(e) {
  let comments = document.getElementById('list');
  let p = document.createElement('p');
  p.innerText = document.querySelector('#comment-form input').value;
  comments.appendChild(p);
  document.querySelector('#comment-form input').value = "";
  e.preventDefault();
}, false);
