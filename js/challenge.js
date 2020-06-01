document.addEventListener("DOMContentLoaded", () => {
   let counter = document.getElementById("counter");
   let plus = document.getElementById("plus");
   let minus = document.getElementById("minus");
   let heart = document.getElementById("heart");
   let pause = document.getElementById("pause");
   let commentInput = document.getElementById("comment-input");
   let commentForm = document.getElementById("comment-form");

   // Increment timer every second once the page has loaded.
   let timer = setInterval(counterIncrementor, 1000);

   function counterIncrementor() {
      counter.innerText++;
   }

   // Manually increment counter using plus button
   plus.addEventListener("click", function () {
      counterIncrementor();
   });

   // Manually decrement counter using minus button
   minus.addEventListener("click", function () {
      counter.innerText--;
   });

   // Event listener for pause button vs resume button
   pause.addEventListener("click", function () {
      if (pause.innerText === "pause") {
         timer = clearInterval(timer);
         pause.innerText = "resume";
         minus.disabled = true;
         plus.disabled = true;
         heart.disabled = true;
      } else {
         timer = setInterval(counterIncrementor, 1000);
         pause.innerText = "pause";
         minus.disabled = false;
         plus.disabled = false;
         heart.disabled = false;
      }
   });

   // Like an individual number of the counter. Show the number of 'likes' associated with that number 
   heart.addEventListener("click", function () {
      let numberOfLikes = 0;
      let element = document.createElement('li');
      element.innerText = `Counter: ${counter.innerText} has ${numberOfLikes + 1} like(s)`;
      document.querySelector('.likes').appendChild(element)
   });

   // Leave comments
   commentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let element = document.createElement('li');
      element.innerText = commentInput.value;
      document.getElementById('list').appendChild(element);
   })

});