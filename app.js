//queryselectors
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
const spanCounter = document.querySelector(".counter");
let counter = spanCounter.innerText;;

//functions
const increase = (e) => {
    counter++;
    spanCounter.innerText = counter;
}

const decrease = (e) => {
    counter--;
    spanCounter.innerText = counter;
}

const reset = (e) => {
    counter = 0;
    spanCounter.innerText = counter;
}

//eventlisteners
btnIncrease.addEventListener("click", increase);
btnDecrease.addEventListener("click", decrease);
btnReset.addEventListener("click", reset);