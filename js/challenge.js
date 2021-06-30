document.addEventListener("DOMContentLoaded", () => {
  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heart = document.getElementById("heart") ;
  let pause = document.getElementById("pause");
  let likesList = document.querySelector("ul.likes");
  // let commentForm = document.getElementsByTagName("form")[0];
  let commentForm = document.getElementById("comment-form");
  let submitBtn = document.getElementById("submit");
  let comments = document.querySelector(".comments");

  let isPaused = false;
  let timeHop = 1;

  //timer increment every second once the page has loaded
  function timer() {
    return setInterval(function() {
      let timeInt = parseInt(counter.innerText);
      counter.innerText = timeInt + timeHop;
    }, 1000);
  }
  let interval = timer();

  function handleIncrement(amount) {
    let timeInt = parseInt(counter.innerText);
    counter.innerText = timeInt + amount;
    console.log(`Incrementing counter by ${amount}`);
  }
  plus.addEventListener("click", function(){
    handleIncrement(1);
  });
  minus.addEventListener("click", function(){
    handleIncrement(-1);
  });
  
  //like' an individual number of the counter
  //see count of the number of 'likes' associated with that number
  heart.addEventListener("click", function() {
    let num = counter.innerText
    let likeLi = document.createElement('li');
    likeLi.innerHTML = `${num} has been liked <span>1</span> time`
    likesList.appendChild(likeLi);
  });

  // pause the counter
  pause.addEventListener("click", function() {
    // If timer is currently paused and not going
    if (!isPaused) {
      // pause button should then show the text "resume"
      // clearInterval(interval);

      timeHop = 0;
      pause.innerText = "resume";
      //disable all buttons except the pause button
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      submitBtn.disabled = true;
    } else {
      //resume' clicked - restart the counter and re-enable the buttons
      timeHop = 1;
      pause.innerText = "pause";
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      submitBtn.disabled = false;
    }
    isPaused = !isPaused
  });
  
  // leave comments on my gameplay, such as: "Wow, what a fun game this is.”
  commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("adding comment");
    let comment = document.createElement("p");
    comment.innerHTML = commentForm.elements['comment'].value;
    comments.appendChild(comment);
  });
});