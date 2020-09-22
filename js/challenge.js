let running = true
let timer

const counter = document.getElementById('counter'),
  minusBtn = document.getElementById('minus'),
  plusBtn = document.getElementById('plus'),
  heartBtn = document.getElementById('heart'),
  pauseBtn = document.getElementById('pause'),
  commentForm = document.getElementsByTagName('form')[0];

function runCounter() {
  timer = setInterval(adjustCounter, 1000)
}

function adjustCounter(direction='up') {
  const num = parseInt(counter.innerText)
  counter.innerText = (direction == 'up' ? (num + 1) : (num - 1))
}

runCounter()

minusBtn.addEventListener('click', () => adjustCounter('down'))
plusBtn.addEventListener('click', () => adjustCounter('up'))

pauseBtn.addEventListener('click', () => {
  if (running) {
    running = false
    clearInterval(timer)
    pause.innerText = 'resume'
  } else {
    running = true
    runCounter()
    pause.innerText = 'pause'
  }
})

let likedNums = []

heartBtn.addEventListener('click', () => {
  const num = parseInt(counter.innerText)
  const ul = document.getElementById('likes')
  let li
  if (likedNums.includes(num)) {
    li = document.getElementById(num)
    const liNum = parseInt(li.children[0].innerText)
    li.innerHTML = `${num} has been liked <span>${liNum + 1}</span> times`
  } else {
    li = document.createElement('li')
    li.setAttribute('id', num)
    li.innerHTML = `${num} has been liked <span>1</span> time`
    ul.appendChild(li)
    likedNums.push(num)
  }
})

commentForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const commentsDiv = document.getElementById('list'),
    p = document.createElement('p'),
    comment = document.getElementById('comment-input');
  p.innerHTML = `<i>"${comment.value}"</i>`
  commentsDiv.appendChild(p)
  comment.value = ''
})
