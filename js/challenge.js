let counter = document.getElementById('counter');
let seconds = counter.textContent;
let pause = document.getElementById('pause');
let paused = false;
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');

document.addEventListener('DOMContentLoaded', () => {
    runIt()
})

plus.addEventListener('click', () => {
    seconds ++;
    counter.textContent = seconds;
})

minus.addEventListener('click', () => {
    seconds --;
    counter.textContent = seconds;
})

document.getElementById('comment-form').addEventListener("submit", function(event) {
    event.preventDefault();
    let comment = document.querySelector("#comment-input");
    let li = document.createElement('li');
    li.textContent = comment.value;
    document.getElementById('list').appendChild(li);
    document.getElementById("comment-form");
})

heart.addEventListener('click', () => {
    let alreadyLiked = document.getElementById(seconds)
    if (alreadyLiked) {
       let likeAmount = alreadyLiked.textContent.split(' ')[2];
       let updatedLikes = parseInt(likeAmount) + 1;
       alreadyLiked.textContent = `${seconds} has ${updatedLikes} likes`
    } else{
    let likes = 1
    let newLike = document.createElement('li')
    newLike.setAttribute('id', seconds)
    let list = document.querySelector('.likes')
    newLike.textContent = `${seconds} has ${likes} likes`
    list.appendChild(newLike)
    }
})

pause.addEventListener('click', () => {
    if (paused) {
        paused = false;
        pause.textContent = "pause";
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
    } else {
        paused = true;
        pause.textContent = 'resume';
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
    }
})

function runIt() {
    setInterval( function() {
        if (!paused) {
            seconds ++;
            counter.textContent = seconds;
        }
    }, 1000)
}
