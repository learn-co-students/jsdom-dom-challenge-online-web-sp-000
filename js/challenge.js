document.addEventListener("DOMContentLoaded", function() {
  
  // timer functionality -------------------------------------------------------

  startTimer()

  let counter = document.getElementById("counter");
  let counterValue = counter.innerHTML
  const pause = document.getElementById("pause");
  let tracker

  function startTimer() {
      setTimeout(startCounter, 0);
  };
  
  function startCounter() {
    tracker = setInterval(increaseCount, 1000);
  };

  function increaseCount() {
    counterValue++;
    counter.innerText = String(counterValue);
  };

  function pauseTimer() {
    clearInterval(tracker);
  };

  pause.addEventListener('click', function() {
    if (pause.innerText === 'pause') {
      pauseTimer();
      pause.innerText = 'resume';
    } else {
      startCounter()
      pause.innerText = 'pause';
    }
  })

  // increment/decrement counter functonality --------------------------------

  let plusButton = document.getElementById('plus')
  let minusButton = document.getElementById('minus')

  plusButton.addEventListener('click', function() {
    counterValue++;
    counter.innerText = String(counterValue);
  })

  minusButton.addEventListener('click', function() {
    counterValue--;
    counter.innerText = String(counterValue);
  })

  // heart button functionality ---------------------------------------

  let heartButton = document.getElementById('heart')
  let heartList = document.getElementsByClassName('likes')[0]
  let numberOfLikes = 0

  heartButton.addEventListener('click', function() {
    let likedNumber = document.getElementById(`${counterValue}`)
    if (likedNumber) {
      numberOfLikes++;
      likedNumber.innerText = likedNumberTracker();
    } else {
      let li = document.createElement('li');
      li.innerText = likedNumberTracker();
      li.id = counterValue;
      heartList.appendChild(li);
    };
  })

  function likedNumberTracker() {
    if (numberOfLikes === 1) {
      return `${counterValue} - 1 Like ❤️`;
    } else {
      return `${counterValue} - ${numberOfLikes} Likes ❤️`;
    }
  }
  // comment functionality

  let commentList = document.getElementById('list');
  let commentForm = document.getElementById('comment-form');
  let commentInput = document.getElementById('comment-input');

  commentForm.addEventListener('submit', displayComment);
  
  function displayComment(submit) {
    submit.preventDefault();
        const paragraphTag = document.createElement("p");
        paragraphTag.innerText = commentInput.value;
        commentList.appendChild(paragraphTag);
  }

})