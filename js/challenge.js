document.addEventListener("DOMContentLoaded", function(){
    let counter = document.getElementById('counter')
    let counterValue = 0;
    let paused = false;
    let pauseButton = document.getElementById('pause')
    let minusButton = document.getElementById('minus')
    let plusButton = document.getElementById('plus')
    let submitButton = document.getElementById('submit')
    let heartButton = document.getElementById('heart')
  
    function counterIncrement(){
       counterValue++
       counter.innerText = counterValue
     };
    let intervalId = setInterval(counterIncrement, 1000);
  
    minusButton.addEventListener("click", function(){
      counterValue --
    });
    plusButton.addEventListener("click", function(){
      counterValue ++
    });
    pauseButton.addEventListener('click',function(){
       paused = !paused
       if (paused){
        clearInterval(intervalId)
        minusButton.disabled = true
        plusButton.disabled = true
        submitButton.disabled = true
        heartButton.disabled = true
        pauseButton.textContent = "resume"
      } else {
        intervalId = setInterval(counterIncrement, 1000)
        minusButton.disabled = false
        plusButton.disabled = false
        submitButton.disabled = false
        heartButton.disabled = false
        pauseButton.textContent = "pause"
      }
     })
     submitButton.addEventListener('click', function(event){
       let input = document.getElementById('comment-input')
       let commentContent = input.value
       let comment = document.createElement('p')
       comment.textContent = commentContent
       list = document.getElementById("list")
       list.appendChild(comment)
       event.preventDefault()
       input.value = ""
     })
     heartButton.addEventListener('click', function(){
       let list = document.querySelector('.likes')
       let like = document.createElement('li')
       //check to see if another li has the same first num
       let likesList = document.querySelectorAll('li')
       let existsAlready = false
       //go through each  li, see if first num matches counterValue
       likesList.forEach(function(like){
         let likedNum = like.textContent.split("has")[0]
         likedNum = parseInt(likedNum, 10)
         let timesLiked = like.textContent.split("liked")[1].split(" ")[1]
         timesLiked = parseInt(timesLiked, 10)
         //if match, increment the number of likes
         if (counterValue == likedNum){
           timesLiked ++
           like.textContent = counterValue + " has been liked " + timesLiked + " times"
           existsAlready = true
         }
       })
         //if no match, make new li and append
        if (existsAlready == false){
       like.innerHTML = counterValue + " has been liked 1 time"
       list.appendChild(like)
      }
     })
  
  });