document.addEventListener('DOMContentLoaded', (e) => {
    const counter = document.getElementById('counter');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const heart = document.getElementById('heart');
    const likes = document.querySelector('ul.likes');
    const pause = document.getElementById('pause');
    const submitBut = document.getElementById('submit');
    const newCommentContent = document.getElementById('comment-input');
    const comments = document.getElementById('list');

    let countInterval;
    let isPaused = false;

    function setCount() {
        countInterval = setInterval(function() {
            if (!isPaused) {
                counter.innerHTML = parseInt(counter.innerHTML) + 1;
            }
        }, 1000);
    }

    // Feature Code Execution
    // Automatic counter
    setCount()

    // Decrease the counter manually
    minus.addEventListener("click", function() {
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
    })

    // Increase the counter manually
    plus.addEventListener("click", function() {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    })

    // Like a number
    heart.addEventListener("click", function() {
        let previousLike = likes.querySelector(`[num="${counter.innerHTML}"]`);

        if (previousLike === null) {
            let newLike = document.createElement('li');
            newLike.setAttribute('num', counter.innerHTML);
            newLike.setAttribute('num-count', 1);
            newLike.innerHTML = `${newLike.getAttribute('num')} has been liked ${newLike.getAttribute('num-count')} time.`;
            likes.appendChild(newLike);
        } else {
            previousLike.setAttribute('num-count', parseInt(previousLike.getAttribute('num-count')) + 1);
            previousLike.innerHTML = `${previousLike.getAttribute('num')} has been liked ${previousLike.getAttribute('num-count')} times.`;
        }
    })

    // Pause the counter
    pause.addEventListener("click", function() {
        if (isPaused === false) {
            isPaused = true;
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            pause.innerHTML = 'restart';
        } else {
            isPaused = false;
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            pause.innerHTML = 'pause';
        }
    })

    submitBut.addEventListener("click", (e) => {
        e.preventDefault();
        let newComment = document.createElement('p');
        newComment.innerHTML = newCommentContent.value;
        comments.appendChild(newComment);
        newCommentContent.value = "";
    })
})