document.addEventListener("DOMContentLoaded", function() {
  let commentNode = document.querySelector("#comment-input");
  let commentList = document.querySelector("#list");
  let form = document.querySelector("#comment-form");
  let submit = document.querySelector("#submit");
  let likes = document.querySelector("ul.likes");
  let minusBtn = document.querySelector("#minus");
  let plusBtn = document.querySelector("#plus");
  let heartBtn = document.querySelector("#heart");
  let pauseBtn = document.querySelector("#pause");
  let counter = document.querySelector("#counter");
  let buttons = [
    minusBtn,
    plusBtn,
    heartBtn,
    submit
  ];
  let likeCount = 0;
  let timer;

  // Counter starts up first
  function startCounter() {
    timer = window.setInterval(updateCounter, 1*1000);
  }

  function updateCounter() {
    let number = parseInt(counter.innerText);
    number++
    counter.innerText = `${number.toString()}`;
  }

  function stopCounter() {
    clearInterval(timer);
  }

  function enableBtns() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
  }

  function disableBtns() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }

  function likeMessage() {
    if (likeCount === 1) {
      return `${counter.innerText} has been liked 1 time`;
    } else {
      return `${counter.innerText} has been liked ${likeCount} times`;
    }
  }

  // function calls and code to be executed
  startCounter();
  // if pause is pressed
  pauseBtn.addEventListener("click", function() {
    if (pauseBtn.innerText === "pause") {
      stopCounter();
      disableBtns();
      pauseBtn.innerText = "resume";
    } else {
      startCounter();
      enableBtns();
      pauseBtn.innerText = "pause";
    }
  });

  minusBtn.addEventListener("click", function() {
    newTime = parseInt(counter.innerText) - 1;
    counter.innerText = `${newTime}`;
  });

  plusBtn.addEventListener("click", function() {
    newTime = parseInt(counter.innerText) + 1;
    counter.innerText = `${newTime}`;
  });

  heartBtn.addEventListener("click", function() {
    let li = document.getElementById(`${counter.innerText}`);
    if (li) {
      likeCount++;
      li.innerText = likeMessage();
    } else {
      likeCount = 1;
      li = document.createElement("li");
      li.innerText = likeMessage();
      li.setAttribute("id", `${counter.innerText}`);
      likes.appendChild(li);
    }
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let p = document.createElement("p");
    commentList.appendChild(p);
    p.innerText = `${commentNode.value}`;
    commentNode.value = "";
  });
});