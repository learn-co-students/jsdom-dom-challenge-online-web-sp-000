let seconds = 0;
let clicks = 0;
let temp = null;
let el = document.getElementById('counter');
let pause = document.getElementById('pause');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let ul = document.querySelector('ul');
let likes = document.getElementById('likes');
pause == true;
pause.addEventListener('click', function () {
	pause = false;
});

function incrementSeconds() {
    seconds += 1;
    if (!pause) {
        clearInterval(counter);
        return; 
    }
    el.innerText = seconds;
// the pause as itended does not do what it is supposed to do
}
minus.addEventListener('click', function () {
    seconds -= 1;
    el.innerText = seconds;
});
plus.addEventListener('click', function () {
    seconds += 1;
    el.innerText = seconds;
});
/*heart.addEventListener('click', function () {
    let hello = document.createElement('li');
    likes.dataset.value++
    hello.innerText = el.innerText + " " + "was liked" + " " + likes.dataset.value + " " + "times!";
    ul.appendChild(hello);
// this way the incremented values stay
});*/
heart.addEventListener('click', function () {
    let hello = document.createElement('li');
    if (temp == el.innerText){
        clicks++;
        console.log(temp);
        hello.innerText = el.innerText + " " + "was liked" + " " + clicks + " " + "times!";
    } else {
        clicks = 1;
        hello.innerText = el.innerText + " " + "was liked" + " " + clicks + " " + "times!";
    }
    temp = el.innerText;
    
    
   
    ul.appendChild(hello);

// this way it doesn't increment the amount of likes but creates new 'li' for each
});
let cancel = setInterval(incrementSeconds, 1000);
