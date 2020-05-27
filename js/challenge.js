document.addEventListener("DOMContentLoaded", () => {
  //Shared variables
  let countPaused = false;
  let likeArray = [];

  //Returns the value of the counter integer
  function getCounterInt(){
    const counter = document.getElementById("counter");
    const countInt = parseInt(counter.innerText, 10);
    return countInt
  }

  function setLikeArray(pos){
    let placeVal = likeArray[pos]
    if(placeVal === parseInt(placeVal)){
      console.log('Let me know if was int')
      //could do something to integer
    } else {
      likeArray.push(0)
    }
  }

  //Increases or decreases the counter
  function changeCounter(action){
    let countInt = getCounterInt()
    if(action === 'increment') {
      countInt++;
    } else if (action === 'decrement') {
      if ((countInt - 1) >= 0){
        countInt--;
      }
    }
    setLikeArray(countInt);
    counter.innerText = countInt.toString(10);
  }

  //Increases the counter every second
  function increaseEverySecond(){
    counterInterval = setInterval(function(){changeCounter('increment')}, 1000);
  }

  //Allows the plus and minus buttons to increase and decrease the counter
  function buttonChange(buttonId, action){
    const input = document.getElementById(buttonId);
    input.addEventListener('click', function(event) {
      changeCounter(action);
    });
  }

  buttonChange('minus', 'decrement')
  buttonChange('plus', 'increment')

  //Pauses when the pause button is hit and resumes when resume clicked
  function pausedButtonInside(pausedBoolean, textChange){
    countPaused = pausedBoolean;
    pausedButton.innerText = textChange
    stopIfPaused();
  }

  const pausedButton = document.getElementById('pause');
  pausedButton.addEventListener('click', function(event) {
    if(pausedButton.innerText == 'pause') {
      pausedButtonInside(true, 'resume');
    } else {
      pausedButtonInside(false, 'pause');
    }
  });

  function stopIfPaused(){
    if(countPaused) {
      clearInterval(counterInterval)
    } else {
      increaseEverySecond()
    }
  }

  //Tells the number of likes that the button has when it is clicked
  const heartButton = document.getElementById('heart');
  heartButton.addEventListener('click', function(event) {
    currentNumber = getCounterInt();
    likeArray[currentNumber] += 1;
    numberOfLikes = likeArray[currentNumber]
    likeLi = document.createElement('li');
    likeLi.innerText = `The number ${currentNumber} has ${numberOfLikes} likes`
    list = document.getElementsByClassName('likes')[0].appendChild(likeLi)
  });

  //Adds comments to the comment space
  document.getElementById("comment-form").addEventListener("submit", function(event) {
    const description = document.getElementById("comment-input");
    const text = description.value;
    description.value = ''
    const p = document.createElement('p')
    p.innerText = text
    document.getElementById('list').appendChild(p)
    event.preventDefault();
  });

  //On startUp
  stopIfPaused()
});
