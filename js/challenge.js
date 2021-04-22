document.addEventListener("DOMContentLoaded", startCounter); 
    let form = document.getElementById('comment-form');
    let submit = document.querySelector("input[type=submit]");
    let counterDisplay = document.getElementById("counter");
    let counterNumber = parseInt(counterDisplay.innerHTML, 10);
    let seconds;
    let counterMinus = document.getElementById("minus");
    let counterPlus = document.getElementById("plus");
    const counterHeart = document.getElementById("heart");
    let counterPause = document.getElementById("pause");
    let allButtons = document.getElementById("button");
    let likesLi;
    let likedNumbers = {};
    const likes = document.getElementById("likes");


    form.addEventListener('submit', function(event) {
        leaveComment();
        event.preventDefault();
    });

    function startCounter() {
        seconds = setInterval(increaseCounter, 1000);
        increaseCounter();
    }

    function increaseCounter() {
        counterNumber++;
        counterDisplay.innerText = counterNumber.toString();
    }

    function deacreaseCounter() {
        counterNumber--
        counterDisplay.innerText = counterNumber.toString();
    }

    function addLike() {
        if (Object.keys(likedNumbers).includes(counterNumber.toString())) {
            updateLike();
          } else {
            likesLi = document.createElement('li');
            addFirstLike();
          }
        }

        function addFirstLike() {
            likedNumbers[counterNumber] = 1;
            likesLi.id = `li-${counterNumber}`;
            likesLi.innerText = `${counterNumber} has been liked 1 time.`
            likes.appendChild(likesLi);
          } 

          function updateLike() {
            likedNumbers[counterNumber] += 1;
            let listItem = document.getElementById(`li-${counterNumber}`);
            listItem.innerText = `${counterNumber} has been liked ${likedNumbers[counterNumber]} times.`;
          }

          function pauseCounter() {
            if (counterPause.innerText == 'pause') {
              clearInterval(seconds);
              counterPause.innerText = 'resume';
          
              for (let i = 0; i < allButtons.length; i++) {
                if (allButtons[i].id != 'pause') {
                  allButtons[i].disabled = true;
                }
              }
            } else if (counterPause.innerText == 'resume') {
              startCounter();
              counterPause.innerText = 'pause';
          
              for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].disabled = false;
              }
            }  
          }
          
    
    function leaveComment() {
        let comment = document.getElementById('comment-input').value
        let commentList = document.getElementById('list')
        let newP = document.createElement('p')

        let newComment = commentList.appendChild(newP)
            newComment.innerHTML = comment;
    }
    
    document.addEventListener("click", function(event) {
        if (event.target == counterPlus) {
            increaseCounter();
        }
        else if (event.target == counterMinus) {
            deacreaseCounter();
        }
        else if (event.target == counterHeart) {
            addLike();
        }
        else if (event.target == counterPause) {
            pauseCounter();
        }
    });


