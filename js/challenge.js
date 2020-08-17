let counterIsPaused = false;
const counterH1 = document.querySelector('#counter')

setInterval(function() {
    if(counterIsPaused == false){
        counterH1.innerText++
    }
}, 1000)

let pause = document.querySelector('#pause')
pause.addEventListener('click', function(){
    if(counterIsPaused == false){
        counterIsPaused = true
    } else {
        counterIsPaused = false
    }
})

let add = document.querySelector('#plus')
add.addEventListener('click', function(){
    counterH1.innerText = parseFloat(counterH1.innerText) + 1
})

let minus = document.querySelector('#minus')
minus.addEventListener('click', function(){
    counterH1.innerText = parseFloat(counterH1.innerText) - 1
})

let likes = {};

let likeList = document.querySelector('.likes')

let heart = document.querySelector('#heart')
heart.addEventListener('click', function(){
    let counterNumber = counterH1.innerText
    if(likes[counterNumber] == undefined){
        likes[counterNumber] = 1
    } else {
        likes[counterNumber]++
    }

    likeList.innerHTML = ''
    for (var key in likes) {
        let number = key
        let numberOfLikes = likes[key]
        let likeItem = document.createElement('li')
        likeItem.innerText = `${number} has been liked ${numberOfLikes}`
        likeList.append(likeItem)
    }
})

pause.addEventListener('click', e => {
    if(pause.innerHTML == 'resume'){
        e.preventDefault();
        isPaused = true;
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        pause.innerHTML = 'pause'
    }else{
        isPaused = false;
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        pause.innerHTML = 'resume'
    }
})

let commentList = document.querySelector('form')

commentList.addEventListener('submit', e => {
    e.preventDefault();
    let value = commentList.children[0].value

    let d = document.querySelector('.comments'),
        p = document.createElement('p');
        p.innerText = value, d.appendChild(p)
})

