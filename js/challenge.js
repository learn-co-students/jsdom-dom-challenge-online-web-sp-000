
let counter = document.getElementById("counter")
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let pause = document.getElementById("pause")
let heart = document.getElementById("heart")
let b = document.getElementById("submit")
let count = parseInt(counter.innerText)
  function countup() {
    counter.innerText = count += 1
    pause.innerText = "pause"
  }


let intId = setInterval(countup, 1000)

function resume(){
  setInterval(countup, 1000)
  pause.innerText = "pause"
}

function subtract() {
  counter.innerText = count -= 1;
}
minus.addEventListener("click", subtract);

function add(){
  counter.innerText = count += 1;
}
plus.addEventListener("click", add);

function stop(){
  clearInterval(intId);
  pause.innerText = "unpause"
}


function stopstart() {
if (pause.innerText === "pause"){
  pause.addEventListener("click", stop)
  } else if (pause.innerText === "unpause"){
    pause.addEventListener("click", resume)
  }
}

pause.addEventListener("click", stopstart)

function like(){
// console.log(`I liked the number ${count}`)
    let div = document.createElement('div')
     div.id = 'likes'
     document.body.appendChild(div)
     let ul = document.createElement('ul')

  let li = document.createElement('li')
  li.innerText = `I liked the number ${count}`
  ul.appendChild(li)
  div.appendChild(ul)
}

heart.addEventListener("click", like)

b.addEventListener("click", function(event){
   event.preventDefault();
   let comment = document.getElementById("comment-input")
   let div = document.createElement('div')
     div.id = 'comments'
     document.body.appendChild(div)
     let ul = document.createElement('ul')
     let li = document.createElement('li')
     li.innerText = comment.value
  ul.appendChild(li)
  div.appendChild(ul)
})
