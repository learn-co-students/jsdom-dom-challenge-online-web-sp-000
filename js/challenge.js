window.onload = function(){
   let num = 0;
   let timesLiked = 0;
     let byOne = setInterval(stepUp, 2000)
     function stepUp() {
        num++;
        let count = document.getElementById('counter');
        count.innerText = num;
     };

     document.getElementById("minus").addEventListener("click", function(){
      num--;
      document.getElementById('counter').innerText = num;
    });

    document.getElementById("plus").addEventListener("click", function(){
      num++;
      document.getElementById('counter').innerText = num;
    });

    document.getElementById("heart").addEventListener("click", function(){
      timesLiked++;
      let list = document.createElement("li");
      let text = document.createTextNode(num + " has " + timesLiked + " like(s).")
      let likes = document.querySelector('.likes')
      let liked = document.querySelector('.likes').lastChild
      list.appendChild(text);
      if(timesLiked > 1){
       liked.replaceWith(list)
      } else {
        likes.appendChild(list);
      }
    });

    document.getElementById("pause").addEventListener("click", function(){
      if(document.getElementById('pause').innerText == "pause") {
        clearInterval(byOne)
        document.getElementById('pause').innerText = "resume"
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
      } else {
        byOne = setInterval( stepUp, 1000);
        document.getElementById('pause').innerText = "pause"
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
      }
    });

    document.getElementById("submit").addEventListener("click", function(event){
      event.preventDefault();
      let comment = document.getElementById('comment-input').value
      let list = document.getElementById('list')
      let para = document.createElement("p");
      let node = document.createTextNode(comment)
      para.appendChild(node);
      list.appendChild(para);
    });

};