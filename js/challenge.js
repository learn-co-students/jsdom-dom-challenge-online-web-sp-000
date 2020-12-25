let seconds = 0;
let clicks = 0;
let el = document.getElementById('counter');
let pause = document.getElementById('pause');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let ul = document.querySelector('ul');
//pause.addEventListener('click', function () {
//	pause = false;
//});
function incrementSeconds() {

    //if (!pause) {
        seconds += 1;
        el.innerText = seconds;
    //}

}
minus.addEventListener('click', function () {
    seconds -= 1;
    el.innerText = seconds;
});
plus.addEventListener('click', function () {
    seconds += 1;
    el.innerText = seconds;
});
heart.addEventListener('click', function () {
    clicks += 1;
    let hello = document.createElement('li');
    hello.innerText = el.innerText + " " + "was liked" + " " + clicks + " " + "times!";
    ul.appendChild(hello);
    clicks = 0;

// the problem I have is that it counts the likes the wrong way
});
let cancel = setInterval(incrementSeconds, 1000);
