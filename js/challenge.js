document.addEventListener("DOMContentLoaded", function() {

    manualIncrease();
    manualDecrease();
    pause();
    like();
    addComment();
})

let isPaused = false;

let likedNumbers = {};

let counterBox = document.querySelector('#counter');

let counter = 0;

function increment() {
    counter += 1;
    counterBox.innerText = counter;
}

let countSeconds = setInterval(increment, 1000);

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
        if (!isPaused) {
            isPaused = true;
            clearInterval(countSeconds);
            counterBox.innerText = counter;
            button.innerText = 'resume';
        } else {
            isPaused = false;
            countSeconds = setInterval(increment, 1000);
            button.innerText = 'pause';
        }
    })
}

function like() {
    let button = document.querySelector('button#heart');

    button.addEventListener('click', event => {
        const newLikeNum = counterBox.innerText;
        const likeList = document.querySelector('.likes');

        if (!likedNumbers[newLikeNum]) {
            likedNumbers[newLikeNum] = 1;
        } else {
            likedNumbers[newLikeNum] += 1;
        }

        if (!document.getElementById(`${newLikeNum}`)) {
            const newLikeLine = document.createElement('li');
            newLikeLine.id = newLikeNum;
            likeList.append(newLikeLine);
            newLikeLine.innerText = `${newLikeNum} has been liked ${likedNumbers[newLikeNum]} time(s)`
        } else {
            const newLikeLine = document.getElementById(`${newLikeNum}`)
            newLikeLine.innerText = `${newLikeNum} has been liked ${likedNumbers[newLikeNum]} time(s)`
        }




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