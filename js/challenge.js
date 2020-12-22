let count = 0;
let paused = false;
let intervalId;
const counterEl = document.getElementById('counter');
const minusEl = document.getElementById('minus');
const plusEl = document.getElementById('plus');
const heartEl = document.getElementById('heart');
const pauseEl = document.getElementById('pause');

const displayCount = (input) => {
    counterEl.innerText = input;
}

const autoCounter = () => {
    count += 1;
    displayCount(count);
};

const adjustCounter = (input) => {
    count = count + input;
    displayCount(count);
};

const pauseCounter = () => {
    window.clearInterval(intervalId);
    paused = true;
}

const playCounter = () => {
    intervalId = window.setInterval(autoCounter, 1000);
    paused = false;
}

const hideElements = () => {

}

const addEventListeners = () => {
    minusEl.onclick = function() {
        adjustCounter(-1);
    }
    
    plusEl.onclick = function() {
        adjustCounter(1);
    }
    pauseEl.onclick = function() {
        if (paused == false) {
            pauseCounter();
            pauseEl.innerText = 'resume';
    
        } else {
            playCounter();
            pauseEl.innerText = 'pause';
        }
    }
}

const init = () => {
    addEventListeners();
    playCounter();
}

window.onload = function() {
    init();
};
