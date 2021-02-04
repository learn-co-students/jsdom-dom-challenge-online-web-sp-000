document.addEventListener("DOMContentLoaded", function(){
  let counter = document.getElementById('counter')
  let i = 0
  let isPaused = false
  let likes = {};

  let increment =  function counterIncrement(){
                    i++;
                    counter.innerHTML = i
                  };

  let decrement =  function counterDecrement(){
                    i--;
                    counter.innerHTML = i
                  };

  let interval = setInterval(increment, 1000);

  //add to count
  const plus = document.getElementById('plus');
  plus.addEventListener("click", function(){
    counterIncrement();
  });

  //subtract from count
  const minus = document.getElementById('minus');
  minus.addEventListener("click", function(){
    counterDecrement();
  });

  // add likes
  const heart = document.getElementById('heart');

  let submit = document.getElementById('submit');
  let pause = document.getElementById('pause');

  pause.addEventListener("click", function(){
    if (isPaused === false) {
      clearInterval(interval);
      pause.innerHTML = "resume";
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
      isPaused = true
    } else {
      interval = setInterval(increment, 1000);
      pause.innerHTML = "pause";
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
      isPaused = false
    };
  });

  //leave comments
  form.addEventListener("submit", function(){
    e.preventDefault();
    const form = document.getElementById("comment-form");
    const list = document.getElementById('list');
    let comment = document.getElementById("comment-input").value;
    let newP = document.createElement("p");

    let p = newP.appendChild(comment);
    list.appendChild(p);
  });


});
