document.addEventListener("DOMContentLoaded", function() {
    startTimer()

    let counter = document.getElementById("counter");
    let counterValue = counter.innerText;
    const pause = document.getElementById("pause");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const heart = document.getElementById("heart");
    const likesList = document.querySelector("ul.likes");
    let submitComment = document.getElementById("comment-form");
    let commentInput = document.getElementById("comment-input");
    let commentsList = document.getElementById("list");
    let numberOfLikes = 0;
    var tracker;
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    
    function startCounter() {
        tracker = setInterval(increaseCount, 1000);
    };
    
    function increaseCount() {
        if (parseFloat(counterValue) > -100000) {
            counterValue++;
            counter.innerText = String(counterValue);
        }
    };

    function startTimer() {
        setTimeout(startCounter, 0);
    };

    function stopTimer() {
        clearInterval(tracker);
    };

    function createComment(submit) {
        submit.preventDefault();
        const newComment = document.createElement("p");
        newComment.innerText = commentInput.value;
        commentsList.appendChild(newComment);
    }

    function likeMessage() {
        if (numberOfLikes === 1) {
          return `${counterValue} - 1 Likes ❤️`;
        } else {
          return `${counterValue} - ${numberOfLikes} Likes ❤️`;
        }
      }

    pause.addEventListener("click", function() {
        if (pause.innerText === "pause") {
          stopTimer();
          plus.disabled = true;
          minus.disabled = true;
          heart.disabled = true;
          submit.disabled = true;
          pause.innerText = "resume";
        } else {
          startTimer();
          plus.disabled = false;
          minus.disabled = false;
          heart.disabled = false;
          submit.disabled = false;
          pause.innerText = "pause";
        }
      });

      plus.addEventListener("click", function(){
        counterValue++
        counter.innerText = String(counterValue)
      });

      minus.addEventListener("click", function(){
        counterValue--
        counter.innerText = String(counterValue)
      });
     
      heart.addEventListener("click", function() {
        let li = document.getElementById(`${counterValue}`);
        if (li) {
          numberOfLikes++;
          li.innerText = likeMessage();
        } else {
          numberOfLikes = 1;
          li = document.createElement("li");
          li.innerText = likeMessage();
          li.id = counterValue;
          likesList.appendChild(li);
        }
      });

      submitComment.addEventListener('submit', createComment);
    

      












});