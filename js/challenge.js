let playing = true

timer = function(){ return setInterval(function(){
        let counter = document.getElementById('counter')
        let counterInt = parseInt(counter.innerText)
        counter.innerText = counterInt + 1
}, 1e3)}

interval = timer()

document.getElementById('minus').addEventListener('click', function(){
    let counterInt = parseInt(counter.innerText)
    counter.innerText = counterInt - 1
})

document.getElementById('plus').addEventListener('click', function(){
    let counterInt = parseInt(counter.innerText)
    counter.innerText = counterInt + 1
})

document.getElementById('heart').addEventListener('click', function(){
    let element = document.createElement('li')
    element.innerHTML = `${document.getElementById('counter').innerText}`
    document.querySelector('.likes').appendChild(element)
})

newComment = document.getElementById('comment-input')

document.getElementById('comment-form').addEventListener('submit', (e) => {
    e.preventDefault()
    let element = document.createElement('li')
    element.innerHTML = newComment.value
    document.getElementById('list').appendChild(element)
})

document.getElementById('pause').addEventListener('click', function(){
    if (playing ==  true) {
        clearInterval(interval)
        this.innerText = 'resume'
        playing = false
    } else {
        interval = timer()
        this.innerText = 'pause'
        playing = true
    }
})