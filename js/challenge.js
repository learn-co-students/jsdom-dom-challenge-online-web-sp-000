document.addEventListener("DOMContentLoaded", () => {

    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let pause = document.getElementById("pause");
    let counter = document.querySelector("#counter");
    let submitComment = document.querySelector("#submit");
    let commentForm = document.querySelector("#comment-form");
    let commentsList = document.querySelector("#list");
    let likes = document.querySelector(".likes");

    let count = setInterval(function(){
        counter.innerText++;
    }, 1000);

    plus.addEventListener("click", function(){
        counter.innerText++;
    })

    minus.addEventListener("click", function() {
        counter.innerText--;
    })

    pause.addEventListener("click", function(){
        if (pause.innerText === "pause"){
            clearInterval(count);
            pause.innerText = "resume";

            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submitComment.disabled = true;

        }
        else if (pause.innerText === "resume") {
            count = setInterval(function(){
                counter.innerText++;
            }, 1000);
            pause.innerText = "pause";

            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submitComment.disabled = false;
        }
    });

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let commentInput = document.getElementById("comment-input");
        let inp = document.createElement('text');
        inp.innerText = commentInput.value;
        commentsList.appendChild(inp);
        commentsList.innerHTML += `<br><br>`
        
    });


    heart.addEventListener("click", function() {
        let amountOfLikes = document.getElementById(`${counter.innerText}`);
        amountOfLikes ? amountOfLikes.children[0].innerText++ : 
        likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}> 1 </span> times.</li>`
    });


});