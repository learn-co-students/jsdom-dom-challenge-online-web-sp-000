let counter_element = document.getElementById("counter"),
    minus_element = document.getElementById("minus"),
    plus_element = document.getElementById("plus"),
    heart_element = document.getElementById("heart"),
    pause_element = document.getElementById("pause"),
    comment_element = document.getElementsByTagName("form")[0],
    comment_value = document.getElementById("comment-input"),
    comment_list = document.getElementById("list"),
    submit_element = document.getElementById("submit"),
    like_list = document.getElementsByClassName("likes")[0],
    playing = 1,
    interval = timer(),
    like_count = {},
    times, number, new_like, number_like;

function timer(){
  return setInterval(function(){
    let number = parseInt(counter_element.innerText);
    counter_element.innerText = number + 1;
  }, 1e3);
}

function disableAll(){
  minus_element.disabled = true;
  plus_element.disabled = true;
  heart_element.disabled = true;
  submit_element.disabled = true;
}

function enableAll(){
  minus_element.disabled = false;
  plus_element.disabled = false;
  heart_element.disabled = false;
  submit_element.disabled = false;
}

minus_element.addEventListener("click", function(){
  let number = parseInt(counter_element.innerText);
  counter_element.innerText = number - 1;
});

plus_element.addEventListener("click", function(){
  let number = parseInt(counter_element.innerText);
  counter_element.innerText = number + 1;
});

comment_element.addEventListener("submit", function(a){
  let value = comment_value.value;
  comment_value.value = "";
  let new_comment = document.createElement("p");
  new_comment.innerText = value;
  comment_list.appendChild(new_comment);
  a.preventDefault();
});

pause_element.addEventListener("click", function(event){
    if (playing == 1){
      clearInterval(interval), playing = 0,  this.innerText = "resume";
      disableAll();
    }
    else if (playing == 0){
      interval = timer(), playing = 1,  this.innerText = "pause";
      enableAll();
    }
});

heart_element.addEventListener("click", function(event){
  let number = counter_element.innerText;

  if (like_count[number]){
    like_count[number] = like_count[number] + 1;
    let li = document.querySelector(`[data-number="${number}"]`);
    li.innerHTML = `${number} has been liked ${like_count[number]}`;
    }
  else {
    like_count[number] = 1;
    let new_like = document.createElement("li");
    new_like.dataset.number = number;
    new_like.innerText = `${number} has been like`;
    like_list.appendChild(new_like);
  }
    });
