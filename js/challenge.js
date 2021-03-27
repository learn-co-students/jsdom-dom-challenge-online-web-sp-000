const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likesList = document.querySelector(".likes");
const commentInput = document.getElementById("comment-input");
const comment = document.getElementById("comment-form");
const commentList = document.getElementById("list");
const buttons = document.querySelectorAll("button");

let count = 0;

function updateNumber(){
    counter.innerHTML = count;
};

minus.addEventListener("click", ()=> {
    count--;
    updateNumber();
});

plus.addEventListener("click", ()=> {
    count++;
    updateNumber();
});

setInterval(function(){
    count++;
    updateNumber();},
    1000
);

comment.addEventListener("submit", function(event){ 
      event.preventDefault(); 
    
    const p = document.createElement("p");
    p.innerText = commentInput.value;
    commentList.appendChild(p);
    commentInput.value = "";
});

heart.addEventListener("click", ()=>{
    const li = document.createElement("li");
    li.innerHTML = `${count} has been liked `;
    likesList.appendChild(li);
});

pause.addEventListener("click", ()=>{
    if (pause.innerText == "pause"){
        pause.innerText = "resume";
        buttons[0].disabled = true;
        buttons[1].disabled = true;
        buttons[2].disabled = true;
    }
    else{
        pause.innerText = "pause";
        buttons[0].disabled = false;
        buttons[1].disabled = false;
        buttons[2].disabled = false;
    };
});


