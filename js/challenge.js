document.addEventListener("DOMContentLoaded", () => {
  let counterElement = () => document.getElementById("counter")
  let counter = () => Number(counterElement().innerText)
  
  let handle=setInterval(printTime, 1000)
  
  
  function printTime(){
      let newNumber = counter()
      newNumber++
      counterElement().innerText = newNumber.toString()
  }

  

  let buttonMinus = document.getElementById("minus")
  let buttonPlus = document.getElementById("plus")
  let heart = document.getElementById("heart")
  let ulLikes = document.getElementsByClassName("likes")[0]
  let x = document.getElementById("pause")
  let form = document.getElementById("comment-form")


  buttonMinus.addEventListener("click",() =>{
    let newNumber = counter()
    newNumber--
    counterElement().innerText = newNumber.toString()
  })

  buttonPlus.addEventListener("click",() =>{
    let newNumber = counter()
    newNumber++
    counterElement().innerText = newNumber.toString()
  })

  heart.addEventListener("click",()=>{
      let li = document.createElement("li")
      li.textContent = counter()+ " has been liked 1 time"
      ulLikes.appendChild(li)
  })

  x.addEventListener("click",()=>{

      if (x.innerText === "pause"){
        clearInterval(handle)
        x.innerText = "resume"
    }else {
        x.innerText = "pause"
        handle=setInterval(printTime, 1000)    
    }

  })

  form.addEventListener("submit",(event)=>{
      event.preventDefault()
      let commentInput = document.getElementById("comment-input").value
      let commentList =document.getElementById("list")
      let li = document.createElement("li")
      li.innerHTML = commentInput
      commentList.appendChild(li)

      // let ul = document.createElement("ul")
      // let li = document.createElement("li")
      // li.innerHTML = commentInput
      // ul.appendChild(li)
      // commentList.appendChild(ul)
      

  })


})
