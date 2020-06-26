const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const submit = document.getElementById('submit')
const buttons = [minus, plus, heart, submit]

const likeNumber = () => {
    let section = document.getElementsByClassName('likes')[0];
    const number = counter.innerText;
    const node = document.querySelector(`[data-num="${number}"]`)
    if (!!node) {
        let span = node.getElementsByTagName('span')[0]
        span.innerText = parseInt(span.innerText, 10) + 1
    } else {
    const newNode = document.createElement('li');
    newNode.setAttribute("data-num", number);
    newNode.innerHTML = `${number} has been liked <span>1</span> time`;
    section.appendChild(newNode);
    }
}
function setTimer() {
    return window.setInterval(() => {
        counter.innerText = parseInt(counter.innerText, 10) + 1
    }, 1000);
}

let intervalID = setTimer()

pause.addEventListener('click',function() {
  if (intervalID) {
    console.log(intervalID)  
    clearInterval(intervalID)
    intervalID = null
    pause.innerText = "Resume"
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true
    }
  } else {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false
    }
    setTimer()
  }
})

minus.addEventListener('click', function () {
    counter.innerText = parseInt(counter.innerText, 10) - 1
})

plus.addEventListener('click', function () {
    counter.innerText = parseInt(counter.innerText, 10) + 1
})

heart.addEventListener('click', likeNumber)

submit.addEventListener('click', function(event) {
    event.preventDefault()
    const p = document.createElement('p');
    p.innerText = document.getElementById('comment-input').value;
    document.getElementById('list').appendChild(p);
})

