document.addEventListener('DOMContentLoaded', () => {
  // your code here
  setInterval(timer, 1000)

  document.querySelector('#minus').addEventListener('click', minus, false)
  document.querySelector('#plus').addEventListener('click', plus, false)
  document.querySelector('#heart').addEventListener('click', like, false)
  document.querySelector('#pause').addEventListener('click', pause, false)
  document.querySelector('#submit').addEventListener('click', addComment, false)
})

const likeCount = [0]
let paused = false
let count = 0

const timer = () => {
  if (!paused) {
    count++
    document.getElementById('counter').innerText = count
  }
}

const minus = e => {
  if (count > 0) {
    count--
  }
  document.getElementById('counter').innerText = count
}

const plus = e => {
  count++
  document.getElementById('counter').innerText = count
}

const like = e => {
  if (!likeCount[count]) {
    likeCount[count] = 0
  }
  likeCount[count]++
  if (likeCount[count] < 2) {
    document.getElementById(
      'likes'
    ).innerHTML += `<li id="likes-${count}">${count} has been liked ${likeCount[count]} times</li>`
  } else {
    document.getElementById(
      `likes-${count}`
    ).innerHTML = `${count} has been liked ${likeCount[count]} times`
  }
}

const pause = e => {
  if (paused) {
    paused = false
    document.getElementById('pause').innerHTML = 'pause'
  } else {
    paused = true
    document.getElementById('pause').innerHTML = 'resume'
  }
  document.getElementById('minus').disabled = paused
  document.getElementById('plus').disabled = paused
  document.getElementById('heart').disabled = paused
}

const addComment = e => {
  const comment = document.getElementById('comment-input').value
  document.getElementById('comment-input').value = ''
  document.getElementById('list').innerHTML += `<p>${comment}</p>`
  e.preventDefault()
}
