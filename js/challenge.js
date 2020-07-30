// Declared Variables

counter = document.querySelector("#counter");
minus = document.querySelector("#minus");
plus = document.querySelector("#plus");
heart = document.querySelector("#heart");
pause = document.querySelector("#pause");
isPaused = false

// As a user, I should see the timer increment every second once the page has loaded.

let n = 0;
setInterval(function(e) {
  if (isPaused == false) {
    counter.innerHTML = n += 1
  }
},1000);

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

minus.addEventListener("click", function(e) {
  counter.innerHTML = n -= 1
});

plus.addEventListener("click", function(e) {
  counter.innerHTML = n += 1
});

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

let currentNumberLikes = [];

heart.addEventListener("click", function(event) {
  let li = document.createElement("li")
  let likeMessage = document.querySelector('.likes').appendChild(li)

  currentNumber = counter.innerHTML
  currentNumberLikes.push(currentNumber);

  let timesLiked = 0;
  for (let i=0;i<currentNumberLikes.length; i++) {
    if (currentNumber == currentNumberLikes[i]) {
      timesLiked++
    }

    likeMessage.innerHTML = `${currentNumber} has been liked ${timesLiked} times!`

  }
})

// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.

pause.addEventListener("click", function(e) {
  isPaused = !isPaused;

  minus.disabled = !minus.disabled;
  plus.disabled = !plus.disabled;
  heart.disabled = !heart.disabled;

  if (isPaused == true) {
    pause.innerHTML = "resume"
  } else {
    pause.innerHTML = "pause"
  }
})

// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

document.querySelector('#submit').addEventListener("click", function(e) {
  let li = document.createElement('li')
  commentSection = document.querySelector('.comments').appendChild(li)

  commentSection.innerHTML = document.querySelector('#comment-input').value
  document.querySelector('#comment-input').value = ""

  e.preventDefault();
});
