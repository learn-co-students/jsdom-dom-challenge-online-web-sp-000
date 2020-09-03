let interval = setInterval(incrementCounter, 1000);
let counter = document.getElementById("counter").innerText;
let num = parseInt(counter, 10);
let pauseBtn = document.getElementById("pause");
let btns = [
	document.getElementById("minus"),
	document.getElementById("plus"),
	document.getElementById("heart"),
	document.getElementById("submit")
];

function incrementCounter() {
	num++
	document.getElementById("counter").innerText = num;
}

function decrementCounter() {
	num--
	document.getElementById("counter").innerText = num;
}

function toggle() {
	if (pauseBtn.innerText == "pause") {
		clearInterval(interval);
		disableBtns(btns);
		pauseBtn.innerText = "resume";
	} else {
		interval = setInterval(incrementCounter, 1000);
		enableBtns(btns);
		pauseBtn.innerText = "pause";
	}
}

function disableBtns(btns) {
	btns.forEach(btn => {
		btn.setAttribute("disabled", "true");
	});

}

function enableBtns(btns) {
	btns.forEach(btn => {
		btn.removeAttribute("disabled");
	});
}

function addComment(comment) {
	const div = document.getElementById("list");
	const p = document.createElement("p");
	p.appendChild(document.createTextNode(comment));
	div.appendChild(p);
}

function like() {
	const counter = document.getElementById("counter").innerText;
	const ul = document.getElementsByClassName("likes")[0];
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(`${counter} has been liked`));
	li.setAttribute("data-num", `${counter}`);
	ul.appendChild(li);
}

document.querySelector("#comment-form").addEventListener("submit", function(event) {
	const comment = document.getElementById("comment-input").value;
	addComment(comment);
	document.getElementById("comment-form").reset();
	event.preventDefault();
});

document.getElementById("plus").addEventListener("click", incrementCounter)
document.getElementById("minus").addEventListener("click", decrementCounter)
document.getElementById("heart").addEventListener("click", like)
pauseBtn.addEventListener("click", toggle)
