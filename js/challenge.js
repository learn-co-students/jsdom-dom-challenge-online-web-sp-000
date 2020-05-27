document.addEventListener('DOMContentLoaded', () => {
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let heart = document.getElementById('heart');
    let el = document.getElementById('counter');
    let form = document.getElementById('comment-form')
    let pause = document.getElementById('pause');
    heart.addEventListener('click', heartButton);
    pause.addEventListener('click', pauseButton);
    form.addEventListener('submit', commentButton);
    minus.addEventListener('click', minusButton);
    plus.addEventListener('click', plusButton);
    let counter = 0;
    let numberOfLikes = 0
    var myInterval = setInterval(myTimer, 1000);

    function myTimer() {
        ++counter;
        el.innerHTML = counter;
    }
    
    function plusButton() {
        if (plus) {
            ++counter;
        } 
    }
    
    function minusButton() {
        if (minus) {
            --counter;
        } 
    }

	function pauseButton() {
        if (pause.innerText == `pause`){
          clearInterval(myInterval)
          pause.innerText = `resume`
          plus.disabled = true
          minus.disabled = true 
          heart.disabled = true 
          submit.disabled = true 
        } else {
          timeStart = setInterval(myTimer, 1000);
          pause.innerText = `pause`
          plus.disabled = false 
          minus.disabled = false
          heart.disabled = false
          submit.disabled = false 
        }
      }

      function heartButton() {
        let likes = document.getElementsByClassName("likes")[0];
        if (document.getElementById(counter)) {
          let existingLike = document.getElementById(counter)
          ++numberOfLikes
          if (numberOfLikes == 1){
            existingLike.innerText = `${counter} has been liked ${numberOfLikes} time`
          } else {
            existingLike.innerText = `${counter} has been liked ${numberOfLikes} times`
          }
        } else {
          let newLike = document.createElement("li")
          newLike.setAttribute("id", counter)
          numberOfLikes = 1
          if (numberOfLikes == 1){
            newLike.innerText = `${counter} has been liked ${numberOfLikes} time`
          } else {
            newLike.innerText = `${counter} has been liked ${numberOfLikes} times`
          }
          likes.appendChild(newLike)
        }          
      }
      

    function commentButton(e) {
        let comment = document.getElementById('comment-input').value;
        display(comment);
        e.preventDefault();
    }

    function display(testContent) {
        let content = document.getElementById('list')
        let li = document.createElement('li')
        li.innerHTML = testContent
        content.appendChild(li)
    }

});

