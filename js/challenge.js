function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let timer = 0;
    while (timer < 5) {
        var watch = document.getElementById("counter").textContent;
        console.log(timer);
        wait(1000);
        watch.innerContent=timer;

        timer++; 
      }
});
