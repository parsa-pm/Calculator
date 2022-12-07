const displayBox = document.querySelector(".display");
const calculatorNums = document.querySelectorAll(".show-display");

// loop for qeurySelectorAll
calculatorNums.forEach(function (event) {
    event.addEventListener("click", showOnDisplay)
});

// click event
function showOnDisplay (items) {
    let all_items = items.target.innerText;
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = all_items;
    }
    return displayBox.innerHTML += all_items
};

// calulating
let calculate = document.querySelector(".calculate");
calculate.addEventListener("click", calculated);

function calculated () {
   let sumUp = displayBox.innerText;
   displayBox.innerText = eval(sumUp);
};

// clear last item
let clear_last = document.querySelector(".clear-last");
clear_last.addEventListener("click", clear_last_item);

function clear_last_item () {
    let numbers = displayBox.innerText;
    if (numbers.length === 1) {
        displayBox.innerText = 0
    } else {
        displayBox.innerText = numbers.substring (0, numbers.length - 1)
    }
};

// clear all
let clear_all = document.querySelector(".all-clear");
clear_all.addEventListener("click", clear_all_items);

function clear_all_items () {
    displayBox.innerHTML = 0;
    contentBox.innerHTML = 0;
};

// memory part
let contentBox = document.getElementById("allEvents");
let memory = document.querySelector(".memory");
memory.addEventListener("click", showMemory);

function showMemory () {
    let memoryPart = displayBox.innerText;
    contentBox.innerText = memoryPart;
};
