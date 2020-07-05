document.addEventListener("DOMContentLoaded", () => {
    

    /// DOM Elements for counter
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    let pause = document.getElementById("pause")

    // DOM elements for like meter
    let heart = document.getElementById("heart")
    let submit = document.getElementById("submit");
    let commentList = document.getElementById("list");
    let likes = document.querySelector(".likes")

    //standalone functions


    /// counter 
    let counter = document.getElementById("counter")
    let currentCount = counter.innerText;

    // counter increase
    let countUp = setInterval(function () {
        counter.innerText++; 
    }, 1000);
    
    //counter stop

    pause.addEventListener("click", function(e){
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(countUp)

            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        }
        else {
            countUp = setInterval(function () {
                counter.innerText++;
            }, 1000);
            pause.innerText = "pause"

            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
        }
    });


    // minus
    minus.addEventListener("click", function(e){
        counter.innerText--;
    });

    // plus
    plus.addEventListener("click", function(e){
        counter.innerText++;
    });


    // heart button

    
    heart.addEventListener("click", function(e){
        let obj = document.getElementById(`${counter.innerText}`);
        obj ? obj.children[0].innerText++ : 
        likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    });


    // submit comments // button
    submit.addEventListener("click", function(e){
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });

});