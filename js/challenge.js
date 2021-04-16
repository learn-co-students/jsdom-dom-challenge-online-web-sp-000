function counter() { 
    let counterElement = document.getElementById("counter");
    let number = 0; 
    let interval = setInterval(() => {
        counterElement.innerText = number++;
    }, 1000);

};

counter();

document.getElementById("plus").addEventListener("click", manuallyIncrement);

function manuallyIncrement(event) { 
    let current_counter = document.getElementById("counter").innerHTML;
    let integer_counter = parseInt(current_counter, 10);
    integer_counter++; 
    document.getElementById("counter").innerHTML = integer_counter; 
}


