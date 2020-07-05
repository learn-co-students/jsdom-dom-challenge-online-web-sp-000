document.addEventListener("DomContentLoaded", () => { 
    
    // counter
    let counter = document.getElementById("counter")
    
    
    let countUp = setInterval(function () {
        counter.innerText++;
    }, 1000);
    
    
    // DOM Elements
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const submit = document.getElementById("submit");
    
    
    // DOM Form Elements- (mainly form elements)
    let submitComment = document.getElementById("comment-input");
    let commentInput = document.getElementById("comment-form");
    let commentList = document.getElementById("list");
    let likes = document.querySelector('.likes')
    
    
    
    // Events
    
    plus.addEventListener("click", function(e){
        counter.innerText++;
    });
    
    minus.addEventListener("click", function(e){
        counter.innerText--;
    });
    
    pause.addEventListener("click", function(e) {
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(countUp)
    
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        }
        else {
            countUp = setInterval(function() {
                counter.innerText++;
            }, 1000);
            pause.innerText = "pause"
    
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
        }
    });
    
    heart.addEventListener("click", function(e){
        let obj = document.getElementById(`${counter.innerText}`);
        obj ? obj.children[0].innerText++ : 
        likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    });
    
    submit.addEventListener("click", function(e){
        e.preventDefault();
        let comment = submitComment.value
        commentList.innerHTML += `<li>${comment}</li>`
        commentInput.reset();
    });

});
