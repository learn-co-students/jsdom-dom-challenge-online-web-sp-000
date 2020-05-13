document.addEventListener("DOMContentLoaded", () => {

  //counter
  const counter = document.getElementById('counter')

  let count = setInterval(function () {
    counter.innerText++;
  }, 1000);


  // Dom elements
  const minus = document.getElementById('minus');
  const plus = document.getElementById('plus');
  const heart = document.getElementById('heart');
  const pause = document.getElementById('pause');
  const likes = document.querySelector('.likes');
  const submit = document.getElementById('submit')
  const comments = document.getElementById('comment-form')

  //minus button
  minus.addEventListener("click", function(e){
    counter.innerText--;
  });

  //plus button
  plus.addEventListener("click", function(e){
    counter.innerText++;
  });

  //pause button
  pause.addEventListener("click", function(e) {
    if (pause.innerText === "pause"){
      pause.innerText = "resume";
      clearInterval(count);

      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
      likes.disabled = true;
    }
    else {
      count = setInterval(function () {
        counter.innerText++;
      }, 1000);
      pause.innerText = "pause";

      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
      likes.disabled = false;
    }
  });

  //hearts
  heart.addEventListener("click", function(e) {
    let obj = document.getElementById(`${counter.innerText}`);
    obj ? obj.children[0].innerText++ :
    likes.innerHTML += `<li id= "${counter.innerText}">${counter.innerText} is liked ${counter.innerText} times.</li>`
  });

  //coments
  submit.addEventListener("click", function(e) {
    e.preventDefault();
    let comment = document.querySelector("#comment-form > input[type=text]").value
    comments.innerHTML += `<li>${comment}</li>`
    document.querySelector("#comment-form").reset();
  });

});
