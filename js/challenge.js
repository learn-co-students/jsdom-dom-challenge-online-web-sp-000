let stringCountElement = document.getElementById("counter")

let t = setInterval(add1ToCounter,1000);


function add1ToCounter(){
    document.getElementById("counter").innerHTML = parseInt(stringCountElement.innerHTML)+1
}

function subtract1FromCounter(){
    document.getElementById("counter").innerHTML = parseInt(stringCountElement.innerHTML)-1
}

function likeNumber(){
    pNode = document.createElement("p")
    pNode.innerHTML = `${stringCountElement.innerHTML} has been liked!`
    document.querySelector("div").insertAdjacentElement("beforebegin", pNode)
}

function stopCounter(){
    clearInterval(t)
}


document.getElementById("minus").addEventListener("click", subtract1FromCounter)
document.getElementById("plus").addEventListener("click", add1ToCounter)
document.getElementById("heart").addEventListener("click", likeNumber)
document.getElementById("pause").addEventListener("click", stopCounter)

document.querySelector("#submit").addEventListener("click", function(event) {
    
    function addLi() {
        let node = document.createElement("li");
        let inputField = document.querySelector("#comment-input");
        comment = inputField.value;
        node.innerHTML = comment;
        document.querySelector("div ul").appendChild(node);
        inputField.value = "";
        inputField.focus();
    }
    
    if (document.querySelector("div ul")){
        addLi();
    } else {
        ulNode = document.createElement("ul");
        document.querySelector("div h3").insertAdjacentElement("beforeend", ulNode)
        addLi();
    }
    event.preventDefault();
}, false);
 



