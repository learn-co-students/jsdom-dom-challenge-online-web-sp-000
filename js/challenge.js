let counter = document.getElementById('counter')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let seconds = document.getElementById('counter').textContent

document.addEventListener("DOMContentLoaded", () => {
    managePage()
  });

  document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
      let comment = document.querySelector("#comment-input");
      let li = document.createElement('li');
      li.textContent = comment.value;
      document.getElementById('list').appendChild(li);
  
    document.getElementById("comment-form").reset();
  })

  pause.addEventListener('click', function() {
      if (pause.innerText == 'pause') {
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    pause.innerText = "resume"
      } else {
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      pause.innerText = 'pause';
      }
  })
    
  

heart.addEventListener("click", function() {
    
    let alreadyLiked = document.getElementById(seconds)
    if (alreadyLiked) {
       let likeAmount = alreadyLiked.textContent.split(' ')[2];
       let updatedLikes = parseInt(likeAmount) + 1;
       alreadyLiked.textContent = `${seconds} has ${updatedLikes} likes`
    } else{
    let likes = 1
    let newLike = document.createElement('li')
    newLike.setAttribute('id', seconds)
    let list = document.querySelector('.likes')
    newLike.textContent = `${seconds} has ${likes} likes`
    list.appendChild(newLike)
    }
})
minus.addEventListener("click", function() {
    seconds = seconds - 1;  
})  

plus.addEventListener("click", function() {
    seconds = seconds + 1;  
}) 




  function managePage() {
      setInterval(function() {
      if  (seconds < 1000) { 
          if (pause.innerText == 'pause'){ 
        seconds ++;
        counter.textContent = seconds
          }
        }   
    }, 1000)
  }

  

  
