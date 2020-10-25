let count;
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let counter = document.getElementById('counter');
let likeCount;
function addCounter() {
   counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
 };
 function minusCounter() {
   counter.innerHTML = parseInt(counter.innerHTML, 10) - 1;
 }
 function increment() {
   addCounter();
   likeCount = 0;
 }
 function stopCounter() {
   clearTimeout(count)
 }
 function likes() {
   likeCount++;
   const li = document.createElement("li");
   const node = document.createTextNode(`${counter.textContent} has been liked ${likeCount} time(s).`);
   const likes = document.querySelector('.likes');
   const lastLike = likes.lastChild;
   li.appendChild(node);
   if(likeCount>1){
     lastLike.replaceWith(li);
   }else {
     likes.appendChild(li);
   }
 };
 function comment() {
   event.preventDefault();
   const list = document.getElementById('list');
   const comment = document.getElementById('comment-input');
   const p = document.createElement('p');
   list.appendChild(p);
   p.innerHTML = comment.value;
   document.getElementById('comment-form').reset();
 };
 function activeButtons() {
   plus.addEventListener("click", addCounter); // listens for plus being pressed
   minus.addEventListener("click", minusCounter); // listens for minus being pressed
   heart.addEventListener("click", likes);
   document.addEventListener("submit", comment);
 }
 function deactiveButtons() {
   plus.removeEventListener("click", addCounter); // listens for plus being pressed
   minus.removeEventListener("click", minusCounter); // listens for minus being pressed
   heart.removeEventListener("click", likes);
   document.removeEventListener("submit", comment);
 }

 document.addEventListener('DOMContentLoaded', begin)
 function begin() { // starts counter when page loads
   count = setInterval(increment, 1000)
   likeCount = 0;
   activeButtons()
 };
pause.addEventListener("click", function() {
  if (pause.innerHTML === " pause ") {
    pause.innerHTML = "resume";
    deactiveButtons();
    stopCounter();
  }else if (pause.innerHTML === "resume") {
    pause.innerHTML = " pause ";
    activeButtons();
    begin()
  }
});
