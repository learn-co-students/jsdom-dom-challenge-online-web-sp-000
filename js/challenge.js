document.addEventListener("DOMContentLoaded", function(){
  let counter = document.getElementById('counter')
  let i = 0
  let isPaused = false

  let increment =  function counterIncrement(){
                    i++;
                    counter.innerHTML = i
                  };

  function counterIncrement(){i++; counter.innerHTML = i};
  function counterDecrement(){i--; counter.innerHTML = i};

  let interval = setInterval(increment, 1000);

  //add to count - why twice?
    const plus = document.getElementById('plus');
    plus.addEventListener("click", function(){
      counterIncrement()

  //subtract from count
    const minus = document.getElementById('minus');
    minus.addEventListener("click", function(){
      counterDecrement()
    });

  // add likes
  const heart = document.getElementById('heart');
  const ul = document.querySelector('ul.likes');
  let clicks = 0;

  heart.addEventListener("click", function(){
    //for every second interval
    clicks++

    //create li, append to likes
    let createLi = document.createElement("li");
    let li = ul.appendChild(createLi);
      if (clicks === 1){
        li.innerHTML = (`${counter.innerHTML} has been liked ${clicks} time`);
      } else {
        li.innerHTML = (`${counter.innerHTML} has been liked ${clicks} times`);
      };

  });

  // pause
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

  //comment
    const form = document.getElementById("comment-form");
    const list = document.getElementById('list');

    form.addEventListener("submit", function(e){
      e.preventDefault();
      let createP = document.createElement("p");
      let p = list.appendChild(createP);
      p.innerHTML = document.getElementById("comment-input").value;
    });


});
