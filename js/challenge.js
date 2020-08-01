let commentForm = document.getElementById("comment-form");
let newComment = document.getElementById("comment-input");
let commentDiv = document.getElementById("list");
let pauseButton = document.getElementById("pause");
let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let heartButton = document.getElementById("heart");
let submitButton = document.getElementById("submit");
let counter = document.getElementById("counter");
let isPaused = false;
let countArray = [];
let sumArray = []
let newCount;
let filtered;
let dupArr = [];
let list;
let listArray;
let listAttr;

document.addEventListener("DOMContentLoaded", function() {
    function countUp() {
        for(i = 0; i < 1; i++) {
            setInterval(function() {
                if(!isPaused) {
                    newCount = counter.innerText++; }
                },  1000);
        }
    }

    countUp();

    heartButton.addEventListener("click", function() {
        countArray.push(newCount);
  
        function numSel(array) {
          for(let i in array) {
            if(array[i] == newCount) {
                sumArray.push(array[i])
                }
            }
            return sumArray
        }
        
        filteredArray = countArray.filter(function(value, index, arr){ return value == newCount;});

        countArray.map(function(e) {
            if(e == newCount) {
                dupArr.push(e);
                } 
            })
            
        if(newCount == dupArr[0] && dupArr.length == 1) {
            console.log("in IF")
            list = document.createElement("li");
            listAttr = document.createAttribute("id");
            listAttr.value = "num-lists"
            list.setAttributeNode(listAttr)
            list.innerText = `${newCount} has been liked ${filteredArray.length} time`;
            document.querySelector("ul.likes").appendChild(list); 
            dupArr = []
        } else {
            console.log("in ELSE")
            listArray = document.querySelectorAll("li#num-lists")
            listArray.forEach(myFunction)
            function myFunction(item, index) {
                if(parseInt(item.innerText).toString().includes(newCount)) {                
                    item.innerText = `${newCount} has been liked ${filteredArray.length} times`;
                    dupArr = [];
                }
            }
        }
    })

    minusButton.addEventListener("click", function() {
        counter.innerText--; ;
    })

    plusButton.addEventListener("click", function() {
        counter.innerText++
    })

    commentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        let paragraph = document.createElement("p");
        commentDiv.appendChild(paragraph)
        paragraph.innerText = newComment.value
        commentForm.reset();
    })

    pauseButton.addEventListener("click", function() {
        if (pauseButton.innerText == "pause") 
            {   pauseButton.innerText = "resume";
                minusButton.disabled = true;
                plusButton.disabled = true;
                heartButton.disabled = true;
                submitButton.disabled = true;
                isPaused = true;
            }
        else
            {   pauseButton.innerText = "pause"; 
                minusButton.disabled = false;
                plusButton.disabled = false;
                heartButton.disabled = false;
                submitButton.disabled = false;
                isPaused = false;
            }
    })
})