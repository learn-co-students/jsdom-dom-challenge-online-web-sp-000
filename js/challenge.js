window.addEventListener('DOMContentLoaded', function () {
  const counter = document.getElementById('counter');
  const minus = document.getElementById('minus');
  const plus = document.getElementById('plus');
  const timerControl = document.getElementById('timerControl');
  const like = document.getElementById('heart');
  const submit = document.getElementById('submit');

  let timer = setInterval(uptickCounter, 1000);

  function pause() {
    clearInterval(timer);
    minus.disabled = true;
    plus.disabled = true;
    like.disabled = true;
    timerControl.innerText = 'resume';
    timerControl.onclick = resume;
  }

  function resume() {
    timer = setInterval(uptickCounter, 1000);
    minus.disabled = false;
    plus.disabled = false;
    like.disabled = false;
    timerControl.innerText = 'pause';
    timerControl.onclick = pause;
  }

  function uptickCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
  }
  
  function downtickCounter() {
    counter.innerText = parseInt(counter.innerText) - 1;
  }

  minus.onclick = downtickCounter;
  plus.onclick = uptickCounter;
  timerControl.onclick = pause;
  submit.onclick = submitComment;

  function submitComment(e) {
    e.preventDefault();
    const inputForm = document.getElementById('comment-input');
    const comment = inputForm.value;
    const commentList = document.getElementById('list');

    commentList.innerHTML += `<div>${comment}</div>`;

    inputForm.value = '';
  }
});