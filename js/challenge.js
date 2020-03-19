// variables

let seconds = 0;
let paused = false;
let counter = document.getElementById("counter");
const commentSubmit = document.querySelector('#submit')
const commentList = document.querySelector('#list')
const inputBox = document.querySelector('input')
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const heart = document.querySelector('#heart');
let likes = {};
const likesList = document.querySelector('.likes')

// functions

function startCounter() {
    setInterval(timer, 1000);
}
function timer() {
    if (!paused) {
        seconds += 1;
    }
    counter.innerText = seconds;
}
// pause button

function pause() {
    if (paused == false) {
        console.log("counter paused");
        clearInterval(startCounter);
        paused = true;
    }
    else if (paused == true) {
        console.log("counter started");
        paused = false;
    }
}
// heart

function likeANumber(number) {
    likes[number] = (likes[number] || 0) + 1;
    if (likes[number] == 1){
        const li = document.createElement('li')
        li.id = number
        li.innerText = `Number ${number} liked ${likes[number]} times.`
        likesList.appendChild(li)
    }
    else {
        const foundLi = document.getElementById(number)
        foundLi.innerText = `Number ${number} liked ${likes[number]} times.`
    }
}

function secondTimer(step) {
    if(!paused) {
        seconds += step;
        counter.innerText = seconds;
    }
}

// event listeners

plus.addEventListener('click', function(){secondTimer(1);});

minus.addEventListener('click', function(){secondTimer(-1);});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("pause");
    button.addEventListener("click", pause);
})

commentSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    commentList.innerHTML += `<p>${inputBox.value}</p>`
    inputBox.value = '';
})

heart.addEventListener('click', function(){likeANumber(seconds)});


// start application

startCounter();