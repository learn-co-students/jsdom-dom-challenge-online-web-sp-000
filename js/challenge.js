document.addEventListener('DOMContentLoaded', () => {

const counter = document.getElementById("counter");
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit');
let count;
let timer;
let isPaused = false;
const likeList = document.getElementsByClassName('likes')[0];
const commentList = document.getElementById('list');
const commentInput = document.getElementById('comment-input');


function newTimer() {
    timer = window.setInterval(countUp, 1000);
    return timer;
}
     
newTimer();

function countUp() {
    count = parseInt(counter.innerText, 10);
    counter.innerText = count + 1;
}

minusButton.addEventListener('click', function() {
 count = parseInt(counter.innerText, 10);
if (count > 0) {
counter.innerText = count - 1;
}
});

plusButton.addEventListener('click', function() {
 count = parseInt(counter.innerText, 10);
counter.innerText = count + 1; 
});

pauseButton.addEventListener('click', function() {
    if (isPaused == false) {
    window.clearInterval(timer);
    isPaused = true;
    minusButton.disabled = true;
    plusButton.disabled = true;
heartButton.disabled = true;
submitButton.disabled = true;

  pauseButton.innerText = 'resume';

    }
    else
      {
        isPaused = false;

        newTimer();
 minusButton.disabled = false;
   plusButton.disabled = false;

   heartButton.disabled = false;

   submitButton.disabled = false;

  pauseButton.innerText = 'pause';


        
    }
    
    });

    heartButton.addEventListener('click', function() {
        let number = parseInt(counter.innerText, 10);
        let isNewLike = true;
        liked = likeList.getElementsByTagName('li');
for (let i = 0; i < liked.length; i++) {
    const element = liked[i];
    if (element.dataset.num == number) {
        isNewLike = false;
        ++element.dataset.count;
        element.innerText = `${number} has been liked ${element.dataset.count} times`;
    }
    else {
isNewLike = true;
    }
}
        if (isNewLike == true) {
            let newLike = document.createElement('li');
newLike.dataset.num = number;
newLike.dataset.count = 1;
newLike.innerText = `${number} has been liked 1 time`;
likeList.appendChild(newLike);
        }
       });


       submitButton.addEventListener('click', function(e) {
e.preventDefault();
        let comment = document.createElement('p');
        comment.innerText = commentInput.value;
        commentList.appendChild(comment);
        commentInput.value = '';
return false;

       });

});