window.addEventListener('DOMContentLoaded', (event) => {
   const counter = document.getElementById('counter')

   const minusIcon = document.getElementById('minus')
   const plusIcon = document.getElementById('plus')

   const heart = document.getElementById('heart')
   const likeObject = {}

   const ul = document.querySelector('ul.likes')

   let pause = document.getElementById('pause')
   let resume

   const commentInput = document.getElementById('comment-input')
   const commentsHeader = document.getElementById('comments')
   const leaveACommentHeader = document.getElementById('leave-a-comment')
   const submitButton = document.getElementById('submit')

   let i = 0
   
   let timer = setInterval(updateCounter, 1000)

   function updateCounter() {
      i++;
      counter.innerHTML = i
   }

   function decreaseCounter() {
      i = i - 1;
      counter.innerHTML = i
   }

   function increaseCounter() {
      i = i + 1;
      counter.innerHTML = i
   }

   function updateLikes() {
      let x = i

      if (x in likeObject) {
         likeObject[x] = likeObject[x] + 1
         let li = document.getElementById(`${x}`)
         li.innerHTML = `${x} was liked ${likeObject[x]} times`
      } else {
         likeObject[x] = 1
         let li = document.createElement('li')
         li.setAttribute('id',x)
         ul.appendChild(li)
         li.innerHTML = `${x} was liked ${likeObject[x]} time`
         li.setAttribute('id',x)
      }
   }

   function pauseTimer() {
      clearInterval(timer)
      pause.innerHTML = "resume"
      pause.setAttribute('id','resume')
      resume = document.getElementById('resume')
      minusIcon.disabled = true
      plusIcon.disabled = true
      heart.disabled = true
      commentInput.disabled = true
      submitButton.disabled = true
      resume.onclick = resumeTimer
   }

   function resumeTimer() {
      resume.innerHTML = "pause"
      resume.setAttribute('id','pause')
      minusIcon.disabled = false
      plusIcon.disabled = false
      heart.disabled = false
      commentInput.disabled = false
      submitButton.disabled = false
      timer
      // setInterval(updateCounter, 1000)
   }

   submitButton.addEventListener('click', function(event) {
      event.preventDefault()
      const commentText = commentInput.value
      const newP = document.createElement('p')
      newP.innerHTML = commentText
      appendNewComment(newP)
      // event.target.reset()
   })

   const appendNewComment = comment => {
      document.getElementById('list').appendChild(comment)
   }

   minusIcon.onclick = decreaseCounter
   plusIcon.onclick = increaseCounter
   heart.onclick = updateLikes
   pause.onclick = pauseTimer
})

// use id to uniquely identify number to be updated
// be careful of return values for setTimeout and setInterval; know what they return
// when pause is clicked changed id to resume and inner text