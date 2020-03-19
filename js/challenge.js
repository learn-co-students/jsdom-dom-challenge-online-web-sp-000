let seconds = 0;
let counter = document.getElementById("counter");
const commentSubmit = document.querySelector('#submit')
const commentList = document.querySelector('#list')
const inputBox = document.querySelector('input')
let paused = false;


startCounter();
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
document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("pause");
    button.addEventListener("click", pause);
})
// end of pause button code

// plus & minus buttons

let elPlus = document.getElementById('plus');
let elMinus = document.getElementById('minus');

function plus() {
    seconds++;
}

function minus() {
    seconds--;
}

elPlus.addEventListener('click', plus, false);
elMinus.addEventListener('click', minus, false);

// end of plus & minus buttons

// like button
const heart = document.querySelector('#heart');
let likes = {};
const likesList = document.querySelector('.likes')


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

heart.addEventListener('click', function(){likeANumber(seconds)});

// end of likes

//leave a comment

commentSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    commentList.innerHTML += `<p>${inputBox.value}</p>`
    inputBox.value = '';
})