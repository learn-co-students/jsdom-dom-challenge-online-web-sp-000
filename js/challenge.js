document.addEventListener("DOMContentLoaded", () => {
    const num = document.getElementById('counter');
    let i = 0
    let isPaused = false
    let likes = {};
    let counting = function() {
             i++ 
             num.innerHTML = i;
             console.log(i)
       };
    
    let interval = setInterval(counting, 1000);

     const plus = document.getElementById('plus');
     plus.onclick = function () {
       i++;
       num.innerHTML = i;
     };

     const minus = document.getElementById('minus');
     minus.onclick = function () {
       i--;
       num.innerHTML = i;
     };

     const heart = document.getElementById('heart');
     const ul = document.querySelector('ul.likes');
     heart.onclick = function () {
      const n = num.innerHTML 
      ul.innerHTML = "";
        if (likes[n]) {
          likes[n] = likes[n] + 1; 
        } else {
          likes[n] = 1;
        };
       
       Object.keys(likes).forEach(j => {
        let li = document.createElement('li');
        li.innerHTML = `${j} has ${likes[j]} likes`
        ul.appendChild(li);
       });
  
    };

    const btn = document.getElementById('pause');
    btn.onclick = function () {
          isPaused = !isPaused
          if (isPaused) {
            clearInterval(interval);
            plus.disabled = true; 
            minus.disabled = true;
            heart.disabled = true;
            btn.innerHTML = 'resume';
          } else {
            interval = setInterval(counting, 1000);
            plus.disabled = false; 
            minus.disabled = false;
            heart.disabled = false;
            btn.innerHTML = 'pause';
          }
    };

    let cmtArr = [];

    const submit = document.getElementById('submit');
    submit.onclick = function (e) {
      e.preventDefault()
      const comment = document.getElementById('list')
      let cmtInput = document.getElementById('comment-input');
      cmtArr.push(cmtInput.value)
      cmtInput.value = " ";
      let ul = document.createElement('ul');
      let li1 = document.createElement('li');
      li1.innerHTML = cmtArr[cmtArr.length - 1];
      ul.appendChild(li1);
      comment.appendChild(ul);

    };
    

});


