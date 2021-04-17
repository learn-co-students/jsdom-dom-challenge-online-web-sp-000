let interval = setInterval(start_interval, 1000) 


  // get element, set element, update dom
//have start interval. could be hidden value somewhere counting off. or could have interval = x or a variable and then += to have it tick along. 
//separate counter that would count off mycounter.
function start_interval() { 
    let counterElement = document.getElementById("counter");
    let current_counter = document.getElementById("counter").innerHTML;
        let integer_counter = parseInt(current_counter, 10) + 1;
        counterElement.innerText = integer_counter;
        let pause_button = document.getElementById("pause");
        pause_button.addEventListener("click", (event)=> {pauseCounter(event, interval)})
};




document.getElementById("plus").addEventListener("click", manuallyIncrement);

function manuallyIncrement(event) { 
    let current_counter = document.getElementById("counter").innerHTML;
    let integer_counter = parseInt(current_counter, 10);
    integer_counter++; 
    document.getElementById("counter").innerHTML = integer_counter; 
}

document.getElementById("minus").addEventListener("click", manuallyDecrement);

function manuallyDecrement(event) { 
let current_counter = document.getElementById("counter").innerHTML; 
let integer_counter = parseInt(current_counter, 10);
integer_counter--; 
document.getElementById("counter").innerHTML = integer_counter;

}

function pauseCounter(event, interval) { 
clearInterval(interval);
document.getElementById("minus").disabled = true;
document.getElementById("plus").disabled = true;
document.getElementById("heart").disabled = true;
document.getElementById("minus").disabled = true;
document.getElementById("submit").disabled = true;
document.getElementById("pause").innerText = "resume";
let resume_button = document.getElementById("pause");
resume_button.addEventListener("click", function(event) { 
    interval;
});
}
//variable = false
//if {variable = false}
//variable = true 

document.getElementById("submit").addEventListener("submit", formSubmit );

function formSubmit(event) {
    event.preventDefault();
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let div = document.getElementsByTagName("div");
    li.innerHTML += document.getElementById("comment-input").value;
    ul.appendChild(li);
    div.appendChild(ul);
}


