document.addEventListener("DOMContentLoaded", () => {
    
    //query select element 'counter'
    let countBox = document.getElementById('counter');

    //function timer per 1000 milliseconds
    const a = setInterval(function() {
        countBox.innerText++ ;
    }, 1000);

    //minus button event listener
    const minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', function(event) {
        countBox.innerText-- ;
    })

    //plus button event listener
    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', function(event) {
        countBox.innerText ++ ;
    })

    //pause button event listener
    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', stopTimer);

    //function pause timer
    function stopTimer() {
        clearInterval(a); //need to be in DOMContentLoaded because "a" references "const a = setInterval..." above
    }
       
    //submit event listener
    const form = document.getElementById('comment-form');
    form.addEventListener("submit", createComment);

    //heart button event listener
    const heartButton = document.getElementById('heart');
    heartButton.addEventListener('click', countHearts);


    //function create comment
    function createComment(event) {
        const commentInput = document.getElementById('comment-input');
        const newComment = document.createElement("p");
        newComment.innerText = commentInput.value;
        appendNewComment(newComment);
        event.preventDefault(); //necessary to persist comment, otherwise page will automatically refresh after submitting and lose the new comment
    }

    //add comment to div "list"
    function appendNewComment(comment) {
        document.getElementById("list").appendChild(comment);
    }

    //function count hearts
    function countHearts(event) {
        const counterInstance = countBox.innerText;
        const matchId = document.getElementById(`${counterInstance}-liked`);

        if ((matchId != 'undefined') && (matchId != null)) {
            let times = parseInt(matchId.innerText.split(" ")[4]) 
            matchId.innerHTML = `${counterInstance} has been liked ${times+ 1} times`
        } else {
            const newLike = document.createElement("li");
            const newLikeId = newLike.id = `${counterInstance}-liked`;
            let count = 0;
            newLike.innerHTML = `${counterInstance} has been liked ${count+= 1} time`
            appendNewLike(newLike);
        }
        event.preventDefault();
    }

    //add like to ul "likes"
    function appendNewLike(like) {
        document.getElementById("likes").appendChild(like);
    }
});