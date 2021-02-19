    let iter = 0
    let pauseButton = document.getElementById('pause')
    let plusButton = document.getElementById('plus')
    let minusButton = document.getElementById('minus')
    let heartButton = document.getElementById('heart')
    let submit = document.getElementById('submit')
    let likes = document.querySelector(".likes")
    let comment_form = document.getElementById('comment-form')
    let commentForm = document.getElementById('comment-input')
    let comments = document.getElementById('list')
    let counting =  setInterval(counter, 1000) 
    let counterField = document.getElementById('counter')
    let likesArray = []
    function empty() {
        likesArray = []
    }
   
    function counter() {
        empty()
        iter++   
        counterField.textContent = iter.toString() 
    }
    
    function  substract(){
        iter--
        counterField.textContent = iter.toString() 
        
    }

    pause.addEventListener('click', () => {
        if (pauseButton.innerHTML === 'resume'){
            pauseButton.textContent = "pause"
            counting =  setInterval(counter, 1000)
            plusButton.removeAttribute("disabled") 
            minusButton.removeAttribute("disabled") 
            heartButton.removeAttribute("disabled")
            submit.removeAttribute("disabled")
         } else if(pause.innerHTML === 'pause'){
            pauseButton.textContent = "resume"
            plusButton.setAttribute("disabled","disabled") 
            minusButton.setAttribute("disabled","disabled") 
            heartButton.setAttribute("disabled","disabled")
            submit.setAttribute("disabled","disabled")
            clearTimeout(counting)  
         }
     }) 
 
     plus.addEventListener('click', () => {
           counter()
     }) 

     minus.addEventListener('click', () => {
        substract()
     }) 


  

     comment_form.addEventListener('submit', function(event) {
        event.preventDefault()
        let newComment = document.createElement('p')
        newComment.textContent = commentForm.value
        comments.appendChild(newComment) 
      })
           

    
        heart.addEventListener('click', function(event) {
           event.preventDefault() 
           let newLike = document.createElement('li')
           newLike.id = `${iter}`
           if(likesArray.length === 0){
            newLike.textContent = `${iter} has been liked ${likesArray.length + 1} times`
            likes.appendChild(newLike) 
           } else { 
            let like = document.getElementById(`${iter}`)
            like.textContent = `${iter} has been liked ${likesArray.length + 1} times`
           }  
           likesArray.push(iter)             

      })
           
  
