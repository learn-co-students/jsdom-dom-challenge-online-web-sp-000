const counter = document.getElementById('counter')

let num = parseInt(counter.innerText)

let t = setInterval(function(){
   num++
   counter.innerText = num.toString() } , 1000)


   document.getElementById('minus').addEventListener('click', function(event){
       counter.innerText--
    })

   document.getElementById('plus').addEventListener('click', function(event){
       counter.innerText++
   })

        if (document.getElementById('pause')){
            document.getElementById('pause').addEventListener('click', function(event){
                clearInterval(t)
                let resume = document.getElementById('pause').innerHTML = 'resume'
                document.getElementById('pause').id = 'resume'
            })};


        if (document.getElementById('resume')) {
            document.getElementById('resume').addEventListener('click', function(event){
                document.getElementById('resume').innerHTML = 'pause'
                document.getElementById('resume').id = 'pause'
                setInterval()

 })};
