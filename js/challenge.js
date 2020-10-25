document.addEventListener("DOMContentLoaded", () => {
  // your code here
function createItem(t,d){
    let node = document.createElement("LI");                 // Create a <li> node
    let textnode = document.createTextNode(t);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    d.appendChild(node);     // Append <li> to <ul> with id="myList"
}

let f = document.getElementById("comment-form");
f.addEventListener("submit", (e) => {
    e.preventDefault();
    t = f.elements["comment"]
    d = document.getElementById("comments_ul")
    createItem(t.value,d)
    t.value="";
    t.focus();
});

let counter = document.getElementById("counter")
let minus = document.getElementById("minus")
minus.addEventListener("click", (e) => {
    console.log(counter.textContent--)
});

let plus = document.getElementById("plus")
plus.addEventListener("click", (e) => {
    console.log(counter.textContent++)
});

let counts = {}
let heart = document.getElementById("heart")
heart.addEventListener("click", (e) => {
    let num = parseInt(counter.textContent)
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    const ul = document.getElementsByClassName("likes")[0]
    ul.innerHTML = ""
    for (key in counts) {
        n = `${key} Liked ${counts[key]} times.`
        createItem(n,ul)
    }
});

let playing = false
let pause = document.getElementById("pause")
pause.addEventListener("click", (e) => {
    playing = !playing
    if (playing) {
        pause.innerText = "resume"
        clearInterval(interval) 
    }
    else {
        pause.innerText = "pause"
        interval = timer()
    } 
})

timer = function () {
    return setInterval(function () {
        let a = document.getElementById("counter"),
            b = parseInt(a.innerText);
        a.innerText = b + 1;
    }, 1e3);
},
interval = timer()

});

