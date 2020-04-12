/* Requirements:
    1. The timer should increment every second once the page has loaded.
    2. Be able to manually increment and decrement the like button.
    3. 'Like' an individual number of the counter. See the count associated with that number.
    4. Pause the counter
        --> disable all buttons except the pause button
        --> pause button shows text 'resume'
    5. 'Resume' restarts the counter and enables the buttons.
    6. You can add comments.
*/

let counterIsPaused = false;
const counter = document.querySelector('#counter')

setInterval(function(){
    if(counterIsPaused == false){
        counter.innerText++
    }
}, 1000)

let pause = document.querySelector("#pause")
pause.addEventListener('click', function(){
    if(counterIsPaused == false){
        counterIsPaused = true
    } else {
        counterIsPaused = false
    }
})

let incrementCounter = document.querySelector('#plus')
incrementCounter.addEventListener('click', function(){
    counter.innerText = parseFloat(counter.innerText) + 1
})

let decrementCounter = document.querySelector('#minus')
decrementCounter.addEventListener('click', function(){
    counter.innerText = parseFloat(counter.innerText) - 1
})

let likes = {};

let likeList = document.querySelector('.likes')

let heart = document.querySelector('#heart')
heart.addEventListener('click', function(){
    let counterNumber = counter.innerText
    if(likes[counterNumber] == undefined){
        likes[counterNumber] = 1
    } else {
        likes[counterNumber]++
    }

    likeList.innerHTML = ""
    for (var key in likes) {
        let number = key
        let numberOfLikes = likes[key]
        let likeItem = document.createElement('li')
        likeItem.innerText = `${number} has been liked ${numberOfLikes}`
        likeList.append(likeItem)
    }
})

let comments = {};
let commentsList = document.querySelector('.comments')
commentsList.innerHTML = ""
for (var key in comments) {
    let comment = key
    let addComment = document.createElement('li')
    addComment.innerText = `${comment}`
    addComment.append(addComment)
}

