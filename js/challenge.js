document.addEventListener("DOMContentLoaded", () => {
    let myVar 

    function myFunction(){
        myVar = setTimeout(start(), 5000);
    }

    myFunction();
    //setTimeout(start, 5000);

    let i = 0;
    const num = document.getElementById('counter');
    const decrease = document.querySelector("#minus");
    const add = document.querySelector("#plus");
    const heart = document.querySelector("#heart");
    const likes = document.querySelector(".likes");
    const pause = document.querySelector("#pause");


    function start() {
        setInterval(increase, 1000);
    }

    function increase() {
        if (i < 1000) {
            i++;
            num.innerText = i;
        }
    }

    function decreaseTime() {
        decrease.addEventListener("click", function (event) {
            event.preventDefault();
            if (i < 1000) {
                i--;
                num.innerText = i;
            }
        });
    }
    decreaseTime();

    function addTime() {
        add.addEventListener("click", function (event) {
            event.preventDefault();
            if (i < 1000) {
                i++; 
                num.innerText = i;
            }
        });
    }
    addTime();

    
    let h = 0; //not done with likes
    heart.addEventListener("click", function (event) {
        event.preventDefault();
        
        if (num) {
            h++;
            likes.innerText = h;
        }
    });

    function myPauseFunction() {
        pause.addEventListener("click", () => {
            //event.preventDefault();
            

            if (pause.innerText === "pause") {
                clearTimeout(myVar); //have tried num
                
            }
            else if (pause.innerText != "pause") {
                setInterval(increase, 1000);
            } 
    
            //pause.innerText = "resume"
    
            //if (pause.innerText == "resume") {
               //start();
            //}
        });
    }
    myPauseFunction();
    

    function comment() {
        const commentForm = document.getElementById("comment-form")
        const commentList = document.getElementById("list")

        commentForm.addEventListener("submit", function (event){
            event.preventDefault();
            newComment = document.getElementById("comment-input").value;

            commentList.innerHTML += `<li> ${newComment} </li>`;

        });
    }
    comment();
}); 
