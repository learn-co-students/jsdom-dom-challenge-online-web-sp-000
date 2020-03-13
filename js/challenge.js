    
document.addEventListener("DOMContentLoaded", startCounter)


    var el = document.getElementById("counter");
    var counter = parseInt(el.innerHTML)
    var intervalId

    function startCounter() {
        intervalId = setInterval(function() {
            counter++
            el.innerHTML = counter
        }, 1000);
    }

    function pauseCounter() {
        clearInterval(intervalId) 
        document.getElementById("pause").innerHTML = "resume"
        document.getElementById("submit").disabled = true 
        document.getElementById("plus").disabled = true  
        document.getElementById("minus").disabled = true 
        document.getElementById("heart").disabled = true 
    }

    document.getElementById("pause").addEventListener("click", pauseCounter);


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

