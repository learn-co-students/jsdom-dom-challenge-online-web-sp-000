let counterId = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let commentsList = document.getElementById('list');
let commentForm = document.getElementsByTagName('form')[0];
let commentInput = document.getElementById('comment-input');
let likes = document.querySelector('.likes');


let counter = 0

//counter
setInterval(function(){
    counterId.innerText = counter;
    counter += 1;
}, 1000);

//increment & decrement counter manually
minus.addEventListener('click', function(){
    counter -= 1;
    counterId.innerText = parseInt(counterId.innerText) - 1;
});

plus.addEventListener('click', function(){
    counter += 1;
    counterId.innerText = parseInt(counterId.innerText) + 1;
});

//pause the counter
pause.addEventListener('click', function(){
    let buttons = [minus, plus, heart];
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].attributes.disabled === undefined || buttons[i].attributes.disabled === false) {
            buttons[i].setAttribute("disabled", true);
            pause.innerText = "resume";
        } else {
            buttons[i].removeAttribute("disabled");
            pause.innerText = "pause";
        }
    }
});

//heart button adds likes
heart.addEventListener('click', function(e){
    let like = document.createElement('li');
    like.innerText = `The number ${e.target.offsetParent.children[1].innerText} has been liked `;
    likes.appendChild(like);
});

//leave comments 
commentForm.addEventListener('submit', function(e){
    e.preventDefault();
    let comment = document.createElement('li');
    comment.innerText = e.target.elements[0].value;
    commentsList.appendChild(comment);
    commentInput.value = '';
});

