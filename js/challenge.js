const maybePluralize = (count, noun, suffix = 's') =>
  `${noun}${count !== 1 ? suffix : ''}`;

document.addEventListener("DOMContentLoaded", () => {
    // your code here
    // functions 
    function addComment(event) {
        event.preventDefault();
        const commentList = document.getElementById('list'); 
        const pNode = document.createElement('p'); 
        const commentInput = document.getElementById('comment-input'); 
        const textNode = document.createTextNode(commentInput.value); 

        pNode.appendChild(textNode);
        commentList.appendChild(pNode);
        commentInput.value = '';
    }

    function likeCounter() {
        const counter = parseInt(document.getElementById('counter').textContent);
        let listEl = document.querySelector('[data-num="'+counter+'"]')
        if (listEl == null) {
            // need to create the listElement
            listEl = document.createElement('li'); 
            listEl.dataset.num = counter.toString(); 
            const likeCount = 0; 
            const text = `${counter} has been liked <span>${likeCount}</span> ${maybePluralize(likeCount, 'time')}`
            listEl.innerHTML = text;
            const likesList = document.querySelector('ul.likes');
            likesList.append(listEl); 
        }
        else {
            let likeCount = parseInt(listEl.querySelector('span').textContent);
            likeCount += 1; 
            const text = `${counter} has been liked <span>${likeCount}</span> ${maybePluralize(likeCount, 'time')}`
            listEl.innerHTML = text;
        }
    }

    function incrementCounter() {
        const counter = document.getElementById('counter'); 
        let count = parseInt(document.getElementById('counter').textContent);
        count += 1; 
        counter.textContent = count; 
    }

    function decrementCounter() {
        const counter = document.getElementById('counter'); 
        let count = parseInt(document.getElementById('counter').textContent);
        count -= 1; 
        counter.textContent = count; 
    }

    function pauseTimer() {
        if (pauseButton.innerText == "pause") {
            window.clearInterval(timerID);
            pauseButton.innerText = "resume"; 
            disableButtons(); 
        }
        else {
            timerID = window.setInterval(incrementCounter, 1000);
            pauseButton.innerText = "pause";
            enableButtons(); 
        }
    }

    function disableButtons() {
        const buttons = document.querySelectorAll('button'); 
        buttons.forEach(disableButton); 
    }

    function enableButtons() {
        const buttons = document.querySelectorAll('button'); 
        buttons.forEach(enableButton); 
    }

    function disableButton(button) {
        if (button.id != "pause") {
            button.disabled = true; 
        }
    }

    function enableButton(button) {
        button.disabled = false; 
    }
    // script(s)

    // addComment
    const commentForm = document.getElementById('comment-form'); 
    commentForm.addEventListener('submit', addComment); 

    // likeCounter
    const likeButton = document.getElementById('heart');
    likeButton.addEventListener('click', likeCounter);

    // incrementCounter 
    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', incrementCounter);

    // decrementCounter
    const minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', decrementCounter); 

    // startTimer
    let timerID = window.setInterval(incrementCounter, 1000);

    // pause 
    const pauseButton = document.getElementById('pause'); 
    pauseButton.addEventListener('click', pauseTimer); 

}); 