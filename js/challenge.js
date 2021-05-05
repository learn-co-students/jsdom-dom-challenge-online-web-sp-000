/*
As a user, I should see the timer increment every 
second once the page has loaded.
*/

let i =- 1
let j = 0
let interval = setInterval(increment, 1000)
function increment() {
  i++;
  document.querySelector('h1#counter').textContent = i
  j = 0
}
increment()

/*
As a user, I can manually increment and decrement
the counter using the plus and minus buttons.
*/

document.getElementById('minus').addEventListener('click', function(){
  i--
  document.querySelector('h1#counter').textContent = i
})
document.getElementById('plus').addEventListener('click', function() {
  i++
  document.querySelector('h1#counter').textContent = i
})

/*
As a user, I can 'like' an individual number of the
counter. I should see the count of the number of 
'likes' associated with that number displayed.
*/

document.getElementById('heart').addEventListener('click', function(){
  j ++
  let li = document.createElement('li')
  let node = document.createTextNode(i + " has been liked " + j + " time(s).")
  let likes = document.querySelector('.likes')
  let lastLike = document.querySelector('.likes').lastChild
  li.appendChild(node);
  if(j>1){
   lastLike.replaceWith(li)
  } else {
    likes.appendChild(li);
  }
})

/*
As a user, I can pause the counter, which should:
pause the counter
disable all buttons except the pause button
switch the label on the button from "pause" to "resume"
*/

document.getElementById("pause").addEventListener("click", function(){
  if(document.querySelector('#pause').innerText == "pause") {
    clearInterval(interval)
    document.querySelector('#pause').innerText = "resume"
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
  } else {
    interval = setInterval( increment, 1000);
    document.querySelector('#pause').innerText = "pause"
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
  }
});

/*
As a user, I should be able to click the "restart" 
button to restart the counter and re-enable the buttons.
*/
//! There is no "restart" class or id so I added one to the index.html with the buttons under the counter
/*
As a user, I can leave comments on my gameplay, 
such as: "Wow, what a fun game this is."
*/

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  let comment = document.querySelector('input#comment-input').value
  let commentsList = document.querySelector('.comments')
  let p = document.createElement("p");
  let node = document.createTextNode(comment)
  p.appendChild(node);
  commentsList.appendChild(p);
  document.querySelector('input#comment-input').value = ''
});