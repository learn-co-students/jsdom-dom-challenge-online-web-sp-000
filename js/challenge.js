// 1. As a user, I should see the timer increment every second once the page has loaded.
// 2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// 3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// 4. As a user, I can pause the counter, which should 

//   * pause the counter
//   * disable all buttons except the pause button
//   * the pause button should then show the text "resume."

//   When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

// ## Hint for the timer

// If you're not sure how to create or pause a timer, look into:
// [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
// [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
// [`clearinterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
window.onload = function start(){playing = true}
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const timerStatChange = document.getElementById("pause")
const commentList = document.getElementById('list')
const submitComment = document.getElementById('submit')
const toggleButtons = [minus, plus, heart, submitComment]

const counter = document.getElementById('counter')
let counterInt = parseInt(counter.innerText)
const timer = function(){return (setInterval(function(){counter.innerText = ++counterInt},1e3))}
let interval = timer()
// giving a second label for timer so that it can be cleared for "clearInterval" -> aka, when we stop the timer.
const likeList =document.querySelector('.likes')

const createLike = function(){
    // need to create if statement -> if like exists for __ count number, update number of likes, else if it doesn't exist, add a new list item.
    // need to add an id or attribute to new list items so that we can call on them to adjust the Like count for that integer.
    // what data to store for each li: counterInt, numLikes
    // querySelector('span').parseInt(innerText)

    //if exists, increment the int in the span in this element
    // the num in data-num could be anything.  It is declared when we use set attribute under else.
    let numberListItem = document.querySelector('[data-num="' + counterInt + '"')
    console.log(numberListItem)
    if (numberListItem) {
        // find current number of likes associated with this li
        let toEdit = numberListItem.querySelector('span')
        toEdit.innerHTML = parseInt(toEdit.innerText) + 1
    } else {
        let newItem = document.createElement('li')
        newItem.setAttribute('data-num', counterInt)
        newItem.innerHTML = counterInt+" has been liked <span>1</span> time"
        likeList.appendChild(newItem)
    }
}

const createComment = function(){
    let newComment = document.createElement('p') 
    newComment.innerText = document.getElementsByTagName('input')[0].value
 // the [0] is because it is the furst innput tag on the page, getEllementsByTagName returns a collection

    commentList.appendChild(newComment)
}

// const buttonDisable = function(button){button.disabled = true}

// const buttonEnable = function(button){button.disabled = false}




minus.addEventListener('click', function(){counter.innerText = --counterInt})
plus.addEventListener('click', function(){counter.innerText = ++counterInt})
heart.addEventListener('click', createLike)
submitComment.addEventListener('click', function(event) {event.preventDefault(); createComment()})

timerStatChange.addEventListener(
    'click', function(){
        playing?(
            playing=false, clearInterval(interval), timerStatChange.innerText = 'resume', toggleButtons.forEach(item => item.disabled = true ) 
        ):(
            playing = true, interval= timer(), timerStatChange.innerText = 'pause', toggleButtons.forEach(item => item.disabled = false)
            )
        }
    )