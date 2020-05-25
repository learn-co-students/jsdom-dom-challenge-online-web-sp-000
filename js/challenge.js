//basic timer//

var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("counter").innerHTML=pad(++sec);
}, 1000);

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

//As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

//    As a user, I can pause the counter, which should
//pause the counter
//disable all buttons except the pause button
//the pause button should then show the text "resume."
//When 'resume' is clicked, it should restart the counter and re-enable the buttons.

//As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

