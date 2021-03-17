document.addEventListener("DOMContentLoaded", () => {
    // your code here
    var pauseButton = true;
    var nIntervId;
    count = document.getElementById("counter")
    nIntervId = setInterval(function(){updateTimer(count)}, 1000);
    timerButton = document.getElementById('pause')
    plusButton = document.getElementById('plus')
    minusButton = document.getElementById('minus')
    heartButton = document.getElementById('heart')
    likeList = document.getElementsByClassName('likes')[0]
    commentList = document.getElementById('list')
    comment = document.getElementById('comment-input')
    submitButton = document.getElementById('submit')
    let lastCommentCount = "100"
    let currCount = 0

    timerButton.addEventListener("click", function(e){
        e.preventDefault();
        if(pauseButton) {
            pauseButton = false;
            timerButton.innerText = "resume";
            clearInterval(nIntervId);
            plusButton.disabled = true;
            minusButton.disabled = true;
            heartButton.disabled = true;
            submitButton.disabled = true;
        }
        else {
            pauseButton = true
            timerButton.innerText = "pause";
            nIntervId = setInterval(function(){updateTimer(count)}, 1000);
            plusButton.disabled = false;
            minusButton.disabled = false;
            heartButton.disabled = false;
            submitButton.disabled = false;
        }
    });
    plusButton.addEventListener("click", function(e){
        e.preventDefault();
        
            count.innerText = `${parseInt(count.innerText) + 1}`
        
    });
    minusButton.addEventListener("click", function(e){
        e.preventDefault();
        
            count.innerText = `${parseInt(count.innerText) - 1}`
        
    });
    heartButton.addEventListener("click", function(e){
        e.preventDefault();
        
            if (lastCommentCount === count.innerText) {
                currCount += 1;
                likeList.lastChild.innerHTML = `${lastCommentCount} has been liked ${currCount} times`;
            }
            else {
                currCount = 1;
                let li = document.createElement('li');
                li.innerHTML = `${count.innerText} has been liked 1 time`;
                likeList.appendChild(li);
                lastCommentCount = count.innerText
                console.log("liked")
            }
            
        
    });
    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        
            let p = document.createElement('p');
            p.innerText = comment.value;
            comment.value = ""
            commentList.appendChild(p);
        
    });

    
});


function updateTimer(count) {
    
    count.innerText = `${parseInt(count.innerText) + 1}`
    
}
