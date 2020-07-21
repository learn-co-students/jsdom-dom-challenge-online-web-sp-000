const counter = document.getElementById('counter');
const likeList = document.getElementById('likesList')
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const userForum = document.getElementById('comment-form');


function nextNumber() {
    counter.innerText++;
}

function previousNumber() {
    counter.innerText--;
}

function likeNumber(){
    const time = counter.innerText;
    let likedElement = document.getElementById(`like${time}`)
    if (likedElement === null){
        likedElement = document.createElement("li");
        likedElement.id = `like${time}`
        likedElement.dataset.likes = 1;
        likeList.appendChild(likedElement);
    } else {
       likedElement.dataset.likes++;
    }
    likedElement.innerText = `${time} was liked ${likedElement.dataset.likes}`
}
function pauseAll(){
    if (pause.innerText === 'pause') {
      pause.innerText = 'resume';
      window.clearInterval(increment);
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
    } else {
      pause.innerText = 'pause'
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      increment = window.setInterval(nextNumber, 1*1000)
    }
}
function addComment(event){
    event.preventDefault();
    let newElement = document.createElement('li');
    newElement.innerText = userForum[0].value;
    document.getElementById('list').appendChild(newElement);
}



let increment = window.setInterval(nextNumber, 1*1000);
minus.addEventListener('click', previousNumber);
plus.addEventListener('click', nextNumber);
heart.addEventListener(`click`, likeNumber);
pause.addEventListener('click', pauseAll);


userForum.addEventListener("submit", addComment, event)
