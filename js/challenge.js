let m = document.getElementById("minus")
  let p = document.getElementById("plus")
  let h = document.getElementById("heart")
  let pause = document.getElementById("pause")
  let c = document.getElementById("counter")
  const l = document.getElementsByClassName("likes")
addEventListener("DOMContentLoaded", function() {
  
    m.addEventListener("click", function() {
      c.innerHTML -= 1;
    })
    p.addEventListener("click", function() {
      c.innerText += 1;
    })
    h.addEventListener("click", function() {
      l.innerHTML += 1;
    })
    l.addEventListener("click", function() {
      l.innerHTML += 1; 
    })
})
