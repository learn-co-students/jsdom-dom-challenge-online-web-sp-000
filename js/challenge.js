let incrementer = null;


document.addEventListener("DOMContentLoaded", function(e) {
    console.log('@@hello', "The DOM has loaded");
    incrementTimer();
    myStopFunction();


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


