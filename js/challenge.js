const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const likes = document.querySelector(".likes");
const comments = document.querySelector("#list");
const commentForm = document.querySelector("#comment-form");

minus.addEventListener('click', decreaseCounter);
plus.addEventListener('click', increaseCounter);
heart.addEventListener('click', addLike);
commentForm.addEventListener('submit', displayComment);

function decreaseCounter() {
    const currentNum = parseInt(counter.textContent);
    if (currentNum > 0){
        counter.textContent = `${currentNum - 1}`;
    };
};

function increaseCounter(){
    const currentNum = parseInt(counter.textContent);
    counter.textContent = `${currentNum +1}`;
};

function addLike() {
    const currentNum = parseInt(counter.textContent);
    const allNumAlreadyLiked = Array.from (likes.children);
    const addLike = document.createElement('li');
    addLike.textContent = `${currentNum} has been liked # times`;
    likes.append(addLike);
}

function displayComment(event){
    event.preventDefault();
    const commentFormData = new FormData(event.target);
    const commentText = commentFormData.get('comment');
    const comment = document.createElement('p');
    comment.textContent = commentText;
    comments.append(comment);
    event.target.reset();
}