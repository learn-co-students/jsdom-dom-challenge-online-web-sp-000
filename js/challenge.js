document.addEventListener("DOMContentLoaded", () => {
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const likes = document.querySelector(".likes");
    const comments = document.querySelector(".comments");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentSubmit = document.getElementById("submit");
    const counter = document.getElementById("counter");

    plus.addEventListener("click", () => {
        counter.innerText++;
    });

    minus.addEventListener("click", () => {
        counter.innerText--;
    });

    heart.addEventListener("click", () => {
        let counterNumber = document.getElementById(`${counter.innerText}`);
        counterNumber ? counterNumber.children[0].innerText++ : likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}> 1 </span> times.</li>`;
    });

    pause.addEventListener("click", () => {
        if (pause.innerText === "pause") {
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            commentSubmit.disabled = true;
            pause.innerText = "resume";
            clearInterval(count);
        } else if (pause.innerText === "resume") {
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            commentSubmit.disabled = false;
            pause.innerText = "pause";
            count = setInterval(() => {
                counter.innerText++
            }, 100);
    }});

    let count = setInterval(() => {
        counter.innerText++
    }, 1000)

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let input = document.createElement("text");
        input.innerText = commentInput.value;
        comments.appendChild(input);
        comments.innerHTML += `<br>`;
    })
});

