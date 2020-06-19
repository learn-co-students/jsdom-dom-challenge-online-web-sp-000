document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM has loaded");
    // As a user, I should see the timer increment every second once the page has loaded.
    // Grab the counter id
    let counter = document.getElementById("counter");
    //Number currently being displayed turend to an int
    let num = parseInt(counter.innerHTML);
    //For each second increase the number in num by 1
    setInterval(function() { counter.innerHTML = (num += 1); }, 1000);

    // As a user, I can manually increment and decrement the counter using the plus and minus buttons.
    function upOne() {
        document.getElementById("counter").innerHTML = (num += 1);
    }
 
    document.getElementById("plus").addEventListener("click", upOne);

    function downOne() {
        document.getElementById("counter").innerHTML = (num -= 1);
    }
 
    document.getElementById("minus").addEventListener("click", downOne);

    // As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

    function likeNum() {        
        //num is the number on the counter
        if(document.getElementById(num.toString())){
            let value = parseInt(document.getElementById(num.toString()).value, 10);
            value = isNaN(value) ? 0 : value;
            value ++
            document.getElementById(num.toString()).value = value
        } else {
            let counter = 1;
            let likes = `${num} was liked ${counter} times!`;
            let list = document.createElement("LI")
            list.setAttribute('id', num)
            let textnode = document.createTextNode(likes);
            list.appendChild(textnode);
            document.getElementsByClassName("likes")[0].appendChild(list);
            console.log(list);
        }
        


    
        // let list = document.createElement("LI");
        // // list.id = num;
        // if(document.getElementById(num)){ //true then update num
        //     document.getElementById(num).innerHTML += 1;
        // } else { //create a new LI element with an id of num and set the innerHTML to 1
        //     let list = document.createElement("LI");
        //     let textnode = document.createTextNode(1);
        //     list.appendChild(textnode);
        //     document.getElementsByClassName("likes")[0].appendChild(list);
            

        // }
        //when LI node is created assign id that is = to current counter number to that element
        
    
    }

    document.getElementById("heart").addEventListener("click",likeNum)
    

    
    
})




// As a user, I can pause the counter, which should