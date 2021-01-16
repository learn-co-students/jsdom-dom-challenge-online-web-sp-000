
document.addEventListener("DOMContentLoaded", () =>{

 let minus = document.getElementById('minus');
 let plus = document.getElementById('plus' );
 let heart = document.getElementById('heart');
 let pause = document.getElementById('pause');
 let counter = document.getElementById('counter');
 let likes = document.querySelector('ul.likes');
 let comment = document.getElementById('comment-input');
 let list = document.getElementById('list');
 let commentForm = document.getElementById("comment-form");

let intervalID = 0;



//the seconds counter

intervalID = window.setInterval(() => {plusOne()}, 1000);

 function plusOne(){
     counter.textContent = parseInt(counter.textContent) + 1; 
 }

 function minusOne(){
    counter.textContent = parseInt(counter.textContent) - 1; 
}

//the pause button

pause.addEventListener("click", () => {
    pauseGame();
})
  
function pauseGame(){
    let otherButtons = [minus, plus, heart];
    otherButtons.forEach(btn => toggleDisabled(btn));
}


function toggleDisabled(btn){ 
    if (btn.disabled == true ){
        btn.disabled = false;
        pause.textContent = "pause";
        clearInterval(intervalID);
        intervalID = window.setInterval(() => {plusOne()}, 1000);
    } else {
        btn.disabled = true; 
        pause.textContent = "resume";
        clearInterval(intervalID);
    }
}


// plus and minus buttons

plus.addEventListener("click", () => { plusOne()});
minus.addEventListener("click", () => {minusOne()});

// like button
heart.addEventListener("click", () => { likeNumber() });


function likeNumber(){
    let currentNumber = counter.textContent
    let li = document.createElement('li');
    li.textContent = `You liked the number ${currentNumber}`;
    likes.appendChild(li);
}


//comment

commentForm.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    
    addComment();
 })

function addComment(){
    
if (comment.value != ""){
let p = document.createElement("p");
p.textContent = comment.value;
console.log("heeeeyyyyy");
list.appendChild(p);
comment.value = "";
}
}


});
