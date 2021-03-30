document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    function startTimer(duration, display) {
        var timer = duration
        setInterval(function () {
            timer +=1;
            display.textContent = timer;
        }, 1000);
        buttonElement.addEventListener('click', function (event) {
            alert('Continue When Ready');
          });
          plusButtonElement.addEventListener('click', function (event) {
            timer+=5;
            startTimer(timer);
          });
          minusButtonElement.addEventListener('click', function (event) {
            timer-=5;
            startTimer(timer);

          });
    }
    
    window.onload = function () {
        display = document.getElementById("counter");
        display.style.color = "green";
        display.style.backgroundColor = "yellow"

        startTimer(0, display);
    };
    });
    let buttonElement = document.getElementById('pause');
    let plusButtonElement = document.getElementById('plus');
    let minusButtonElement = document.getElementById('minus');
