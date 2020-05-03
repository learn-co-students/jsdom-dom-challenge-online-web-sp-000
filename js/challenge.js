document.addEventListener("DOMContentLoaded", function() {
  // increment timer every second once page has loaded
  const counterContent = document.getElementById('counter');
  const likes = document.getElementsByClassName('likes')[0];
  let counterValue = 0;

  function updateCounterDisplay() {
    counterStatus();
    return counterContent.innerText = counterValue;
  }

  setInterval(function(){updateCounterDisplay();}, 1000);

  // increment counter using plus and minus buttons
  function incrementCounter() {
    return counterValue += 1;
  }

  function decrementCounter() {
    return counterValue -= 2;
  }

  function counterStatus() {
    if (pauseBtn.innerText == 'resume') {
      counterValue = parseInt(counterContent.innerText, 10);
    } else {
      incrementCounter();
    };
  }

  // like an individual number of the counter
  const heartBtn = document.querySelector('button#heart');
  let likedNumbersCounts = {};

  heartBtn.addEventListener("click", function() {
    // updates likedNumbersCounts as key/value pair
    likedNumbersCounts[counterValue] = likedNumbersCounts[counterValue] ? likedNumbersCounts[counterValue] + 1 : 1;
    // clear old printed counts, if available
    likes.innerHTML = '';
    // print <li> for each likedNumbersCounts key/value pair
    printLikedNumbersCounts();
  });

  function printLikedNumbersCounts() {
    let likedNumbers = Object.keys(likedNumbersCounts);
    for (let i = 0; i < likedNumbers.length; i++) {
      let newLike = document.createElement('li');
      newLike.innerText = `${likedNumbers[i]} was liked ${likedNumbersCounts[likedNumbers[i]]} time(s).`;
      likes.appendChild(newLike);
    };
  };

  // pause the counter, disable all buttons except pause, change 'pause' to 'resume'
  const pauseBtn = document.getElementById('pause');
  const minusBtn = document.querySelector('button#minus');
  const plusBtn = document.querySelector('button#plus');

  pauseBtn.addEventListener("click", function () {
    pauseBtn.innerText = pauseBtn.innerText == 'pause' ? 'resume' : 'pause';

    if (pauseBtn.innerText == 'resume') {
      minusBtn.disabled = true;
      plusBtn.disabled = true;
      heartBtn.disabled = true;
    } else {
      minusBtn.disabled = false;
      plusBtn.disabled = false;
      heartBtn.disabled = false;
    }

  });

  minusBtn.addEventListener("click", function (event) {
    decrementCounter(); // decrements value by 2
    updateCounterDisplay(); // increments value by 1 => overall decrements value by 1;
  });

  plusBtn.addEventListener("click", function (event) {
    updateCounterDisplay(); // increments value by 1
  });

  // user can leave comments on gameplay
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const commentsList = document.getElementById('list');

  function addNewComment() {
    const newComment = document.createElement('p');
    newComment.innerText = commentInput.value;
    commentsList.appendChild(newComment);
  }

  commentForm.addEventListener('submit', function (event) {
    addNewComment();
    event.preventDefault();
    event.target.reset();
  });

});
