var i =-1;
var j = 0;
//setting the variables
var interval = setInterval( increment, 1000);

function increment(){
    i++;
    document.querySelector('h1#counter').textContent = i;
    j = 0;
}
increment();

document.getElementById("minus").addEventListener("click", function(){
  i--;
  document.querySelector('h1#counter').textContent = i;
});

document.getElementById("plus").addEventListener("click", function(){
  i++;
  document.querySelector('h1#counter').textContent = i;
});

document.getElementById("heart").addEventListener("click", function(){
  j++;
  //on click, we are increasing amount of likes
  var li = document.createElement("li");
  //we are creating a new li on a DOCUMENT
  var node = document.createTextNode(i + " has been liked " + j + " time(s).")
  //we are creating a new textNode on a DOCUMENT
  var likes = document.querySelector('#likes')
  //we are getting the likes DIV
  var lastLike = document.querySelector('#likes').lastChild
  //getting the last child of #like
  li.appendChild(node);
  //appending the last textNode to li (still nowhere attached)
  if(j>1){
   lastLike.replaceWith(li)
   //since it already exists, replace it
  } else {
    likes.appendChild(li);
    //since it is the first, create a new textNode
  }
});
document.getElementById("pause").addEventListener("click", function(){
    if(document.querySelector('#pause').innerText == "pause") {
      clearInterval(interval)
      document.querySelector('#pause').innerText = "resume"
      document.getElementById("minus").disabled = true;
      document.getElementById("plus").disabled = true;
      document.getElementById("heart").disabled = true;
      document.getElementById("submit").disabled = true;
    } else {
      interval = setInterval( increment, 1000);
      document.querySelector('#pause').innerText = "pause"
      document.getElementById("minus").disabled = false;
      document.getElementById("plus").disabled = false;
      document.getElementById("heart").disabled = false;
      document.getElementById("submit").disabled = false;
    }
  });