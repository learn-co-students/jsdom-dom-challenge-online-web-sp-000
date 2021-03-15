document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter");
    const pause = document.getElementById("pause");
    const likeButton = document.getElementById("heart");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const submitButton = document.getElementById("submit");
    const commentList = document.getElementById("list");
    const commentInput = document.getElementById("comment-input");
    const commentForm = document.getElementById("comment-form");
    const likes = document.getElementsByClassName("likes")[0];
    // const likesArray = [];
    let counterValue = setInterval(counterIncrement, 1000);
    let gamePlay = true;

    function counterIncrement() {
        if (gamePlay === true) {
            counter.innerHTML++ 
        }
    };

    pause.addEventListener("click", function() {
        if (gamePlay === true) {
            gamePlay = false;
            pause.innerHTML = "resume";
            likeButton.disabled = true;
            minusButton.disabled = true;
            plusButton.disabled = true;
            submitButton.disabled = true;
            commentForm.disabled = true;
        }
          else {
            gamePlay = true;
            pause.innerHTML = "pause"
            likeButton.disabled = false;
            minusButton.disabled = false;
            plusButton.disabled = false;
            submitButton.disabled = false;
            commentForm.disabled = false;
        };
    });

    plusButton.addEventListener("click", function() {
        counter.innerHTML++
    });

    minusButton.addEventListener("click", function() {
        counter.innerHTML--
    });

    likeButton.addEventListener("click", function() {
        const likesList = document.createElement("li");
        let likesArray = document.createTextNode(`${counter.innerHTML} has been liked.`)
        likesList.appendChild(likesArray);
        likes.appendChild(likesList);
    });
});
