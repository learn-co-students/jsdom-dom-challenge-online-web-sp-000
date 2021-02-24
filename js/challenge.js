document.addEventListener('DOMContentLoaded', () => {
    let startTimer = 0
    let index = 0
    let body = document.body
    
    let plusBtn = document.getElementById('plus')
    let submitBtn = document.getElementById('submit')
    let heartBtn = document.getElementById('heart')
    let minusBtn = document.getElementById('minus')
    let pauseBtn = document.getElementById('pause')
    let ctr = document.getElementById('counter')
    let commentForm = document.getElementById('comment-form')
    let commentListDiv = document.getElementById('list')

    let commentListUl = document.createElement('ul')
    let heartLikesUl = document.createElement('ul')

    body.appendChild(heartLikesUl)
    commentListUl.className = "comments-ul"
    commentListDiv.appendChild(commentListUl)
    
    
    myTimer = setInterval(() =>{
        let timer = startTimer++
        ctr.innerText = timer
    }, 1000)

    
    
    likeMany = (e) => {
        index++
        console.log(index)
    }
    
    likeNumber = (e) => {
        let ctrNumber = document.createElement('li')
        ctrNumber.innerText = `${startTimer - 1} has been liked x times`
        heartLikesUl.append(ctrNumber)
        likeMany(e)
    }
    
    
    // in console.log it shows number of clicks how to get that number
    heartBtn.addEventListener('click', (e) => likeNumber(e))
    
    
    noDisplay = (bool) => {
        plusBtn.disabled = bool
        minusBtn.disabled = bool
        heartBtn.disabled = bool
        submitBtn.disabled = bool
    }

    isPaused = () => {
        pauseBtn.addEventListener('click',() =>{
            if(pauseBtn.innerText === "resume"){
                pauseBtn.innerText = "pause"
                myTimer = setInterval(() =>{
                    let timer = startTimer++
                    ctr.innerText = timer 
                }, 1000)
                noDisplay(false)
            } else {
                noDisplay(true)
                pauseBtn.innerText = "resume"
                clearInterval(myTimer)
            }
        })
    }

    this.isPaused()
    
    plusBtn.addEventListener('click',() =>{
        let timer = startTimer++
        ctr.innerText = timer
    })

    minusBtn.addEventListener('click',() =>{
        let timer = startTimer--
        ctr.innerText = timer
    })
    
    createComment = (e) =>{
        e.preventDefault()        
        let commentInput = document.getElementById('comment-input').value
        let comment = document.createElement('li')
        comment.innerText = commentInput
        commentListUl.appendChild(comment)
    }
    
    commentForm.addEventListener('submit', createComment)

    



})