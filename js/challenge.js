document.addEventListener("DOMContentLoaded", () => {

    let timer = setInterval(timeUp, 1000);
    let plusOne = document.getElementById("plus");
    let minusOne = document.getElementById("minus");
    let heart = document.getElementById("heart");
    let pause = document.getElementById("pause");
    let paused = false;
    let submit = document.getElementById("submit");

    
    

    plusOne.addEventListener("click", timeUp);
    minusOne.addEventListener("click", timeDown);
    heart.addEventListener("click", addLike)
    pause.addEventListener("click", actionThings);
    submit.addEventListener("click", addComment);


   function timeUp() {
     let timer = document.getElementById("counter").innerText;
     let newTime = parseInt(timer, 10 )+ 1;
     document.getElementById("counter").innerText = newTime;
    };

    function timeDown() {
      let timer = document.getElementById("counter").innerText;
      let newTime = parseInt(timer, 10 ) - 1;
      document.getElementById("counter").innerText = newTime;
    }

    function addLike() {
      let numberArray = [];
      let num = 1;
      let timer = document.getElementById("counter").innerText;
      if (numberArray.includes(timer)) {

      }
      else {
        numberArray.push(timer)
        let text = `${timer} has been liked ${num} times!`;
        let ul = document.getElementsByClassName("likes")[0];
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(text));
        ul.appendChild(li);
      }

    }

    function actionThings() {
        if (!paused) {
            clearInterval(timer);
            plusOne.disabled = true;
            minusOne.disabled = true;
            heart.disabled = true;
            pause.innerText = "Resume";
            paused = true;
        } else {
            timer = setInterval(timeUp, 1000);
            plusOne.disabled = false;
            minusOne.disabled = false;
            heart.disabled = false;
            pause.innerText = "Pause";
            paused = false;
        }
    }

    function addComment(event) {
        event.preventDefault();
        let comment = document.getElementById("comment-input").value;
        let div = document.getElementById("list");
        let p = document.createElement("p");
        p.innerText = comment;
        div.appendChild(p);
      };

});