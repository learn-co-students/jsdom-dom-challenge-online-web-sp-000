let timer = document.getElementById("counter");
let seconds = parseInt(timer.innerText);
let arewegroovin = 0;
var interval = setInterval(function() {
    timer.innerText = seconds++;
    }, 1000);

let minus = document.getElementById("minus");
minus.addEventListener("click", function(){
    timer.innerText = seconds--;
})

let plus = document.getElementById("plus");
plus.addEventListener("click", function(){
    timer.innerText = seconds++;
})

let pause = document.getElementById("pause");
pause.addEventListener("click", function(){

    if (arewegroovin == 0) {
        clearInterval(interval);
        arewegroovin = 1;
    }else{
        interval = setInterval(function() {
            timer.innerText = seconds++;
            }, 1000);
        arewegroovin = 0;
    } 
}) 

let heart = document.getElementById("heart");
let likeListUl = document.querySelector(".likes")
heart.addEventListener("click", function(){
    let anchor = document.createElement("P");
    anchor.innerText = timer.innerText + " has been liked";
    let likeListEl = document.createElement("li");
    likeListEl.appendChild(anchor)
    likeListUl.appendChild(likeListEl)
})

let comments = document.getElementsByTagName("form")[0];
let commentsList = document.querySelector(".comments")
comments.addEventListener("submit", function (event) {
    event.preventDefault();
    let comment = document.getElementById("comment-input").value;
    let anchor = document.createElement("P");
    anchor.innerText = comment;
    commentsList.appendChild(anchor);
});