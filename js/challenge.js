  document.addEventListener("DPMContentLoaded", () => {
        let counter = document.querySelector('#counter');
        let time = new Date();
        let pause = document.querySelector('#pause');
        let myCounter = setInterval(setCounter, 1000);
        let scrollUp = document.querySelector('#plus');
        let scrollDown = document.querySelector('#minus');
        let like = document.querySelector('#heart');
        let likes = document.querySelector("ul.likes");
        let form = document.querySelector('#comment-form');
        let list = document.querySelector('#list');
        function setCounter(){
            let newTime = new Date();
            counter.innerHTML = counterTime(time);
            function counterTime(time){
                let returnTime = newTime - time;
                return Math.round(returnTime/1000);
            }
        }
        pause.addEventListener("click", function(event){
            if (pause.innerHTML === "resume"){
                event.preventDefault();
                // let time = counter.innerHTML;
                setInterval(setCounter, 1000)
                pause.innerText = "pause";
            } else {
                event.preventDefault();
                clearInterval(myCounter);
                scrollUp.disable;
                scrollDown.disable;
                pause.innerText = "resume";
            }
        })
        scrollUp.addEventListener("click", function(event){
            event.preventDefault();
            clearInterval(myCounter);
            pause.innerText = "resume";
            ++counter.innerHTML;
        })
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const newTask = document.getElementById("comment-input").value;
              list.innerHTML += `<li>${newTask}
                <button data-action = "delete"> x </button> 
                </li>`;
              form.reset();
          });
          list.addEventListener("click", function(e) {
            if (e.target.dataset.action === "delete") {
              e.target.parentElement.remove();
            }
          });
          myCounter
        });