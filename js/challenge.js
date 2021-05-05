document.addEventListener("DOMContentLoaded", () => {
  let minus = document.getElementById('minus')
  let plus = document.getElementById('plus')
  let heart = document.getElementById('heart')
  let pause = document.getElementById('pause')
  let counter = document.getElementById("counter")
  let commentForm = document.getElementById("comment-form")
  let timer
  let counterHash = {}

      let startCounter = function(){
          let counterNumber = parseInt(document.getElementById("counter").innerHTML)
          counter.innerHTML = counterNumber + 1
          timer = setTimeout(function(){
              startCounter();
          }, 1000);

      }
      startCounter();


      minus.addEventListener("click", function() {
          let counterNumber = parseInt(document.getElementById("counter").innerHTML)
          counter.innerHTML = counterNumber - 1
       })

       plus.addEventListener("click", function() {

          let counterNumber = parseInt(document.getElementById("counter").innerHTML)
          counter.innerHTML = counterNumber + 1
       })

       heart.addEventListener("click", function() {
          let counterNumber = parseInt(document.getElementById("counter").innerHTML)
          let likes = document.getElementsByClassName("likes")[0]


          // if (!(`${counterNumber}` in counterHash) ){
          if (document.getElementById(`${counterNumber}`) === null ){
              counterHash[`${counterNumber}`] = 1
              let newLike = document.createElement("li")
              newLike.id = counterNumber
              newLike.innerHTML = `${counterNumber} has been liked ${counterHash[`${counterNumber}`]} times`
              likes.appendChild(newLike)
          } else if(`${counterNumber}` in counterHash){
              counterHash[`${counterNumber}`] += 1
              let addToLike = document.getElementById(`${counterNumber}`)
              addToLike.innerHTML = `${counterNumber} has been liked ${counterHash[`${counterNumber}`]} times`
              likes.appendChild(addToLike)
          }

      })
      pause.addEventListener("click", function() {

          if(pause.innerHTML === " pause "){
              minus.disabled = true
              plus.disabled = true
              heart.disabled = true
              clearTimeout(timer);
              pause.innerHTML = "resume"
          }else {
              minus.disabled = false
              plus.disabled = false
              heart.disabled = false
              pause.innerHTML = " pause "
              startCounter()
          }

      })

      commentForm.addEventListener("submit", (e) => {
          e.preventDefault();
          addTask()

      })

      function addTask(){
          let comments = document.getElementById("list")
          let newComment  = document.createElement("p")
          let commentInfo = document.getElementById("comment-input").value
          newComment.innerHTML = commentInfo
          comments.appendChild(newComment)
        }
})
