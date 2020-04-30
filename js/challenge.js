document.addEventListener("DOMContentLoaded", () => {
  let counter = 0;
  let counterIsOn = false;
  let time = '';
  timesLiked = 0;

  function startCounter() {
    document.getElementById('counter').innerHTML = counter;
    counter++;
    time = setTimeout(startCounter, 1000);
  }

  function pauseCounter(){
    clearTimeout(time);
    timer_is_on = false;
  }


  if(!counterIsOn){
    counterIsOn = true;
    startCounter();
  }

  pause.addEventListener("click", function(event) {
    pauseCounter();
    let pausePlayDiv = document.getElementById("pause-play");
    let play = document.createElement("button");
    play.id  = 'play';
    play.innerHTML = 'play';
    pausePlayDiv.appendChild(play);
    let pause = document.getElementById('pause');
    pause.style.display = 'none';
    disableOtherButtons(pausePlayDiv);


    play.onclick = function(){
      startCounter();
      pausePlayDiv.removeChild(pausePlayDiv.lastChild);
      pause.style.display = 'inline';
      enableOtherButtons(pausePlayDiv);
    }
  });


  minus.addEventListener("click", function(event) {
    document.getElementById('counter').innerHTML = counter--;
  });

  plus.addEventListener("click", function(event) {
    document.getElementById('counter').innerHTML = counter++;
  });

  function disableOtherButtons(divButtons){
    children = divButtons.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].innerHTML != 'play'){
        children[i].disabled = true;
      }
    }
  }

  function enableOtherButtons(divButtons){
    children = divButtons.children;
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = false;
    }
  }

  heart.addEventListener("click", function(event) {

    let counterNumDiv = document.getElementById("counter-number");

    let likeNumH1 = document.createElement("h1");
    likeNumH1.id = Math.random().toString(36).substring(7);
    likeNumH1.className = 'counter';
    likeNumH1.innerHTML = --counter;

    likeNumH1.appendChild(addLikeNumDiv());
    counterNumDiv.appendChild(likeNumH1);

  });

  function addLikeNumDiv(){
    let likeNumDiv = document.createElement("div");
    likeNumDiv.id = Math.random().toString(36).substring(7);
    likeNumber = setFirstLike();
    likeNumDiv.appendChild(likeNumber);
    likeNumDiv.appendChild(addPlusSign(likeNumber.id));
    likeNumDiv.style = "display: inline;"
    return likeNumDiv;
  }

  function setFirstLike(){
    let likeButton = document.createElement("button");
    likeButton.sytle = "margin: 1px;"
    likeButton.id = Math.random().toString(36).substring(7);
    likeButton.innerHTML = 1;
    return likeButton;
    // likeNumDiv.appendChild(likeButton);
  }

  function addPlusSign(id){
    let plus = document.createElement("button");
    plus.id = Math.random().toString(36).substring(7);
    plus.sytle = "margin: 1px;"
    plus.innerHTML = '+';

    plus.onclick = function(){
      likeNumberMore(id);
    }

    return plus;
  }

  function likeNumberMore(likeNumId){
    // alert('I like you even more like this!');
    let element = document.getElementById(likeNumId);
    element.innerHTML = parseInt(element.innerHTML) + 1;
  }

  let form = document.getElementById("comment-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    leaveComment();

  });

  function leaveComment(){
    // alert("Thank you for your comment!")
    let comment = document.getElementById("comment-input");

    let table = document.getElementById("comments");
    let tr = document.createElement("tr");
    tr.id = Math.random().toString(36).substring(7);

    let userTd = document.createElement("td");
    let commentTd = document.createElement("td");
    let dateTd = document.createElement("td");
    commentTd.appendChild(document.createTextNode(comment.value));
    userTd.innerText = Math.random().toString(36).substring(7);
    let date = new Date();
    dateTd.innerText = date;

    if (comment.value === ''){
      alert('Please try again: text is empty!');
    }else{
      tr.appendChild(userTd);
      tr.appendChild(commentTd);
      tr.appendChild(dateTd);
      table.appendChild(tr);
      comment.value = '';
    }

  }

});
