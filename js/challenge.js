// As a user, I should see the timer increment every second once the page has loaded.
 // make varibales from elements will be working with
//
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

document.addEventListener("DOMContentLoaded", () => {

  let counter = parseInt(document.getElementById("counter").innerText)
  let counterDisplay = document.getElementById("counter")
  const minus = document.getElementById("minus")
  const plus = document.getElementById("plus")
  const heart = document.getElementById("heart")
  const pause = document.getElementById("pause")
  let likesUl = document.getElementById('likes')
  let submit = document.getElementById('submit')

  setInterval(myFunction, 1000)

  function myfunction (){
    minus

  }


  function myFunction() {

  // counter.innerText = 0
   counter+=1
   counterDisplay.innerText = counter
}
  minus.addEventListener("click", function(){
    counter-=1
    counterDisplay.innerText = counter
  })

  plus.addEventListener("click",function(){

    counter+=1
    counterDisplay.innerText = counter
  })
    heart.addEventListener("click",function(){
      // console.log(counter)
      var li = document.createElement("li");
      li.innerText = counter
      likesUl.appendChild(li)
      // let div = document.createElement("li")
      // div.innerText = "wassup"
      // likesUl.appendChild(div)
      // how do we find the counter number while we are in the ul
    })

    pause.addEventListener("click",function(){
      // console.log("pause")
      setTimeout(alert("resume"),4000)
      // wait(4000);

    })
      // 1. create event addEventListener
      // 2. get event object
      // 3. knowing the event object is the only way to prevent default form from submitting
      // 4. we add preventDefault to stop form from submitting
      // 5.In order to add text to the web page we create an element and then set the element or add the element to an already existing element.
    submit.addEventListener("click",function(e){
      e.preventDefault()
       text = document.getElementById("comment-input")
       // debugger
       text.value
       var li = document.createElement("li")
       li.innerText = text.value
       // list = document.getElementById('list')
       list.appendChild(li)
    })

})

  document.addEventListener("DOMContentLoaded", () => {
    const minus = document.getElementById("minus")
    const heart = document.getElementById("heart")





  })
