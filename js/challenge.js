// 1. As a user, I should see the timer increment every second once the page has loaded.
// 2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// 3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// 4. As a user, I can pause the counter, which should 

//   * pause the counter
//   * disable all buttons except the pause button
//   * the pause button should then show the text "resume."

//   When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
document.addEventListener("DOMContentLoaded", function() {
   runTimer();
   adjustTimer();
   handleLikes();
});

function adjustTimer() {
   let counter = document.querySelector("#counter");
   let counterNum = parseInt(counter.innerText);
   let minusButton = document.querySelector("#minus");
   let plusButton = document.querySelector("#plus");

   plusButton.addEventListener("click", function (event) {
      // debugger;
      // Increment timer when 0 or greater
      if (counterNum >= 0) {
         console.log(event.target);
         counter.innerText = counterNum++;
      }
   })

   // Toggle minus button on timer
   minusButton.addEventListener("click", function (event) {
      // Decrement counter when greater than 0
      if (counterNum > 0) {
         console.log(event.target);
         counter.innerText = counterNum--;
      }
   })
}

function runTimer() {
   let isPaused = false;
   let intervalId = window.setInterval(timerCallback, 1000);
   let pause = document.querySelector("#pause");
   // Stop timer when pause button clicked
   pause.addEventListener("click", function (event) {
      event.preventDefault();
      clearInterval(intervalId);
      isPaused = true;
   })
}

function stopTimer() {
   let timeoutId = setTimeout(stop, 3000);
}

function stop() {

}

function timerCallback() {
   let counter = document.querySelector("#counter");
   let counterNum = parseInt(counter.innerText);
   counter.innerText = counterNum+1;
   console.log(counterNum);
}

function handleLikes() {
   let likes = document.querySelector(".likes");
   let heartButton = document.querySelector("#heart");
   let likeCount = 0;
   // Handle when user press like button
   heartButton.addEventListener("click", function (event) {
      // Determine number user liked and add it to likes
      let counterNum = parseInt(counter.innerText);

     
      let existingLike = document.querySelector(`.like${likeCount+1}`);
      if (existingLike && counterNum === parseInt(like.innerText.split(" ")[0])) {
         let numLikes = parseInt(existingLike.innerText.split(" ")[2])
         numLikes += 1;
         existingLike.innerText.split(" ")[0] = numLikes;
      }
      else {
         let like = document.createElement("li");
         like.className = `like${likeCount}`;
         like.innerHTML = `${counterNum} liked ${likeCount} times.`;
         likes.appendChild(like);
      }
      likeCount += 1;
   })
}