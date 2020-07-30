document.addEventListener("DOMContentLoaded", () => {
    let interval;

    function startCycle () {
        interval = setInterval(() => {
            counter_num = parseInt(document.getElementById('counter').innerHTML);
            document.getElementById('counter').innerHTML = (counter_num + 1).toString();
        }, 1000)
    }

    startCycle()

    function stopCycle() {
        clearInterval(interval);
     }

    function pausing () {
        stopCycle();
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById('pause').remove();
        const button = document.createElement('button');
        button.id = "resume";
        button.innerHTML="resume";
        document.getElementById('heart').after(button);
        document.getElementById('resume').addEventListener('click', resuming);
        }

    function resuming () {
        startCycle();
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById('resume').remove();
        const new_button = document.createElement('button');
        new_button.id = "pause";
        new_button.innerHTML="pause";
        document.getElementById('heart').after(new_button);
        document.getElementById('pause').addEventListener('click', pausing);
    }

    document.getElementById('pause').addEventListener('click', pausing);


    document.getElementById('minus').addEventListener('click', function () {
        const counter_num = parseInt(document.getElementById('counter').innerHTML);
        document.getElementById('counter').innerHTML = (counter_num - 1).toString();
    })

    document.getElementById('plus').addEventListener('click', function () {
        const counter_num = parseInt(document.getElementById('counter').innerHTML);
        document.getElementById('counter').innerHTML = (counter_num + 1).toString();
    })

    document.getElementById('submit').addEventListener("click", function (event) {
        event.preventDefault();
        const value = document.getElementById("comment-input").value;
        const comment = document.createElement('p')
        comment.innerHTML = value;
        document.querySelector('h3').after(comment);
    })

    document.getElementById('heart').addEventListener('click', function () {
        const counter_num = document.getElementById('counter').innerHTML;
        const message = document.createElement('p')
        message.innerHTML = `${counter_num} just got a like!`;
        document.getElementById('pause').after(message);
    })
});