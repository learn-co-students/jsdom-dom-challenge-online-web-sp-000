let incrementer = null;

let likesCounter = 0;
const likesNumber = document.createElement("h3");
document.querySelector('ul.likes').appendChild(likesNumber);



document.addEventListener("DOMContentLoaded", function(e) {
    console.log('@@hello', "The DOM has loaded");
    incrementTimer();
    myStopFunction();
    resumeButton();
    pauseButton();
    incrementByOne();
    decrementByOne();
    submitComments();
    incrementLikes();
});



function incrementTimer(){
    console.log('@@start');

    incrementer = setInterval(
        function increment_by_one(){
            const counter = document.getElementById('counter');
            counter.innerText = parseInt(counter.innerText) + 1;
        },
    1000);    

    console.log('@@end');
}


function pauseTimer(){
    clearInterval(incrementer);
}

function myStopFunction(){
    document.getElementById("pause").addEventListener("click", pauseTimer);
}

function resumeButton(){
    const pauseButton = document.getElementById("pause");
    pauseButton.onclick = function (){pauseButton.innerText = "resume"};
}


function pauseButton(){
    const resumeButton = document.getElementById("pause");

    if (resumeButton.innerText === "resume"){
        resumeButton.onclick = function (){resumeButton.innerText = "pause"};
    }

}


function addOne(){
    const counter = document.getElementById('counter');
    counter.innerText = parseInt(counter.innerText) + 1;
}

function incrementByOne(){
    document.getElementById("plus").addEventListener("click", addOne);
}

function subtractOne(){
    const counter = document.getElementById('counter');
    counter.innerText = Math.max(0, parseInt(counter.innerText) - 1);
}

function decrementByOne(){
    document.getElementById("minus").addEventListener("click", subtractOne);
}


function likesCount(){
    likesCounter = likesCounter + 1;
    document.querySelector('.likes h3').innerText = `${likesCounter} Likes`;

}

function incrementLikes(){
    document.getElementById("heart").addEventListener("click", likesCount);
}


function submitComments(){

    const form = document.getElementById('comment-form');
    form.onsubmit = submit;

    function submit(event){
        const newComment = document.getElementById("comment-input").value;
        const node = document.createElement("LI");
        document.getElementById("list").appendChild(node).innerHTML = newComment   
        event.preventDefault();
    }
}