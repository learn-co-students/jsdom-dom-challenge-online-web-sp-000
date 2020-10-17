let plus=document.getElementById("plus")
let t=document.getElementById("counter")
let dt=document.getElementById("minus")
let stop=document.getElementById("pause")
let hearts=document.getElementById("heart")
let like=document.querySelector("ul.likes")
let form=document.getElementById("comment-form")
let output=document.getElementById("comment-input")
let comment=document.querySelector("ul.comments li")


  plus.addEventListener("click", function(){
    let sec=0
    let countup=setInterval(function(){
    t.innerHTML=sec++
    stop.innerHTML="pause"}, 1000)
    
    stop.addEventListener("click", function(){
      clearInterval(countup)
      t.innerHTML=sec
      stop.innerHTML="resume"})})
      
      dt.addEventListener("click", function(){
        let sec=0
        let countdown=setInterval(function(){
          t.innerHTML=sec--
        stop.innerHTML
        stop.innerHTML="pause"}, 1000)

          stop.addEventListener("click", function(){
            clearInterval(countdown)
            t.innerHTML=sec
          stop.innerHTML="resume"})})
          
        hearts.addEventListener("click", function(){
          let enjoyment=[]
          enjoyment.push(t.innerHTML)
          let new_array={}
          
          for (let i=0; i<enjoyment.length; i++){
            let num=enjoyment[i]
            if (new_array[num]){new_array[num]++}
            else {new_array[num]=1}}

            for (let key in new_array) {
              if (new_array.hasOwnProperty(key)) {
                 like.innerHTML=key + ":" +new_array[key]}}})
          
          form.addEventListener("submit", function(event){event.preventDefault()
            let enjoyment=[]
            enjoyment.push(output.value)
            let number=enjoyment.map(num=>{
              let li = document.createElement("li")
              li.innerHTML=num
              return li})
              comment.append(...number)})
            
            
            //comment.innerHTML = output.value})
          
    
            
         

          //let enjoyment=[]
          //enjoyment.push(t.innerHTML)
          //let number=enjoyment.map(num=>{
            //let li = document.createElement("li")
            //li.innerHTML=num
            //return li
          //})
          //like.append(...number)})

          
          
//let array=[1,1,1,2,3,3,3,4,5] 
//let new_array={}

//for (let i=0; i<array.length; i++){
  //let num=array[i]
  //if (new_array[num]){new_array[num]++}
  //else {new_array[num]=1}
//}

//new_array

//for (let key in new_array) {
  //if (new_array.hasOwnProperty(key)) {
    //  console.log(`${key} : ${new_array[key]}`);
  //}
//}


         




           

            
            
            
            

   

  
