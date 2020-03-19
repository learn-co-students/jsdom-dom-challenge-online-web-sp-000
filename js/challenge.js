<!-- counter -->
let seconds = 0;
let counter = document.getElementById("counter");
// let startCounter = setInterval(timer, 1000);
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
let elHeart = document.getElementById('heart');


function like() {
    let li = document.createElement('li');
    let like = document.createTextNode(`${seconds} has been liked ${clickCounter()} time`);
    li.appendChild(like);
    let position = document.getElementsByTagName('ul')[0];
    position.appendChild(li);
}

function clickCounter() {
    let value = parseInt(document.getElementById('heart').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    return value;
}

elHeart.addEventListener('click', like, false);

// end of likes

//leave a comment

let comment = document.getElementById('comment-input');
let submit = document.getElementById('submit');

function post() {
    let p = document.createElement('p');
    p.appendChild(comment);
    let placement = document.getElementById('list');
    placement.appendChild(p);
}

submit.addEventListener('click', post, false);
