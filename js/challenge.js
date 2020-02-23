 const counter = document.getElementById('counter');
 const minus = document.getElementById('minus');
 const plus = document.getElementById('plus');
 const heart = document.getElementById('heart');
 const pause = document.getElementById('pause');
 let runCount = true;
 const commentForm = document.getElementsByTagName('form')[0]

 function increment() {
     if (runCount) counter.innerText++;
 }

 function decrement() {
     if (runCount) counter.innerText--;
 }

 document.addEventListener('DOMContentLoaded', function() {
     setInterval(function() { increment() }, 1000);
 })


 plus.addEventListener('click', function() {
     increment();
 })

 minus.addEventListener('click', function() {
     decrement();
 })

 const disableButtons = () => {
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
}

const enableButtons = () => {
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
}

pause.addEventListener('click', () => {
    if (runCount) {
        runCount = false
        pause.innerText = "Resume"
        disableButtons()
    }
    else {
        runCount = true
        pause.innerText = 'Pause'
        enableButtons()
    }
})

function likes() {
    let likesList = document.getElementsByClassName('likes')
    let newLike = document.createElement('li')
    newLike.innerHTML = `Number ${counter.innerText} has been liked`
    likesList[0].appendChild(newLike)
}

heart.addEventListener('click', function() {
    likes()
})

commentForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let comment = document.getElementById('comment-input');
    let li = document.createElement('li');
    li.textContent = comment.value;
    document.getElementById("list").appendChild(li);
    document.getElementById('comment-form').reset();

})
