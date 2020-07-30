const counter = document.getElementById('counter')

document.addEventListener('DOMContentLoaded', (event)=>{

let num = parseInt(counter.innerText)


let timer = setInterval(function(){
    num++
   counter.innerText = num.toString() }, 1000)
    

   document.getElementById('minus').addEventListener('click', function(event){ 
       counter.innerText--
    })

   document.getElementById('plus').addEventListener('click', function(event){
       counter.innerText++
   })

              let btn = document.getElementById('pause')
              btn.addEventListener('click', function(event){
                if (btn.innerText == 'pause'){
                    btn.innerText = 'resume'
                    clearInterval(timer)
                }
                else if (btn.innerText == 'resume'){
                    btn.innerText = 'pause'
                    timer = setInterval(function(){
                        num++
                       counter.innerText = num.toString() }, 1000)
                    
                }
              })
     })

     document.getElementById("comment-form").addEventListener("submit", function(event){
      event.preventDefault()
      let list = document.getElementById('list')

    let comment = document.getElementById('comment-input').value 
    
    let newEle = document.createElement('LI')

    list.appendChild(newEle)
    newEle.innerText = comment 
    })

    const likes = {}

    let heart = document.getElementById('heart')

    heart.addEventListener('click', function(event){
      let number = counter.innerText
      
      if (Object.keys(likes).includes(`${number}`)){
        likes[`${number}`] ++ ;
      }
      else {
        likes[`${number}`] = 1;
      }

       let likeList = document.getElementsByTagName('ul')[0]
       
       let newTally = document.createElement('LI')
  
       likeList.appendChild(newTally)

       newTally.innerText = `${number}` + " has " + `${likes[number]}` + " like(s) "

    })
 

