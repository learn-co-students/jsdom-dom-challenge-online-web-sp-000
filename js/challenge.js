document.addEventListener("DOMContentLoaded", () => {
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const pause = document.getElementById("pause");
    const heart = document.getElementById("heart");


    function incrementCounter() {
        let counter = document.getElementById("counter");
        counter.innerText = parseInt(counter.innerText) + 1;
    }
    function decrementCounter() {
        let counter = document.getElementById("counter");
        counter.innerText = parseInt(counter.innerText) - 1;
    }

    const incrementer = setInterval(incrementCounter, 1000);

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
            incrementing = false;
        } else {
            setInterval(incrementCounter, 1000);
            incrementing = true
        }
    });
});


