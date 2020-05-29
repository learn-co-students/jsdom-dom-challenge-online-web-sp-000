document.addEventListener("DOMContentLoaded", () => {
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const pause = document.getElementById("pause");
    const heart = document.getElementById("heart");
    const submit = document.getElementById("submit");
    const form = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const list = document.getElementById("list");


    function incrementCounter() {
        let counter = document.getElementById("counter");
        counter.innerText = parseInt(counter.innerText) + 1;
    }
    function decrementCounter() {
        let counter = document.getElementById("counter");
        counter.innerText = parseInt(counter.innerText) - 1;
    }

    let incrementer = setInterval(incrementCounter, 1000);

    plus.addEventListener('click', incrementCounter);
    minus.addEventListener('click', decrementCounter);
    heart.addEventListener('click', function() {
        const time = counter.innerText;
        const listNode = document.querySelector("ul");
        if (document.getElementById(time)) {
            let li = document.getElementById(time);
            let likes = li.getAttribute("likes");
            likes++;
            li.setAttribute("likes", likes);
            li.innerText = `${time} has been liked ${li.getAttribute("likes")} times`
        } else {
            let li = document.createElement("li");
            li.setAttribute("id", time);
            li.setAttribute("likes", 1);
            li.innerText = `${time} has been liked ${li.getAttribute("likes")} time`
            listNode.appendChild(li);
        }
    });

    let incrementing = true;
    pause.addEventListener('click', function() {
        if (incrementing === true) {
            clearInterval(incrementer);
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
            pause.innerText = " resume ";
            incrementing = false;
        } else {
            incrementer = setInterval(incrementCounter, 1000);
            incrementer;
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
            pause.innerText = " pause ";
            incrementing = true;
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let input = commentInput.value; 
        const p = document.createElement("p");
        p.innerText = input;
        list.appendChild(p);
    })
});


