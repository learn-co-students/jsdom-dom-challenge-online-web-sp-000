let incrementer = null;


document.addEventListener("DOMContentLoaded", function(e) {
    console.log('@@hello', "The DOM has loaded");
    incrementTimer();
    myStopFunction();
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