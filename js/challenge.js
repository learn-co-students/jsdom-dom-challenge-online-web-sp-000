document.addEventListener("DOMContentLoaded", () => {

    /// counter inner text
    let counter = document.querySelector("#counter")

    ///// runs counter every second
    let count = setInterval(function () {
        counter.innerText++;
    }, 1000);


    /// DOM Elements
    let minus = document.getElementById("-")
    let plus = document.getElementById("+")
    let love = document.getElementById("<3")
    let pause = document.getElementById("pause")
    let likes = document.querySelector(".likes")

    let submitBtn = document.querySelector("#submit")
    let commentList = document.querySelector("#list")


    // minus button
    minus.addEventListener("click", function(e){
        counter.innerText--;
    });

    // plus button
    plus.addEventListener("click", function(e){
        counter.innerText++;
    });


    // pause button
    pause.addEventListener("click", function(e){
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(count)

            plus.disabled = true;
            minus.disabled = true;
            love.disabled = true;
            submitBtn.disabled = true;
        }
        else {
            count = setInterval(function () {
                counter.innerText++;
            }, 1000);
            pause.innerText = "pause"

            plus.disabled = false;
            minus.disabled = false;
            love.disabled = false;
            submitBtn.disabled = false;
        }
    });

    // love button
    love.addEventListener("click", function(e){
        let obj = document.getElementById(`${counter.innerText}`);
        obj ? obj.children[0].innerText++ :
        likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    });

    // submit comments // button
    submitBtn.addEventListener("click", function(e){
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });

});
