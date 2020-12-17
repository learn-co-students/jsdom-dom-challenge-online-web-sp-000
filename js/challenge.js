  const counter = document.querySelector('#counter');
  
  const minus = document.querySelector('#minus');
  const plus = document.querySelector('#plus');
  const heart = document.querySelector('#heart');
  const pause = document.querySelector('#pause');

  const likes = document.querySelector('.likes');

  const comments = document.querySelector('#list');
  const commentForm = document.querySelector('#comment-form');

  minus.addEventListener('click', decreaseCounter);
  plus.addEventListener('click', increaseCounter);
  heart.addEventListener('click', addLike);
  commentForm.addEventListener('submit', displayComment);
 
  function decreaseCounter() {
      //parsing because the counter is a string, textContent grabs the string associated with the counter variable we set
    const currentNum = parseInt(counter.textContent);
        //we dont want numbers less than 0 because it's a timer
      if (currentNum > 0){
          //setting the counter value to the number we have now and taking away 1
        counter.textContent = `${currentNum - 1 }`;
      }
  }

  function increaseCounter() {
    const currentNum = parseInt(counter.textContent);
    counter.textContent = `${currentNum + 1 }`;
  }

  function addLike() {
    const currentNum = parseInt(counter.textContent);
    
    const addLike = document.createElement('li');
    addLike.textContent = `${currentNum} has been liked # times`;
    likes.append(addLike);
  }

  function displayComment(event) {
      //preventing the event from refreshing/redirecting the page since we are in a form w
    event.preventDefault();
    //FormData is better if we have more than one field on a form. It will assign key/value pairs. Here we need to grab the NAME of the field not the id because name is the key.
    //event.target in this case is the form itself
    const commentFormData = new FormData(event.target);
    //in this case, the name of the field is comment and we are assigning the value to commentText variable
    const commentText = commentFormData.get('comment');

    //need to create a p tag to put the value of the comment in
    const comment = document.createElement('p');
    //assigning the value 
    comment.textContent = commentText; 
    //getting the list, appending to now add the p tag with the comment inside
    comments.append(comment);
    //reset form to remove the previous comment from form. 
    event.target.reset();
  }

  

