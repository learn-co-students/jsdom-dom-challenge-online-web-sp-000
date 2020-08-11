let counter_id = document.getElementById("counter");
let minus_id = document.getElementById("minus");
let plus_id = document.getElementById("plus");
let heart_id = document.getElementById("heart");
let pause_id = document.getElementById("pause");
let comment_id = document.getElementsByTagName("form")[0];

//As a user, I should see the timer increment every second once the page has loaded.

let life = true;
let counter = 0;

let timer = setInterval(function(){
    if (life){
        counter_id.innerHTML = counter;
        counter += 1;
    }
}, 1000);


//As a user, I can manually increment and decrement the counter using the plus and minus buttons.

plus_id.addEventListener("click", function(){
    counter += 1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1;
})

minus_id.addEventListener("click", function(){
    counter -= 1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1;
})


//As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

heart_id.addEventListener("click", function(){
    let like = document.querySelector(".likes");

    if (document.getElementById(`Li${counter}`) == null){
        let li = document.createElement("li");
        li.setAttribute("id", `Li${counter}`);
        li.innerHTML = `${counter} has this many likes: 1`;
        like.appendChild(li);
    }
    else {
        let li = document.getElementById(`Li${counter}`);
        let splitted = parseInt(li.innerHTML.split(":")[1]) + 1;
        li.innerHTML = `${counter} has this many likes: ${splitted}`;
        like.appendChild(li);
    }
})

//As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
pause_id.addEventListener("click", function(){
    if (life){
        pause_id.innerHTML = "resume";
        life = false;
    }
    else {
        pause_id.innerHTML = "pause";
        life = true;
    }
})

// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
comment_id.addEventListener("submit", function(a){
    a.preventDefault();
    let child = this.children[0];
    let value = child.value;
    child.value="";
    let comment = document.querySelector(".comments");
    let p = document.createElement("p");
    p.innerText = value;
    comment.appendChild(p);
})