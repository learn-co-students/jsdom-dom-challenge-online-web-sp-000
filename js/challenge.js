document.addEventListener("DOMContentLoaded", () => {

const counterField = document.getElementById('counter')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')
const pauseButton = document.querySelector('#pause')
const heartButton = document.querySelector('#heart')
const likes = document.querySelector('.likes')
const submitButton = document.querySelector('#submit')
const commentList = document.querySelector('#list')

let count = setInterval(function() {
    counterField.innerText++;
  }, 1000);

minusButton.addEventListener('click', function(e) {
  counterField.innerText--;
})

plusButton.addEventListener('click', function(e) {
  counterField.innerText++;
})

pauseButton.addEventListener('click', function(e) {
  e.preventDefault()
  if (pauseButton.innerText === 'Pause'){
    pauseButton.innerText = "Resume"
    clearInterval(count)
    count.pause



    minusButton.disabled = true;
    plusButton.disabled = true;
    heartButton.disabled = true;
    submitButton.disabled = true;
  }
  else {
    counterField.innerText = '0'
    let count = setInterval(function() {
        counterField.innerText++;
      }, 1000);

    pauseButton.innerText = 'Pause'
    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;
    submitButton.disabled = false;
  }
})

heartButton.addEventListener('click', function(e){
  let likedNumber = counterField.innerText
  likes.innerHTML += `<li>${likedNumber} was liked 1 time.</li>`
});

submitButton.addEventListener('click', function(e){
  e.preventDefault()
  let userComment = document.getElementById('comment-input').value
  commentList.innerHTML += `<p>"${userComment}" - Username</p>`
});

});
