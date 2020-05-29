//basic timer//

var Clock = {
    totalSeconds: 0,
  
    start: function () {
      var self = this;
  
      this.interval = setInterval(function () {
        document.getElementById("counter").innerHTML= (self.totalSeconds += 1)
        }, 1000);
    },
  
    pause: function () {
      clearInterval(this.interval);
      delete this.interval;
    },
  
    resume: function () {
      if (!this.interval) this.start();
    }
  };
  
  Clock.start();
  
  document.getElementById("pause").click(function () { Clock.pause(); });

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

//As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

//As a user, I can pause the counter, which should
//pause the counter
//disable all buttons except the pause button
//the pause button should then show the text "resume."
//When 'resume' is clicked, it should restart the counter and re-enable the buttons.

//As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

