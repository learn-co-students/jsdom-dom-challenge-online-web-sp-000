document.addEventListener("DOMContentLoaded", ()=> { 
    let minus_button = document.getElementById("minus");
    let plus_button = document.getElementById("plus");
    let heart_button = document.getElementById("heart") 
    let submit_button = document.getElementById("submit");
    let pause_button = document.getElementById("pause");
    let counterElement = document.getElementById("counter");


let interval = setInterval(start_interval, 1000)
let pause;

  // get element, set element, update dom
//have start interval. could be hidden value somewhere counting off. or could have interval = x or a variable and then += to have it tick along. 
//separate counter that would count off mycounter.
function start_interval() { 
    let current_counter = document.getElementById("counter").innerHTML;
        let integer_counter = parseInt(current_counter, 10) + 1;
        counterElement.innerText = integer_counter;
        pause = false;
};


        pause_button.addEventListener("click", (event)=> {pauseCounter(event, interval)})


//set interval saving interval id to variable, clear interval removing the interval id. 

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
if (pause == false) { 
    clearInterval(interval);

document.getElementById("minus").disabled = true;
document.getElementById("plus").disabled = true;
document.getElementById("heart").disabled = true;
document.getElementById("minus").disabled = true;
document.getElementById("submit").disabled = true;
document.getElementById("pause").innerText = "resume";
pause = true; 
// let resume_button = document.getElementById("pause");
// resume_button.addEventListener("click", resume);
}
else {
resume();
}
}
//variable = false
//if {variable = false}
//variable = true 

function resume() { 
clearInterval(interval);
    //start_interval();
   interval = setInterval(start_interval, 1000);
   document.getElementById("minus").disabled = false;
document.getElementById("plus").disabled = false;
document.getElementById("heart").disabled = false;
document.getElementById("minus").disabled = false;
document.getElementById("submit").disabled = false;
pause_button.innerText = "pause"

    // let pause_button = document.getElementById("pause");
    // pause_button.addEventListener("click", function(event) {
    //     pause_button.innerText = "resume";
    //     pauseCounter();
    // });
    //changing event listener whether you're on resume or a pause button. 
}





document.getElementById("comment-form").addEventListener("submit", formSubmit );

function formSubmit(event) {
    event.preventDefault();
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let list_div = document.getElementById("list");
    li.innerText += document.getElementById("comment-input").value;
    ul.style.listStyleType = "none";
    ul.appendChild(li);
    list_div.appendChild(ul);
}

heart_button.addEventListener("click", likeANumber);

function likeANumber(event) { 
    let ul = document.getElementsByClassName("likes")[0]; 
    let li = document.createElement("li");
    li.id = `num-` + counterElement.innerText;
    let target_li = document.getElementById(`num-` + counterElement.innerText);
    if (target_li) { 
        target_li.innerHTML = `${counterElement.innerText} has been liked ` + (parseInt(target_li.innerText.split(" ")[4]) + 1) + ` times`
    }
    else { 
        li = document.createElement("li");
        li.id = `num-` + counterElement.innerText;
        li.innerText = `${counterElement.innerText} has been liked 1 time`
        ul.appendChild(li);

    }
}

})
