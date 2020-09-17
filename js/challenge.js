//let incrementer = null;


document.addEventListener("DOMContentLoaded", function(e) {
    console.log('@@hello', "The DOM has loaded");
    incrementTimer();


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
