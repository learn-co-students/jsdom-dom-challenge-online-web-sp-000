document.addEventListener( "DOMContentLoaded", function () {
  counter()
} );


const counter = delay =>
  setTimeout(() => {
    console.log(delay);
    counter(delay + 1);
  }, delay * 1000);
counter(1);
}
