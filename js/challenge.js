let incrementer = null;


document.addEventListener("DOMContentLoaded", function(e) {
    console.log('@@hello', "The DOM has loaded");
    incrementTimer();
    myStopFunction();
    resumeButton();
    pauseButton();
    incrementByOne();
    decrementByOne();
});



function incrementTimer(){
    console.log('@@start');

    incrementer = setInterval(
        function increment_by_one(){
            const counter = document.getElementById('counter');
            counter.innerText = parseInt(counter.innerText) + 1;
        },
    1000);    

    console.log('@@end');
}


function pauseTimer(){
    clearInterval(incrementer);
}

function myStopFunction(){
    document.getElementById("pause").addEventListener("click", pauseTimer);
}

function resumeButton(){
    const pauseButton = document.getElementById("pause");
    pauseButton.onclick = function (){pauseButton.innerText = "resume"};
}


function pauseButton(){
    const resumeButton = document.getElementById("pause");

    document.addEventListener("DOMContentLoaded", function(){
        if (resumeButton.innerText === "resume"){
            resumeButton.addEventListener("click", incrementTimer);
            resumeButton.onclick = function (){resumeButton.innerText = "pause"};
        }
    });
}


function addOne(){
    const counter = document.getElementById('counter');
    counter.innerText = parseInt(counter.innerText) + 1;
}

function incrementByOne(){
    document.getElementById("plus").addEventListener("click", addOne);
}

function subtractOne(){
    const counter = document.getElementById('counter');
    counter.innerText = Math.max(0, parseInt(counter.innerText) - 1);
}

function decrementByOne(){
    document.getElementById("minus").addEventListener("click", subtractOne);
}

