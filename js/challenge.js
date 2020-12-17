  const counter = document.querySelector('#counter');
  
  const minus = document.querySelector('#minus');
  const plus = document.querySelector('#plus');
  const heart = document.querySelector('#heart');
  const pause = document.querySelector('#pause');

  const likes = document.querySelector('ul');

  const comments = document.querySelector('#list');
  const commentForm = document.querySelector('#comment-form');
  const commentInput = document.querySelector('#comment-input');

  minus.addEventListener('click', decreaseCounter);
  plus.addEventListener('click', increaseCounter);
  commentForm.addEventListener('submit', displayComment);
  commentInput.addEventListener();


  function decreaseCounter() {
    const currentNum = parseInt(counter.textContent);
      if (currentNum > 0){
        counter.textContent = `${currentNum - 1 }`;
      }
  }

  function increaseCounter() {
    const currentNum = parseInt(counter.textContent);
    counter.textContent = `${currentNum + 1 }`;
}

  function displayComment(event) {
    event.preventDefault();
    const commentFormData = new FormData(event.target)
  }

