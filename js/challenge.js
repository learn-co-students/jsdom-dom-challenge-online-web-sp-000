const counter = setInterval(() => {timer()}, 1000 );
let count = 0;
let numLikes = {};

function timer() {
  count++
  document.getElementById('counter').innerHTML = count
};

const decrease = document.getElementById('minus')
decrease.addEventListener("click", function(event) {
  count--
  document.getElementById('counter').innerHTML = count
})

const increase = document.getElementById('plus')
increase.addEventListener("click", function(event){
  count++
  document.getElementById('counter').innerHTML = count
})

const pause = document.getElementById('pause')
pause.addEventListener('click', function(event) {
})

const like = document.getElementById('heart')
const likes = document.getElementsByClassName('likes')[0]

like.addEventListener("click", function(event) {
  if (numLikes[count]) {
    const itemID = document.getElementById(`likedItem-${count}`)
    numLikes[count]++
    itemID.innerHTML = `${count} has been liked ${numLikes[count]} times`
  } else { 
    numLikes[count] = 1 
    const listItem = document.createElement('li')
    listItem.setAttribute('id', `likedItem-${count}`)
    listItem.innerHTML = `${count} has been liked ${numLikes[count]} times`
    likes.appendChild(listItem);
  }
})

const commentary = document.getElementById('comment-input')
const list = document.getElementById('list')
const form = document.getElementById('comment-form')

form.addEventListener("submit", function(event) {
  const comment = document.createElement('li')
  comment.innerText = commentary.value
  list.appendChild(comment)
  event.preventDefault()
  commentary.value = ""
})

