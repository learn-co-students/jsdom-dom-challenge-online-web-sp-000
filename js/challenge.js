
const counter = document.getElementById('counter');
const likeList = document.getElementById('likesList')
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const userForum = document.getElementById('comment-form');


function nextNumber() {
    counter.innerText++;
}

function previousNumber() {
    counter.innerText--;
}

function likeNumber(){
    const time = counter.innerText;
    let likedElement = document.getElementById(`like${time}`)
    if (likedElement === null){
        likedElement = document.createElement("li");
        likedElement.id = `like${time}`
        likedElement.dataset.likes = 1;
        likeList.appendChild(likedElement);
    } else {
       likedElement.dataset.likes++;
    }
    likedElement.innerText = `${time} was liked ${likedElement.dataset.likes}`
}
function pauseAll(){
    if (pause.innerText === 'pause') {
      pause.innerText = 'resume';
      window.clearInterval(increment);
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
    } else {
      pause.innerText = 'pause'
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      increment = window.setInterval(nextNumber, 1*1000)
    }
}
function addComment(event){
    event.preventDefault();
    let newElement = document.createElement('li');
    newElement.innerText = userForum[0].value;
    document.getElementById('list').appendChild(newElement);
}



let increment = window.setInterval(nextNumber, 1*1000);
minus.addEventListener('click', previousNumber);
plus.addEventListener('click', nextNumber);
heart.addEventListener(`click`, likeNumber);
pause.addEventListener('click', pauseAll);


userForum.addEventListener("submit", addComment, event)
/* A Counter that increases by 1 each second
brainstorming:
h1 id = "counter"
function that:  adds 1 to a 'seconds' object 
                grabs the html id called 'counter
                sets the inner text of the counter to equal the seconds object
                use setInterval method to initiate incrementSeconds funtion, and set cap for seconds


let seconds = 0;
;

function incrementSeconds() {
    seconds += 1;
    counter.innerText = seconds;
}

let cancel = setInterval(incrementSeconds, 1000)

 1 second Adjustment
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#timeActions").addEventListener('plus', function(event){
        event.preventDefault();
        document.getElementById("counter").innerHTML += 1
        console.log(x)
    })
})
/*
- Plus Minus buttons that increment or decrement the counter by 1
        create event listener for a click on the plus or minus and if clicked, changes "counter" integer
        button id = minus
        button id = plus
*/



/*  

    - a 'like' button that adds a like for the number that is currently displayed by the timer
        use event.preventDefault() method + increments the number of likes by 1 aka +=
        an if statement that occurs when the like button is clicked for the number counted

    - a comment box that adds comments when submitted
        use event.preventDefault() method + adds text to the page 

    - pause the counter
        within the counter loop, create a function that stops the counter from increasing
        the function also disables all buttons exept the pause button. 
        the text of the button should be "resume" when the pause button is clicked 
        when the 'resume' button is clicked, the button should read "pause" and the other buttons should stop being disabled

*/