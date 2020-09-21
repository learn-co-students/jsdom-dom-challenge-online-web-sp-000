let incrementer = null;
let likesCounter = 0;

const counter = document.getElementById('counter');
const likesNumber = document.createElement("h3");


document.querySelector('ul.likes').appendChild(likesNumber);


document.addEventListener("DOMContentLoaded", function(e) {
    //console.log('@@hello', "The DOM has loaded");
    incrementTimer();

    stopTimer();
    
    togglePauseButton();

    userIncrementByOne();
    userDecrementByOne();

    submitComments();
    incrementLikes();
});



function incrementTimer(){
    console.log('@@start');

    incrementer = setInterval(
        function increment_by_one(){
            counter.innerText = parseInt(counter.innerText) + 1;
        },
    1000);    

    console.log('@@end');
}


function stopTimer(){
    function stopIncrementing(){
        clearInterval(incrementer);    
    }
    document.getElementById("pause").addEventListener("click", stopIncrementing);
}


function togglePauseButton(){
    const pauseButton = document.getElementById("pause");

    pauseButton.onclick = function (){

        if (pauseButton.innerText === "pause"){
            pauseButton.innerText = "resume";
        }    
        else if (pauseButton.innerText === "resume"){
            pauseButton.innerText = "pause";
            incrementTimer();
        }        
    }    

}


function userIncrementByOne(){

    function addOne(){
        counter.innerText = parseInt(counter.innerText) + 1;
    }

    document.getElementById("plus").addEventListener("click", addOne);
}


function userDecrementByOne(){

    function subtractOne(){
        counter.innerText = Math.max(0, parseInt(counter.innerText) - 1);
    }    

    document.getElementById("minus").addEventListener("click", subtractOne);
}


function incrementLikes(){

    function likesCount(){
        likesCounter = likesCounter + 1;
        document.querySelector('.likes h3').innerText = `${likesCounter} Likes`;

    }    

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