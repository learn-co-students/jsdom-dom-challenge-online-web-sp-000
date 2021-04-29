document.addEventListener("DOMContentLoaded", () => {

  let counter = document.getElementById('counter');
  let minus = document.getElementById('minus');
  let plus = document.getElementById('plus');
  let heart = document.getElementById('heart');
  let pause = document.getElementById('pause');

  // timer increment every second
  let intervalID = 0;
  let intervalID = counter.setInterval(function[1]);

  // counter.setTimeout(intervalID)

  // manually increment and decrement the counter
  // using the plus and minus buttons

  function plusOne(){
    counter.textContent = parseInt(counter.textContent) +1;
  }

  function minusOne(){
    counter.textContent = parseInt(counter.textContent) -1;
  }

  plus.addEventListener('click', plusOne);
  minus.addEventListener('click', minusOne);

  // I can 'like' an individual number of the counter. 
  // I see count of the number of 'likes' associated with that number
  heart.addEventListener('click', addLike);

  function addLike(){
    
  }
  // pause the counter:
    // 1. pause the counter
    pause.addEventListener('click', () => {
      pauseTimer();
    })

    function pauseTimer(){
      let buttons = [minus, plus, heart];
      buttons.forEach(button => toggleDisabled(button));
    }


    // 2. disable all buttons except the pause button
    // 3. the pause button should then show the text "resume."

  // When 'resume' is clicked, it should restart the counter and re-enable the buttons.

  // I can leave comments on my gameplay,

});

