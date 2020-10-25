let counter_id = document.getElementById("counter")
let pause_id = document.getElementById("pause")
let minus_id = document.getElementById("-")
let plus_id = document.getElementById("+")
let heart_id = document.getElementById("<3")
let list_id = document.getElementById("list")
let comment_id = document.getElementsByTagName("form")[0]

let life = true;

let counter = 0

let timer = setInterval(function(){
  if (life){
    counter_id.innerHTML = counter
    counter += 1;
  }

}, 1000);


plus_id.addEventListener("click", function(){
  counter += 1;
  counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1
})

minus_id.addEventListener("click", function(){
  counter -= 1;
  counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1
})


heart_id.addEventListener("click", function(){
  let like = document.querySelector(".likes")

  if(document.getElementById(`Li${counter}`) == null){
    let li = document.createElement("li");
    li.setAttribute("id", `Li${counter}`)
    li.innerHTML = `${counter} have this many likes:1`
    like.appendChild(li)
  }
  else {
    let li = document.getElementById(`Li${counter}`)
    let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
    li.innerHTML = `${counter} have this many likes:${splitted}`
    like.appendChild(li)
  }

})


pause_id.addEventListener("click",function(){
  if (life){
    pause_id.innerHTML = "resume"
    life = false
  }
  else{
    pause_id.innerHTML = "pause"
    life = true
  }

})


comment_id.addEventListener("submit",function(a){
  a.preventDefault()
  let b=this.children[0]
  let c=b.value;
  b.value="";
  let d=document.querySelector(".comments")
  let e=document.createElement("p")
  e.innerText=c
  d.appendChild(e)
})
