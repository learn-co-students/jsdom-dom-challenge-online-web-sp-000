document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById('counter')

    // Our Counter incrementer and helper methods
    let counterID = setInterval(increaseTime, 1000)

    function currentTime() {
        return parseInt(counter.innerText)
    }

    function increaseTime() {
        counter.innerText = `${currentTime() + 1}`
    }

    function decreaseTime() {
        counter.innerText = `${currentTime() - 1}`
    }

    // Button Controls

    let counterMinus = document.getElementById('minus')
    counterMinus.addEventListener('click', e =>  {
        decreaseTime()
    });

    let counterPlus = document.getElementById('plus')
    counterPlus.addEventListener('click', e => {
        increaseTime()
    });

    let likes = {}
    let likesList = document.body.querySelector('ul.likes')
    let likeButton = document.getElementById('heart')
    likeButton.addEventListener('click', e => {
        let likeComments = likesList.querySelectorAll(`li`)
        let time = currentTime()
        let found = false
        likeComments.forEach( e => {
            if (time === parseInt(e.dataset.id)) {
                likes[time] += 1
                e.innerHTML = `${time} has been liked ${likes[time]} times`
                found = true
            }
        })

        if (found) return;
        let newComment = document.createElement("li")
        newComment.dataset.id = time.toString()
        likes[time] = 1
        newComment.innerText = `${time} has been liked ${likes[time]} time`
        likesList.appendChild(newComment)

    })

    let commentList = document.getElementById('list')
    let commentForm = document.getElementById('comment-form')
    commentForm.addEventListener('submit', e => {
        e.preventDefault()
        let textContent = document.getElementById('comment-input')
        if (textContent.value === "") return;

        let newComment = document.createElement('li')
        newComment.innerText = textContent.value
        textContent.value = ''

        commentList.appendChild(newComment)
    })

    let counterPause = document.getElementById('pause')
    counterPause.addEventListener('click', e => {
        let buttons = [counterMinus, counterPlus, likeButton, document.getElementById('submit')]

        buttons.forEach(b => {
            b.disabled = b.disabled === false;
        })

        if (counterPause.innerText === 'pause') {
            counterPause.innerText = 'resume'
            clearInterval(counterID)
        } else {
            counterPause.innerText = 'pause'
            counterID = setInterval(increaseTime, 1000)
        }
    })



})