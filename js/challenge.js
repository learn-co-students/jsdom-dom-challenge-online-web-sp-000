let playing = true, count = 0;

const button_pause = document.getElementById('pause');
const button_plus = document.getElementById('plus');
const button_minus = document.getElementById('minus');
const button_heart = document.getElementById('heart');
const button_submit = document.getElementById('submit');

const timer = () => {
  return setInterval(function () {
    count ++;
    counter.textContent = count;
  }, 1000);
}

let interval = timer();

document.addEventListener('click', (event)=>{
  if(event.target.id === 'plus'){
    count ++;
    counter.textContent = count;
  }else if (event.target.id === 'minus'){
    count --;
    counter.textContent = count;
  }else if (event.target.id === 'pause'){
    if(playing){
      button_pause.textContent = 'resume';
      buttons_disabled();
      clearInterval(interval);
      playing = false;
    }else{
      button_pause.textContent = 'pause';
      reset();
      playing = true;
    }
  }else if (event.target.id === 'heart'){
    const li = document.createElement('li');
    li.innerText = `${count} liked`;
    document.querySelector('ul.likes').appendChild(li);
  }else if (event.target.id === 'submit'){
    const comment = document.querySelector('input#comment-input').value;
    const p = document.createElement('p');
    p.innerText = comment;
    document.querySelector('div#list').appendChild(p);
    event.preventDefault();
  }

});


function reset(){
  count = 0;
  counter.textContent = count;
  interval = timer();
  buttons_disabled();
}

function buttons_disabled(){
  button_plus.disabled = playing? true : false;
  button_minus.disabled = playing? true : false;
  button_heart.disabled = playing? true : false;
  button_submit.disabled = playing? true : false;
}
