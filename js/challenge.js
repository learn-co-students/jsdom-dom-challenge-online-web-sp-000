const counter = document.getElementById('counter')
//const likes = document.getElementsByClassName('likes')

let num = parseInt(counter.innerText)

let e = setInterval(function(){ 
   num++
   counter.innerText = num.toString() } , 1000)


   document.getElementById('minus').addEventListener('click', function(event){ 
       counter.innerText--
    })

   document.getElementById('plus').addEventListener('click', function(event){
       counter.innerText++
   })

//function pause(){
//    document.getElementById('pause').addEventListener('click', function(event){
//        clearInterval(e)
//        //let resume = document.getElementById('pause').innerHTML = 'resume'
//        document.getElementById('pause').id = 'resume'
//    })}

//function resume(){
//        document.getElementById('resume').addEventListener('click', function(event){
//                //document.getElementById('resume').innerHTML = 'pause'
//                document.getElementById('resume').id = 'pause'
//                setInterval()
    
// })}

        if (document.getElementById('pause')){
            document.getElementById('pause').addEventListener('click', function(event){
                clearInterval(e)
                let resume = document.getElementById('pause').innerHTML = 'resume'
                document.getElementById('pause').id = 'resume'
            })};
        
        
        if (document.getElementById('resume')) {
            document.getElementById('resume').addEventListener('click', function(event){
                document.getElementById('resume').innerHTML = 'pause'
                document.getElementById('resume').id = 'pause'
                setInterval()
     
 })};
        
   
// let commentForm = document.getElementById('comment-form')
// commentForm.addEventListener('submit', function(event){
//     event.preventDefault()})

//      let comment = document.getElementById('comment-input').value 
//      let list = document.getElementById('list')
//    //  let addComment = document.list.createElement('LI')

//     ele = list.createElement('LI')
    
//     ele.appendChild('comment')
//})