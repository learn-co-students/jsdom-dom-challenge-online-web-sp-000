document.addEventListener('DOMContentLoaded', function() {
    interval = setInterval(incrementCounter, 1000);
    plus.addEventListener('click', incrementCounter);
    minus.addEventListener('click', decrementCounter);
    heart.addEventListener('click', liked);
    pause.addEventListener('click', pauseInterval);
})

let counter = document.getElementById('counter');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let heart = document.getElementById('heart');
let ul = document.getElementsByClassName('likes')[0];
let submit = document.getElementById('submit');
let listItems = ul.children;
let interval;
let pause = document.getElementById('pause');

function incrementCounter() {
    counter.innerText = (parseInt(counter.innerText) + 1).toString();
}

function decrementCounter() {
    counter.innerText = (parseInt(counter.innerText) - 1).toString();
}

function liked() {
    if (!!listItems.length) {     
        for (const item of listItems) {
            if (item.dataset.num === counter.innerText) {
                item.children[0].innerText = (parseInt(item.children[0].innerText) + 1).toString();
                return true;
            }
        } 
        let li = document.createElement('li');
        li.dataset.num = counter.innerText;
        ul.appendChild(li);
        li.innerText = `${counter.innerText} has been liked `
        let span = document.createElement('span');
        li.appendChild(span);
        span.innerText = '1';
    } else {
        let li = document.createElement('li');
        li.dataset.num = counter.innerText;
        ul.appendChild(li);
        li.innerText = `${counter.innerText} has been liked `
        let span = document.createElement('span');
        li.appendChild(span);
        span.innerText = '1';
    }   
}

function pauseInterval() {
    if (pause.innerText === 'pause') {
        clearInterval(interval);
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        pause.innerText = 'resume';
    } else {
        interval = setInterval(incrementCounter, 1000);
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
        pause.innerText = 'pause';
    }

}

function addComment() {
    const div = document.getElementById('list');
    const p = document.createElement('p');
    p.innerText = document.getElementById('comment-input').nodeValue;
}