const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');

const likes = document.getElementsByClassName('likes')[0];

const comments = document.getElementById('list');
const commentForm = document.getElementById('comment-form');

plus.addEventListener('click', increaseCounter);
minus.addEventListener('click', decreaseCounter);
heart.addEventListener('click', addLike);
commentForm.addEventListener('submit', displayComment);

function increaseCounter() {
  counter.textContent = parseInt(counter.textContent)++;
}

function decreaseCounter() {
  counter.textContent = parseInt(counter.textContent)--;
}

function addLike() {
  const currentNum = parseInt(counter.textContent);
  const allNumAlreadyLiked = Array.from(likes.children);
  
  const addLike = document.createElement('li');
  addLike.textContent = `${currentNum} has been liked # times`;
  likes.append(addLike);
}

function displayComment(e) {
  e.preventDefault();
  
  const commentFormData = new FormData(e.target);
  const commentText = commentFormData.get('comment');
  
  const comment = document.createElement('p');
  comment.textContent = commentText; 
  comments.append(comment);
  
  e.target.reset();
}