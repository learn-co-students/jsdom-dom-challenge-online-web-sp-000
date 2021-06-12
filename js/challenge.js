let getNumber = document.getElementById("counter")
let count = 0
const getMinusButton = document.getElementById("minus")
const getPlusButton = document.getElementById("plus")
let getPauseButton = document.getElementById("pause")

document.addEventListener("DOMContentLoaded", () => {
//As a user, I should see the timer increment every second once the page has loaded.
clear = setInterval(makeCounter, 1000);
 getMinusButton.addEventListener("click", decrementCounter)
 getPlusButton.addEventListener("click", incrementCounter)
getPauseButton.addEventListener("click", pauseCounter)
});

function makeCounter() {
 count++;
 getNumber.innerText = count;
 document.getElementById("counter").appendChild
 //debugger
 
};

function decrementCounter() {
   count--;
    getNumber.innerText = count; 
    document.getElementById("counter").appendChild
    //debugger
};

function incrementCounter() {
    //console.log("clicked the plus button")
    makeCounter();
};

function pauseCounter() {
   clearInterval(clear)
   let changePauseButton = document.getElementById("pause").innerText
   changePauseButton 
};

//As a user, I can manually increment and decrement the counter using the plus and minus buttons.