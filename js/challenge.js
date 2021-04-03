document.addEventListener("DOMContentLoaded", startCounter);

 const counter = document.getElementById("counter");
 let counterNumber = parseInt(counter.innerText, 10);
 let seconds;

 function startCounter () {
   seconds = setInterval(increaseCounter, 1000);
   increaseCounter();
 }

 function increaseCounter() {
   counterNumber++;
   counter.innerText = counterNumber.toString();
 }

 function decreaseCounter() {
   counterNumber--;
   counter.innerText = counterNumber.toString();
 }

 const plusButton = document.getElementById("plus");
 const minusButton = document.getElementById("minus");

 document.addEventListener("click", function(event) {
   if (event.target == plusButton) {
     increaseCounter();
   } else if (event.target == minusButton) {
     decreaseCounter();
   } else if (event.target == likeButton) {
     addLike();
   } else if (event.target == pauseButton) {
     pauseCounter();
   }
 });

 const likeButton = document.getElementById("heart");
 const likes = document.getElementById("likes");

 let likesLi;
 let likedNumbers = {};

 function addLike() {
   if (Object.keys(likedNumbers).includes(counterNumber.toString())) {
     updateLike();
   } else {
     likesLi = document.createElement('li');
     addFirstLike();
   }
 }

 function addFirstLike() {
   likedNumbers[counterNumber] = 1;
   likesLi.id = `li-${counterNumber}`;
   likesLi.innerText = `${counterNumber} has been liked 1 time.`
   likes.appendChild(likesLi);
 }

 function updateLike() {
   likedNumbers[counterNumber] += 1;
   let listItem = document.getElementById(`li-${counterNumber}`);
   listItem.innerText = `${counterNumber} has been liked ${likedNumbers[counterNumber]} times.`;
 }

 const pauseButton = document.getElementById("pause");
 const allButtons = document.getElementsByTagName("button");

 function pauseCounter() {
   if (pauseButton.innerText == 'pause') {
     clearInterval(seconds);
     pauseButton.innerText = 'resume';

     for (let i = 0; i < allButtons.length; i++) {
       if (allButtons[i].id != 'pause') {
         allButtons[i].disabled = true;
       }
     }
   } else if (pauseButton.innerText == 'resume') {
     startCounter();
     pauseButton.innerText = 'pause';

     for (let i = 0; i < allButtons.length; i++) {
       allButtons[i].disabled = false;
     }
   }  
 }

 const commentForm = document.getElementById('comment-form');
 const commentsList = document.getElementById('list');

 commentForm.addEventListener("submit", addComment);

 function addComment(event) {
   
   event.preventDefault();

   let comment = document.getElementById("comment-input");

   let newComment = document.createElement("p");
   newComment.innerText = comment.value;
   commentsList.appendChild(newComment);
   event.target.reset();

 }