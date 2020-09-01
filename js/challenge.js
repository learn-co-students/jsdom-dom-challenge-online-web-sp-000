document.addEventListener("DOMContentLoaded", () => {
    let counterActive = true;
    let counter = document.getElementById("counter");
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let submit = document.getElementById("submit");
    let pause = document.getElementById("pause");
    let likesList = document.getElementsByClassName("likes");    
    let intervalID = window.setInterval(timeIncrement, 1000, 1);

    function timeIncrement(value)
    {
     counter.innerText = parseInt(counter.innerText, 10)+ value;
    }  
    
    pause.addEventListener("click", function(event){
        if (counterActive == true) {
            window.clearInterval(intervalID);
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
            pause.innerText="resume";
            counterActive = false;
        }
        else {
            intervalID = window.setInterval(timeIncrement, 1000, 1);
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
            pause.innerText="pause";            
            counterActive = true;
        }
      });    

      minus.addEventListener("click", function(event){
        timeIncrement(-1);
      });   
      
      plus.addEventListener("click", function(event){
        timeIncrement(1);
      });    
      
      heart.addEventListener("click", function(event){ 
        let repeat = false;

        if (likesList[0].children.length > 0) {    
            for (var i = 0; i < likesList[0].children.length; i++) {
                let stringArray = likesList[0].children[i].innerText.split(" ");
                if (stringArray[0] == counter.innerText){
                    likesList[0].children[i].innerText = `${counter.innerText} has been liked ${parseInt(stringArray[4], 10) + 1} times.`;
                    repeat = true;
                }
                else {
                    repeat = false;
                }
            }
        }
        else {
            repeat = false;           
        }

        if (repeat == false) {
            let li = document.createElement("li");
            message = `${counter.innerText} has been liked 1 times.`
            li.appendChild(document.createTextNode(message));
            likesList[0].appendChild(li);             
        }
      });       

      submit.addEventListener("click", function(event){ 
        let newComment = document.getElementById("comment-input");
        let commentList = document.getElementById("list");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newComment.value));
        commentList.appendChild(li);    
        event.preventDefault()
      });        
  });