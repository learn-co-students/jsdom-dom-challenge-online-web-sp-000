let interval;
const counter = document.getElementById("counter");
let counterNumber = parseInt(counter.innerText);
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const submit = document.getElementById('submit');
const likes = document.querySelector('ul.likes');
const list = document.getElementById('list');
let counterHash = {};

function intervalCounter() {
    interval = setInterval(incrementCounter, 1000);
}

intervalCounter();

function incrementCounter() {
    counter.innerText = counterNumber++;
}

function decrementCounter() {
    counter.innerText = counterNumber--;
}

minus.addEventListener('click', decrementCounter);
plus.addEventListener('click', incrementCounter);
heart.addEventListener('click', addLike);
submit.addEventListener('click', addComment);

function addComment(event) {
    event.preventDefault();
    let input = document.getElementById('comment-input').value;
    const li = document.createElement('li');
    li.innerText = input;
    list.append(li);
    input = "";
}

function addLike() {
    let index = counterNumber;
    counterHash[index] = counterHash[index] || 0;
    counterHash[index]++;
    showLikes();
}

function showLikes() {
    likes.innerHTML = "";
    for (let key in counterHash) {
        let li = document.createElement('li');
        li.innerText = `${key} has been liked ${counterHash[key]} times.`;
        likes.appendChild(li);
    }
}

function toggle(arg) {
    if (arg.disabled == true) {
        arg.disabled = false;
    } else {
        arg.disabled = true;
    };
}

function toggleAll() {
    toggle(minus);
    toggle(plus);
    toggle(heart);
    toggle(submit);
}

pause.addEventListener('click', () => {
    toggleAll();
    if (pause.innerText == "pause") {
        pause.innerText = "resume";
        clearInterval(interval);
    } else {
        pause.innerText = "pause";
        intervalCounter();
    };
});
