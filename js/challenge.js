function counter() {
  var i = 0;
  // This block will be executed 100 times.
  setInterval(function() {
    if (i == 100) clearInterval(this);
    else console.log('Currently at ' + (i++));
  }, 1000);
} // End

counter()