document.addEventListener('DOMContentLoaded', (e) => {

    let paused = false

    const counterNode = document.body.querySelector('#counter');
    const plusNode = document.querySelector('#plus');
    const minusNode = document.querySelector('#minus');
    const pauseNode = document.querySelector('#pause');
    const likeNode = document.querySelector('#heart');
    const likesNode = document.querySelector('.likes');
    const commentInput = document.querySelector('#comment-input');
    const commentsNode = document.querySelector('#list');
    const submitNode = document.querySelector('#submit')

    function addOneToCounter() {
        if (!paused) {
            counterValue = counterNode.innerText;
            counterInt = parseInt(counterValue);
            counterNode.innerText = `${counterInt + 1}`;
        }
    }

    function handleMinusClick() {
        counterValue = counterNode.innerText;
        counterInt = parseInt(counterValue);
        counterNode.innerText = `${counterInt - 1}`;
    }

    function handlePauseClick() {
        paused = !paused;
        if (paused == false) {
            pauseNode.innerText = 'pause';
            for (let i = 0; i < counterEffectorNodes.length; i++) {
                counterEffectorNodes[i].disabled = false;
                submitNode.disabled = false;
            }
        } else {
            pauseNode.innerText = 'resume';
            for (let i = 0; i < counterEffectorNodes.length; i++) {
                if (counterEffectorNodes[i] == pauseNode) {
                    continue;
                } else {
                    counterEffectorNodes[i].disabled = true;
                    submitNode.disabled = true;
                }
                
            }
        }
    }

    function createLiNode() {
        const likesChildren = likesNode.children
        const counterValue = parseInt(counterNode.innerText);
        for (let i = 0; i < likesChildren.length; i++) {
            const like = likesChildren[i];
            if (like.dataset.num == counterValue) {
                const span = like.querySelector('span');
                const spanValue = parseInt(span.innerText);
                span.innerText = `${spanValue + 1}`;
                return
            } 
        }
        const liNode = document.createElement('li');
        
        liNode.innerText = `${counterValue} has been liked `;
        liNode.innerHTML += `<span>1</span> time`
        liNode.setAttribute('data-num', counterValue);
        likesNode.appendChild(liNode);
    }

    function handleLikeClick() {
        createLiNode(); 
    }

    const counterEffectorNodes = [plusNode, minusNode, pauseNode, likeNode];
    for (let i = 0; i < counterEffectorNodes.length; i++) {
        counterEffectorNodes[i].addEventListener('click', (effectorEvent) => {
            if (counterEffectorNodes[i] == plusNode) {
                addOneToCounter();
            } else if (counterEffectorNodes[i] == minusNode) {
                handleMinusClick();
            } else if (counterEffectorNodes[i] == pauseNode) {
                handlePauseClick();
            } else if (counterEffectorNodes[i] == likeNode) {
                handleLikeClick();
            }
        });
    }

    setInterval(addOneToCounter, 1000);
    
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        const pNode = document.createElement('p');
        pNode.innerText = `${commentInput.value}`;
        commentsNode.appendChild(pNode);
        commentInput.value = '';
    });

});