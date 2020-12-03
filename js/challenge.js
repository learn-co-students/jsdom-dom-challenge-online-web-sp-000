let counter = document.getElementById("counter");
let addCount = document.getElementById("plus");
let subtractCount = document.getElementById("minus");
let pause = document.getElementById("pause");
let clock = setInterval(countUp, 1000);
let likeButton = document.getElementById("heart");
let commentForm = document.getElementById("comment-form");
let likes = document.querySelector(".likes");
var allLikes = {}; 

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
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
}

function resumeCount() {
    clock = setInterval(countUp, 1000);
    pause.innerText = "pause";
    plus.disabled = false;   
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
}

addCount.addEventListener('click', (e) => {
    countUp();
    console.log('addOne');
});

subtractCount.addEventListener('click', (e) => {
    countDown();
    console.log('subtractOne');
});

likeButton.addEventListener('click', (e) => {
    let i = document.createElement("Li"); 
    let key = parseInt(counter.innerHTML);   
    let value = 0;

    if (allLikes[key] == undefined) { 
        allLikes[key] = 1;
    } else {
        value = allLikes[key];               
        allLikes[key] = value + 1;    
    }
    i.innerHTML = `${counter.innerHTML} has been liked ${allLikes[key]} time`;
    likes.append(i);
});

pause.addEventListener('click', (e) => {
    if (pause.innerText == "pause") {
        pauseCount();
    } else {
        resumeCount();
    }
}); 

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let comment = document.getElementById('comment-input').value;
    let x = document.createElement("Li");
    x.innerHTML = comment;
    list.append(x);
}); 
