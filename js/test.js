document.addEventListener("DOMContentLoaded", function() {

  let counter = setInterval(myCounter, 1000);
    const pauseBtn = document.getElementById('pause');

    function myCounter() {
      let startNum = parseInt(document.getElementById("counter").textContent);
      document.getElementById("counter").innerHTML = startNum += 1;
    }

  pauseBtn.addEventListener('click', function() {
    if (pauseBtn.textContent === " pause "){
      clearInterval(counter);
      pauseBtn.textContent = "resume";
      document.getElementById("minus").disabled = true;
      document.getElementById("plus").disabled = true;
      document.getElementById("heart").disabled = true;
      document.getElementById("submit").disabled = true;
    } else {
      myCounter();
      pauseBtn.textContent = " pause ";
      document.getElementById("minus").disabled = false;
      document.getElementById("plus").disabled = false;
      document.getElementById("heart").disabled = false;
      document.getElementById("submit").disabled = false;
    }
  });

});s