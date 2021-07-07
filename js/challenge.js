document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter");
    const pause = document.getElementById("pause");
    const like = document.getElementById("heart");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const submit = document.getElementById("submit");
    const commentForm = document.getElementById("comment-form");
    const likes = document.getElementsByClassName("likes")[0];
    
    let counterValue = setInterval(counterIncrement, 1000);
    let start = true;

    function counterIncrement() {
        if (start === true) {
            counter.innerHTML++ 
        }
    };

    pause.addEventListener("click", function() {
        if (start === true) {
            start = false;
            pause.innerHTML = "resume";
            like.disabled = true;
            minus.disabled = true;
            plus.disabled = true;
            submit.disabled = true;
            commentForm.disabled = true;
        }
          else {
            start = true;
            pause.innerHTML = "pause"
            like.disabled = false;
            minus.disabled = false;
            plus.disabled = false;
            submit.disabled = false;
            commentForm.disabled = false;
        };
    });

    plus.addEventListener("click", function() {
        counter.innerHTML++
    });

    minus.addEventListener("click", function() {
        counter.innerHTML--
    });

    like.addEventListener("click", function() {
        const likesList = document.createElement("li");
        let likesArray = document.createTextNode(`${counter.innerHTML} has been liked.`)
        likesList.appendChild(likesArray);
        likes.appendChild(likesList);
    });

    commentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const newComment = document.getElementById("comment-input").value
        const list = document.getElementById("list")
        const comment = document.createElement("p")
        comment.innerText = newComment
        list.appendChild(comment)
        commentForm.reset();
    });
});
