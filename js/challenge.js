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

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
    window.onload = function () {
        var fiveMinutes = 50 * .5,
        display = document.getElementById("counter");
        display.style.color = "green";

        startTimer(fiveMinutes, display);
    };
    });
