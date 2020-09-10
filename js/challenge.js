let counter = window.setTimeout(count, 1000)
let counterNumber = 0
let paused = false
function count() {
    
    counterNumber += 1
    document.getElementById("counter").innerText = counterNumber
    counter = window.setTimeout(count, 1000)
}



document.getElementById("plus").addEventListener("click", function(event){
    counterNumber += 1
    document.getElementById("counter").innerText = counterNumber
    event.preventDefault()
  });

  document.getElementById("minus").addEventListener("click", function(event){
    counterNumber -= 1
    document.getElementById("counter").innerText = counterNumber
    event.preventDefault()
  });

document.getElementById("pause").addEventListener("click", function(event){
    
    
    if (paused) {
        
        counter = window.setTimeout(count, 1000)
        paused = false
        document.getElementById("minus").disabled = false
        document.getElementById("plus").disabled = false
        document.getElementById("heart").disabled = false
        document.getElementById("pause").innerText = "pause"
    } else {
        
        
        window.clearTimeout(counter)
        document.getElementById("minus").disabled = true
        document.getElementById("plus").disabled = true
        document.getElementById("heart").disabled = true
        document.getElementById("pause").innerText = "resume"
        paused = true
        //window.setInterval(count, 1000)
        
    }


    event.preventDefault()
  });
  const likes = {}
  document.getElementById("heart").addEventListener("click", function(event){
    
    if (likes[counterNumber]) {
        likes[counterNumber] += 1
        //debugger;
        document.getElementsByClassName(counterNumber)[0].innerText = "Liked " + counterNumber + " " + likes[counterNumber] + " times"
    } else {
        likes[counterNumber] = 1
        let node = document.createElement("LI");                 // Create a <li> node
        node.className = counterNumber
        let textnode = document.createTextNode("Liked " + counterNumber + " " + likes[counterNumber] + " times");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementsByClassName("likes")[0].appendChild(node);
    }

    event.preventDefault()
  });

  document.getElementById("submit").addEventListener("click", function(event){
    
    //debugger;
    let comment = document.querySelector('input').value
    
    //alert(comment)
    document.getElementById("list").innerHTML += "<p>" + comment + "</p>"

    event.preventDefault()
});