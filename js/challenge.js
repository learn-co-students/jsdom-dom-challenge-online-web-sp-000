plus = document.getElementById('plus')
minus = document.getElementById('minus')
heart = document.getElementById('heart')
pause = document.getElementById('pause')
clock = document.getElementById('counter')
let timeoutID

let paused = false
let num = 1000

//Makes the Timer work
function increase() {
    current_tick = parseInt(clock.innerHTML, 10)
    current_tick += 1
    clock.innerHTML = `${current_tick}`
}

//Start or Stop the Timer
function timer(){
    if (paused){
        let timeoutID = window.setInterval(increase, num)
        paused = false
        return timeoutID
      }
      else{
        window.clearInterval(timeoutID)
        paused = true
      }
}

//Slows the Timer
function rate(speed){
    if (speed = "inc"){
        num = num - (num / 2)
    }
    else{
        num = num + 500
    }
    window.clearInterval(timeoutID)
    if (!paused){
        window.clearInterval(timeoutID)
        let timeoutID = window.setInterval(increase, num)
    }
}

// -------------------------------------------Events----------------------------------------//
document.addEventListener("DOMContentLoaded", () => {

  let timeoutID = window.setInterval(increase, num)
//Pause or Resume the Clock
  pause.addEventListener("click", timer())
// Slow or Speed the Clock
  plus.addEventListener("click", rate("inc"))
  minus.addEventListener("click", rate("dec"))


});