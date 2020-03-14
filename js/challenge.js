    
document.addEventListener("DOMContentLoaded", startCounter)


    var el = document.getElementById("counter");
    var counter = parseInt(el.innerHTML)
    var pauseResume = document.getElementById("pause")
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

    pauseResume.addEventListener("click", decideCounter); //this + pauseCounter works to pause
    
    function decideCounter() {
        if (pauseResume.innertext == "resume") {
          pauseResume.addEventListener("click", startCounter)
      } else if (pauseResume.innertext == "pause") {
          pauseResume.addEventListener("click", pauseCounter)
     }
    } //this does not work (wrapped in a function with another eventlistener or not), but feels like it should!
    
    function incrementCounter() {
        document.getElementById("plus").onclick = counter.value = ++counter;
        el.innerHTML = counter
    }
    document.getElementById("plus").addEventListener("click", incrementCounter)

    function decrementCounter() {
        document.getElementById("minus").onclick = counter.value = --counter;
        el.innerHTML = counter
    }
    document.getElementById("minus").addEventListener("click", decrementCounter)

    function likeNumber() {
        const likesArea = document.querySelector('ul')
        const likes = document.createElement('li')
        likes.innerHTML = `${counter} has been liked 1 time` 
        likesArea.appendChild(likes)
    } //need to modify string for how many times liked
    document.getElementById("heart").addEventListener("click", likeNumber)


    function leaveComment() {
        event.preventDefault();
        const commentArea = document.getElementById('list')
        const ul = document.createElement('ul')
        commentArea.appendChild(ul)
        const comments = document.createElement('li')
        ul.appendChild(comments)
        comments.innerHTML = document.getElementById('comment-input').value
    } //works in console, but not happening on submit- submit refreshes console --why???
    document.getElementById("submit").addEventListener("submit", leaveComment)


