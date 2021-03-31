document.addEventListener("DOMContentLoaded", function() {
    countSeconds();
    manualIncrease();
    manualDecrease();
    pause();
    // like();
    addComment();
})

let counterBox = document.querySelector('#counter');

let counter = 0;

function countSeconds() { 

    setInterval(function() {
        counter += 1;
        counterBox.innerText = counter;
    }, 1000);
}


function manualIncrease() {
    let button = document.querySelector('button#plus');

    button.addEventListener('click', event => {
            counter += 1;
            counterBox.innerText = counter;
    });
}

function manualDecrease() {
    let button = document.querySelector('button#minus');

    button.addEventListener('click', event => {
        counter -= 1;
        counterBox.innerText = counter;
    });
}

// HELP NEEDED ON PAUSE AND LIKE
function pause() {
    let button = document.querySelector('button#pause');

    button.addEventListener('click', event => {
        clearInterval();
        counterBox.innerText = counter;

    })
}

function like() {
    let button = document.querySelector('button#heart');

    button.addEventListener('click', event => {
        const newLikeNum = counter.innerText;
        const likeList = document.createElement('ul');
        const newLikeLine = document.createElement('li');

        // ideal output on each line
        // `${newLikeNum} has been liked ${timesLiked} time(s)`

        likeList.append(newLikeLine);
    });
}

function addComment() {
    let form = document.querySelector('#comment-form');
    let input = document.querySelector('#comment-input');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const commentContent = input.value;
        const comments = document.querySelector('#list');

        const newComment = document.createElement('p');
        newComment.innerHTML = commentContent;

        comments.append(newComment);
    })
}