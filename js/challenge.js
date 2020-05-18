document.addEventListener("DOMContentLoaded", function(){
    const counterCount = document.getElementById("counter");
    const likes = document.getElementsByClassName("likes");
    let counterValue = 0;

    function updateCounter() {
        counterStatus();
        return counterCount.innerText = counterValue;
    }

    setInterval(functon(){updateCounterDisplay();}, 1000);
    function incrementCounter() {
        return counterValue +=1;
    }

    function decrementCounter() {
        return counterValue -=2;
    }

    function counterStatus() {
        if (pausebtn.innerText == 'resume') {
            counterValue = parseInt(counterCount.innerText, 10);
        } else {
            incrementCounter();
        };
    }

    const heartBtn = document.querySelector('button#heart');
    let likedNumbersCounts = {};

    heartBtn.addEventListener("click", function() {
       
        likedNumbersCounts[counterValue] = likedNumbersCounts[counterValue] ? likedNumbersCounts[counterValue] + 1 : 1;

        likes.innerHTML = '';
        
        printLikedNumbersCounts();
      });

    function printLikedNumbersCounts() {
        let likedNumbers = Object.keys(likedNumbersCounts);
        for (let i = 0; i < likedNumbers.length; i++) {
          let newLike = document.createElement('li');
          newLike.innerText = `${likedNumbers[i]} was liked ${likedNumbersCounts[likedNumbers[i]]} time(s).`;
          likes.appendChild(newLike);
        };
    };  


    const pauseBtn = document.getElementById('pause');
    const minusBtn = document.querySelector('button#minus');
    const plusBtn = document.querySelector('button#plus');

    pauseBtn.addEventListener("click", function () {
        pauseBtn.innerText = pauseBtn.innerText == 'pause' ? 'resume' : 'pause';
    
        if (pauseBtn.innerText == 'resume') {
          minusBtn.disabled = true;
          plusBtn.disabled = true;
          heartBtn.disabled = true;
        } else {
          minusBtn.disabled = false;
          plusBtn.disabled = false;
          heartBtn.disabled = false;
        }
    
    });

    minusBtn.addEventListener("click", function (event) {
        decrementCounter(); 
        updateCounterDisplay(); 
    });

    plusBtn.addEventListener("click", function (event) {
        updateCounterDisplay(); 
    });

    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('list');
    
    function addNewComment() {
        const newComment = document.createElement('p');
        newComment.innerText = commentInput.value;
        commentsList.appendChild(newComment);
    }

    commentForm.addEventListener('submit', function (event) {
        addNewComment();
        event.preventDefault();
        event.target.reset();
    });
    
    
});