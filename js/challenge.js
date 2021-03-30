// function wait(ms){
//     var start = new Date().getTime();
//     var end = start;
//     while(end < start + ms) {
//       end = new Date().getTime();
//    }
//  }

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    function startTimer(duration, display) {
        var timer = duration, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 1, 0)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent =  seconds;
            if (parseInt(display.innerHTML)==0) {
                clearInterval();
            }
            if (--timer < 0) {
                timer = duration
            }
        }, 1000);
        buttonElement.addEventListener('click', function (event) {
            alert('continue when ready');
          });
    }
    
    window.onload = function () {
        var fiveMinutes = 20 * .5,
        display = document.getElementById("counter");
        display.style.color = "green";
        display.style.backgroundColor = "yellow"

        startTimer(fiveMinutes, display);
    };
    });

    let buttonElement = document.getElementById('pause');
