let toggleCounter = "on"

function incrementCounter()
{
  const currentCount = document.getElementById('counter').innerHTML
  document.getElementById('counter').innerHTML = parseInt(currentCount) + 1
}

function decrementCounter()
{
  const currentCount = document.getElementById('counter').innerHTML
  document.getElementById('counter').innerHTML = parseInt(currentCount) - 1
}


document.getElementById("plus").addEventListener("click", function() {
  incrementCounter()
});

document.getElementById("minus").addEventListener("click", function() {
  decrementCounter()
});
document.getElementById("pause").addEventListener("click", function() {
  if(toggleCounter === "on")
  {
    toggleCounter = "off";
    document.getElementById("pause").innerHTML = "resume"
  }
  else
  {
    toggleCounter = "on";
    document.getElementById("pause").innerHTML = "pause"
  }
});

setInterval(function(){
  if(toggleCounter === "on"){
    incrementCounter()
  }
}, 1000);
