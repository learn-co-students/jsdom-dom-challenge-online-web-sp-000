  document.addEventListener("DOMContentLoaded", () => {
    let counter = document.querySelector('#counter');
    let pause = document.querySelector('#pause');
    var myCounter = setInterval(setCounter, 1000);
    let scrollUp = document.querySelector('#plus');
    let scrollDown = document.querySelector('#minus');
    let like = document.querySelector('#heart');
    let likes = document.querySelector("ul.likes");
    let form = document.querySelector('#comment-form');
    let list = document.querySelector('#list');
    let isPaused = false
    function setCounter(){
      if(!isPaused)
        ++counter.innerHTML;
    }
    pause.addEventListener("click", function(){
        if (pause.innerHTML === "resume"){
            isPaused = false
            scrollUp.disabled = false;
            scrollDown.disabled = false;
            like.disabled = false;
            document.querySelector("#submit").disabled = false;
            pause.innerText = "pause";
        } else {
            isPaused = true
            scrollUp.disabled = true;
            scrollDown.disabled = true;
            like.disabled = true;
            document.querySelector("#submit").disabled = true;
            pause.innerText = "resume";
        };
    })
    scrollUp.addEventListener("click", function(){
      ++counter.innerHTML;
      isPaused = true
      pause.innerText = "resume";
    })
    scrollDown.addEventListener("click",function(){
      --counter.innerHTML;
      isPaused = true
      pause.innerText = "resume";
    })
    like.addEventListener('click', function() {
      if (document.getElementById(`likes-${counter.innerHTML}`) == null){
        let li = document.createElement("li");
        likes.appendChild(li);
        let count = 1;
        li.setAttribute("id", `likes-${counter.innerHTML}`);
        li.innerHTML = `${counter.innerHTML} has ${count} like!`;
      } else {
        let li = document.getElementById(`likes-${counter.innerHTML}`)
        let n = parseInt(li.innerHTML.split(" ")[2])+1
        li.innerHTML = `${counter.innerHTML} has ${n} likes!`
      }
    });
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const newTask = document.getElementById("comment-input").value;
      list.innerHTML += `<li id ="comments"> ${newTask} <button data-action = "delete"> x </button> </li>`;
      form.reset();
    });
    list.addEventListener("click", function(e) {
      if (e.target.dataset.action === "delete") {
        e.target.parentElement.remove();
      }
    });
  });