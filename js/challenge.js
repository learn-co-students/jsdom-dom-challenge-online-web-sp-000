const counter = document.querySelector('#counter');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const like = document.querySelector('#heart');
const likes = document.querySelector('.likes');
const form = document.querySelector('#comment-form')
const comments = document.querySelector('.comments')
let count = 0;
let likeHash = {};

function incrementCounter() {
  count += 1;
  counter.innerHTML = count;
};
function decrementCounter() {
  count -= 1;
  counter.innerHTML = count;
};
function likeNumber() {
  const stringCount = count.toString()
  if (likeHash[stringCount]) {
    likeHash[stringCount]+= 1;
  } else {
    likeHash[stringCount]= 1;
  };
  let text = "";
  for (const [key, value] of Object.entries(likeHash)) {
    text += `<li>${key} has ${value} likes.</li>`;
  };
  likes.innerHTML = text;
};
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let text = "<li>" + form.elements[0].value + "</li><br>";
  list.innerHTML += text
});
window.setInterval(incrementCounter, 1000);
plus.addEventListener('click', incrementCounter);
minus.addEventListener('click', decrementCounter);
like.addEventListener('click', likeNumber);
