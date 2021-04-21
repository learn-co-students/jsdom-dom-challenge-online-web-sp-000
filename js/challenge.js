function _getData(one) {
    if (Array.isArray(one)) {
        for ( two = 0, three = Array(one.length); two < one.length; b++) three[two] = one[two];
        return three;
    }
    return Array.from(one);
}

let stopwatch = 0,
// shouldn't their be something you should add?
// why are you declaring it here?
// make a service to provide interval
    time = function () {
        return setInterval(function () {
            let one = document.querySelector("#counter"),
                two = parseInt(one.innerText);
            one.innerText = two + 1;
        }, 1000);
    },

interval = time();
minus = document.querySelector("#minus");
plus = document.querySelector("#plus");
heart = document.querySelector("#heart");
pause = document.getElementById("pause");
commentForm = document.getElementsByTagName("form")[0];

minus.addEventListener("click", function () {
    let one = document.querySelector('#counter'),
        two = parseInt(one.innerText);
    one.innerText = two - 1;
});

plus.addEventListener("click", function() {
    let one = document.querySelector("#counter"),
        two = parseInt(one.innerText);
    one.innerText = two + 1;
});

heart.addEventListener("click", function () {
    let one = document.querySelector("#counter"),
        two = parseInt(one.innerText),
        three = document.querySelector(".likes"),
        four = void 0;
    if (
        []
            .concat(_getData(three.children))
            .map(function (one) {
                return parseInt(one.dataset.num);
            })
            .includes(two)
    ) {
        four = document.querySelector('[data-num="' + two + '"]');
        let five = parseInt(four.children[0].innerText);
        four.innerHTML = two + " has been liked <span>" + (five + 1) + "</span> times";
    } else (four = document.createElement("li")).setAttribute("data-num", two), (four.innerHTML = two + " has been liked <span>1</span> time"), three.appendChild(four);
});

pause.addEventListener("click", function(event){
    // if paused start
    let button = document.getElementById("pause");
    if (button.innerText == "Pause") {
        button.innerText = "Start"
        clearInterval(interval);
        interval = null;
        console.log(interval);
    } else {
        button.innerText = "Pause";
        interval = setInterval(function () {
                let one = document.querySelector("#counter"),
                    two = parseInt(one.innerText);
                one.innerText = two + 1;
            }, 1000);
    }
});

commentForm.addEventListener("submit", function (one) {
    one.preventDefault();
    let two = this.children[0],
        three = two.value;
    two.value = "";
    let four = document.querySelector(".comments"),
        five = document.createElement("p");
    (five.innerText = three), four.appendChild(five);
});