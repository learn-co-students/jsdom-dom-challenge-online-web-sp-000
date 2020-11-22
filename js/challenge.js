let counter = document.getElementById("counter");
let addCount = document.getElementById("plus");
let subtractCount = document.getElementById("minus");
let pause = document.getElementById("pause");
let clock = setInterval(countUp, 1000);
let likeButton = document.getElementById("heart");
let commentForm = document.getElementById("comment-form");
let likes = document.querySelector(".likes");
let likeLog = {};


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
    let y = document.createElement("LI"); 
    console.log(counter.innerHTML);
    // console.log(likeLog[counter.innerHTML]);
    // console.log(likeLog[counter.innerHTML]).value;


    likeLog.set(counter.innerHTML, 0);
    console.log(likeLog);

    y.innerHTML = `${counter.innerHTML} has been liked 1 time`;
    likes.append(y);
    
    // let comment = document.getElementById('comment-input').value;
    // let x  = document.createElement("LI");
    // x.innerHTML = comment;
    // list.append(x);
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
    let x  = document.createElement("LI");
    x.innerHTML = comment;
    list.append(x);
});