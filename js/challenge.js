// document.addEventListener("DOMContentLoaded", function(e) {
    
    let count = 0;
    const counter = document.getElementById('counter');
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const heart = document.querySelector("heart");
    const pause = document.getElementById("pause");
    let paused = false;
    let likeTracker = {};


    function addButtonListeners() {
    plus.addEventListener('click', incrementCount);
    minus.addEventListener('click', decrementCount);
    heart.addEventListener('click', handleLikes);
    pause.addEventListener('click', pauseClock);
    }

    // like number function
    function handleLikes() {
    if (!likeTracker[count]) {
        likeTracker[count] = 1;
        let li = document.createElement('li');
        li.innerText = `You have liked ${count} one time`;
        li.id = count;
        likes.appendChild(li);
    } else {
        likeTracker[count] += 1;
        let likedNum = document.getElementById(count);
        likedNum.innerText = `You have liked ${count}${likeTracker[count]} times`;
    }
    console.log("Likes: ", likeTracker);
    }

    //pause function
    function pauseClock() {
    paused = !paused;
    if (paused) {
        pause.innerText = 'Resume';
    } else {
        pause.innerText = 'Pause';
    }
    console.log('Paused?', paused);
    }

    //counter functions
    function tickingClock() {
    setInterval(incrementCount, 1000);
    }

    function incrementCount() {
    if (!paused) {
        count++;
        counter.innerText = count;
    }
    }

    function decrementCount() {
    count--;
    counter.innerText = count;
    }

    function init() {
    // dispatch center to run all the functions we'll need for page to load...helps to prevent finding a var that hasn't been rendered/created yet
    tickingClock();
    addButtonListeners();
    }

    function testClick() {
    console.log("i was clicked");
    }

    document.addEventListener("DOMContentLoaded", init)

// })
