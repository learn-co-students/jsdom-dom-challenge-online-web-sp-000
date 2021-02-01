document.addEventListener("DOMContentLoaded", function() {

    const pauseBtn = document.getElementById('pause');
    const minusBtn = document.getElementById("minus");
    const plusBtn = document.getElementById("plus");
    const submitBtn = document.getElementById("submit");
    const heartBtn = document.getElementById("heart");
    let num = parseInt(document.getElementById("counter").textContent);

  	function myCounter() {
       counter = setInterval(function() {
            document.getElementById("counter").innerHTML = num++;
        }, 1000); 
    }

  	myCounter();

	pauseBtn.addEventListener('click', function() {
		if (pauseBtn.textContent === " pause "){
			clearInterval(counter);
			pauseBtn.textContent = "resume";
			minusBtn.disabled = true;
			plusBtn.disabled = true;
			heartBtn.disabled = true;
			submitBtn.disabled = true;
		} else {
			myCounter();
			pauseBtn.textContent = " pause ";
			minusBtn.disabled = false;
			plusBtn.disabled = false;
			heartBtn.disabled = false;
			submitBtn.disabled = false;
		}
	});

	minusBtn.addEventListener('click', function() {
		document.getElementById("counter").innerHTML = num--;
	});

	plusBtn.addEventListener('click', function() {
		document.getElementById("counter").innerHTML = num++;
	});

	let clicks = 1;

	function pluralizeTime(clicks){
		if (clicks === 1) {
			return " time";
		} else {
			return " times";
		}
	}

	let ul = document.getElementsByClassName("likes")[0];
	
	heartBtn.addEventListener('click', function(){
		let listItems = document.getElementsByTagName("li");
		let listLength = listItems.length;

		let numClickedList = document.querySelector('[data-num="' + num + '"]');
		
		if (numClickedList){
			let numClickedListArray = numClickedList.innerText.split(" ");
			let numOfClicks = parseInt(numClickedListArray[4]);
			numOfClicks += 1;
			numClickedList.innerText = `${num} has been liked ${numOfClicks}` + pluralizeTime(numOfClicks);
		} else {
			ul.innerHTML += `<li data-num="${num}">${num} has been liked ${clicks} time</li>`;
		}
	});

	let comment = document.getElementById("comment-input");
	let commentList = document.getElementById("list");

	submitBtn.addEventListener('click', function(){
		commentList.innerHTML += "<p>" + `${comment.value}` + "</p>";
		event.preventDefault();
	});

});