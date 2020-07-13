let counter = document.querySelector('#counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');

//counter
setInterval(() => {counter.innerText = parseInt(counter.innerText) + 1}, 1000);

//add/subtract
minus.addEventListener('click', ()=>{counter.innerText = parseInt(counter.innerText) + 1});
plus.addEventListener('click', ()=>{counter.innerText = parseInt(counter.innerText) - 1});
