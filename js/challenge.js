
let nIntervalId
const counter = document.getElementById('counter');
let buttons = document.getElementsByTagName('button');
const pause = document.getElementById('pause');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const like = document.getElementById('heart');
const submit = document.getElementById('submit');


document.addEventListener("DOMContentLoaded", () => {
nIntervalId = setInterval(startCounter, 1000);

plus.addEventListener('click', () => {counter.innerHTML++});
minus.addEventListener('click', () => {counter.innerHTML--});
like.addEventListener('click', numberLikes)

submit.addEventListener('click', addComment)
})


function startCounter(){
    counter.innerText++
    pause.addEventListener('click', () => {
        pause.innerHTML == 'resume' ? enableButtons() : disableButtons()
    })
}

function enableButtons(){
    for (i = 0; i < buttons.length; i++){
        const button = buttons.item(i)
        button.disabled = false
    }
    pause.innerHTML = 'pause'
    nIntervalId = setInterval(startCounter, 1000);
}
function disableButtons(){
    clearInterval(nIntervalId)
    for (i = 0; i < buttons.length; i++){
        const button = buttons.item(i)
        button.disabled = true
    }
    buttons.namedItem('pause').disabled= false
    pause.innerHTML = 'resume'

}
function numberLikes(){
    let counterN = counter.innerHTML;
const likesCount = document.getElementsByClassName('likes')[0];


}

// comment div is a list, class is comments
// comment-form is the form id
function addComment(e){
    e.preventDefault()
    const uComments = document.getElementById('list');
    const allComments = document.getElementById('comment-form');
    
    let commentInput = document.getElementById("comment-input")["value"];
    uComments.innerText = commentInput;
    
    document.forms["comment-form"].reset();
  }