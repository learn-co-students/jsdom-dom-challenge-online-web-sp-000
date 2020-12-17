

document.addEventListener('DOMContentLoaded', (event) => {

  var buttons = document.querySelectorAll('button');
  console.log(buttons);

  let h3 = document.createElement("h3");
  let likes = document.createTextNode("");
  h3.appendChild(likes);

  document.querySelector('.likes').appendChild(h3);

  var hold = 0;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
      event.preventDefault();

      if (event.target == document.getElementById('minus')) {
        hold -= 1;
        document.getElementById('counter').innerHTML = hold;
      }
      else if (event.target == document.getElementById('plus')) {
        hold += 1;
        document.getElementById('counter').innerHTML = hold;
      }
      else if (event.target == document.getElementById('heart')) {
        document.querySelector('h3').innerHTML = document.querySelectorAll('h1')[1].innerHTML + " Likes";
      }
      else if (event.target == document.getElementById('submit')) {
          let item = document.createElement('li');
          let itemText = document.createTextNode(document.getElementById('comment-input').value);
          item.appendChild(itemText);
          document.getElementById('list').appendChild(item);

      }
    });

  };


  var x = 0;
  let h1 = document.createElement("h1");
  let att = document.createTextNode("");
  h1.appendChild(att);

  let first = document.getElementsByTagName("h1")[0];
  first.appendChild(h1);

  let clock = document.createElement("h2");
  let att2 = document.createTextNode("Clock");
  clock.appendChild(att2);
  document.getElementsByTagName("h1")[0].appendChild(clock);

  var newTime = setInterval(getX, 1000);

  function getX() {
    var timer = document.getElementsByTagName("h1")[1];
    x = x + 1;
    timer.innerHTML = x;
  };


});
