let counter_element = document.getElementById("counter"),
    minus_element = document.getElementById("minus"),
    plus_element = document.getElementById("plus"),
    heart_element = document.getElementById("heart"),
    pause_element = document.getElementById("pause"),
    comment_element = document.getElementsByTagName("form")[0],
    comment_value = document.getElementById("comment-input"),
    comment_list = document.getElementById("list"),
    playing = 1,
    intervalID = setInterval(counter, 1e3);

function counter(){
  number = parseInt(counter_element.innerText);
  counter_element.innerText = number + 1;
}

function timer(){
  return intervalID;
}

minus_element.addEventListener("click", function(){
  number = parseInt(counter_element.innerText);
  counter_element.innerText = number - 1;
});

plus_element.addEventListener("click", function(){
  number = parseInt(counter_element.innerText);
  counter_element.innerText = number + 1;
});

comment_element.addEventListener("submit", function(a){
  value = comment_value.value;
  comment_value.value = "";
  new_comment = document.createElement("p");
  new_comment.innerText = value;
  comment_list.appendChild(new_comment);
  a.preventDefault();
});

pause_element.addEventListener("click", function(){
    if (playing == 1){
      playing = 0, clearInterval(intervalID), this.innerText = "resume";
    }
    else if (playing == 0){
      playing = 1, timer(), this.innerText = "pause";
    }
});
