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
   setTimer();
});

function setTimer() {
   let counter = document.querySelector("#counter");
   let intervalId = window.setInterval(timerCallback, 1000);
}

function timerCallback() {
   let count = 1;
   while (count < 100) {
      console.log(count);
   }
}