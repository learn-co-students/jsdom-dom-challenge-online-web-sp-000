heart_element.addEventListener("click", function(event){
  let times = 1;
  let number = counter_element.innerText;
  let new_like = document.createElement("li");
  new_like.innerText = `${number} has been like`;
  let number_like =  new_like.innerText
  like_list.appendChild(new_like);

      heart_element.addEventListener("click", function(){
        if (number == counter_element.innerText){
          times = times + 1;
          new_like.innerText = number_like.concat(` ${times} times.`);
          }
        });
})


https://www.youtube.com/watch?v=4NzLYUamat8&feature=youtu.be
