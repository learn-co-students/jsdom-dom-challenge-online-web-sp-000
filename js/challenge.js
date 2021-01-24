
document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById('counter')
    const plus = document.getElementById('+')
    const minus = document.getElementById('-')
    const pause = document.getElementById('pause')
    const like = document.getElementById('<3')
    const likes = document.getElementsByClassName('likes')[0]
    const submit = document.getElementById('submit')
    const commentForm = document.getElementsByTagName('input')[0]
    const comments = document.getElementById('list')
    let speedCounter = setInterval(plusCounter, 1000)
    let gameRunning = true
   
      function plusCounter() {
        if (gameRunning === true){
         counter.innerHTML++
       }
      };
   
      plus.addEventListener("click", function() {
        counter.innerHTML++
      });
   
      minus.addEventListener("click", function() {
        counter.innerHTML--
      });
   
      like.addEventListener("click", function() {
        const likesList = document.createElement("LI");
        let likeTracker = document.createTextNode(`${counter.innerHTML} has been liked 1 times.`)
        likesList.appendChild(likeTracker);
        likes.appendChild(likesList);
      });
   
      submit.addEventListener("click", function() {
        event.preventDefault();
        const newComment = document.createElement("p");
        let commentInfo = document.createTextNode(`${commentForm.value}`);
        newComment.appendChild(commentInfo);
        comments.appendChild(newComment);
        commentForm.value ='';
      });
   
   
    pause.addEventListener("click", function() {
     if (gameRunning === true){
       gameRunning = false
       pause.innerHTML = "resume";
       like.disabled = true;
       minus.disabled = true;
       plus.disabled = true;
       submit.disabled = true;
       commentForm.disabled = true;
     }
     else {
       gameRunning = true;
       pause.innerHTML = "pause"
       like.disabled = false;
       minus.disabled = false;
       plus.disabled = false;
       submit.disabled = false;
       commentForm.disabled = false;
     };
    });
   
   });