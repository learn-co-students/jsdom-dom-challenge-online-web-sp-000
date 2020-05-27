let counter = document.getElementById('counter');

// Comments
let comments = document.getElementById('list');
let commentForm = document.getElementById('comment-form');
const user_input = document.getElementById('comment-input');
let ul = document.createElement('ul');
comments.appendChild(ul);

commentForm.addEventListener('submit', function(event){
  let li = document.createElement('li');
  li.innerHTML = user_input.value;
  ul.appendChild(li);
  event.preventDefault();
  user_input.value = "";
});
