const counter = document.getElementById("counter")
const pause = document.getElementById("pause")
const decrease = document.getElementById("minus")
const increase = document.getElementById("plus")
const like = document.getElementById("heart")
const comment_list = document.getElementById("list")
const comment = document.getElementsByTagName("form")[0]


let time = true;
let count = 0


const timer = setInterval(function() {
    if (time) {
        counter.innerHTML = count
        count += 1;
    }
}, 1000);


increase.addEventListener("click", function() {
    count += 1;
    counter.innerHTML = parseInt(counter.innerHTML) + 1
})

decrease.addEventListener("click", function() {
    count -= 1;
    counter.innerHTML = parseInt(counter.innerHTML) - 1
})



like.addEventListener("click", function() {
    let likes = document.querySelector(".likes")

    if(document.getElementById(`Li${count}`) == null) {
        let li = document.createElement("li");
        li.setAttribute("id", `Li${count}`)
        li.innerHTML = `${count} have this many likes:1`
        likes.appendChild(li)
    } else {
        let li = document.getElementById(`Li${count}`)
        let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
        li.innerHTML = `${count} have this many likes:${splitted}`
        likes.appendChild(li)
    }
})


pause.addEventListener("click", function() {
    if(time){
        pause.innerHTML = "resume"
        time = false
    } else {
        pause.innerHTML = "pause"
        time = true 
    }
})

comment.addEventListener("submit", function(c) {
    c.preventDefault()
    const ch=this.children[0]
    const chil=ch.value;
    ch.value="";

    const doc=document.querySelector(".comments")
    const par=document.createElement("p")
    par.innerText=chil
    doc.appendChild(par)
})


