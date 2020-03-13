document.addEventListener("DOMContentLoaded", () => {
    //on domcontentloaded event, run startCounter
    

    function startCounter() {
        var el = document.getElementById("counter").innerHTML;
        var counter = parseInt(el)
        var intervalId = setInterval(function() {
            console.log(counter);
            counter++;
        }, 1000);
        //grab timer objects
        // timer increments every second
    }
}
    function pauseCounter() {
        //grab timer objects
        //stops counter
        //changes button text to "resume"
        //disables all other buttons
    }

    function incrementCounter() {
        //onclick, counter increments by 1
    }

    function decrementCounter() {
        //onclick, counter decrements by 1
    }

    function likeNumber() {
        //onclick, add li to ul with "number has been liked _ time(s)"
    }

    function leaveComment() {
        //onsubmit, add text below "comments"
    }

