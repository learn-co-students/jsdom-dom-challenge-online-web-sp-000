let counter = document.getElementById("counter");
let addCount = document.getElementById("plus");
let subtractCount = document.getElementById("minus");
let pause = document.getElementById("pause");
let clock = setInterval(countUp, 1000);

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');
});

function countUp() {
    counter.innerHTML++;
}

function countDown() {
    counter.innerHTML--;
}

function pauseCount() {
    clearInterval(clock);
    pause.innerText = "resume";
}

function resumeCount() {
    clock = setInterval(countUp, 1000);
    pause.innerText = "pause";
}

addCount.addEventListener('click', (e) => {
    countUp();
    console.log('addOne');
});

subtractCount.addEventListener('click', (e) => {
    countDown();
    console.log('subtractOne');
});

pause.addEventListener('click', (e) => {
    if (pause.innerText == "pause") {
        pauseCount();
    } else {
        resumeCount();
    }
});