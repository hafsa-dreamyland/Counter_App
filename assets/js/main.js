// Declaration of variables for DOM elements
const counter = document.getElementById("counter");
const plusBtn = document.querySelector(".increase");
const minusBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

let count = 0;

// Adding event listeners to DOM elements
plusBtn.addEventListener("click", () => changeCounter(1));
minusBtn.addEventListener("click", () => changeCounter(-1));
resetBtn.addEventListener("click", resetCounter);

// Function to increment or decrement the counter
function changeCounter(value) {
  count += value;
  updateCounterDisplay();
}

// Function to reset the counter to zero
function resetCounter() {
  count = 0;
  updateCounterDisplay();
}

// Function to update the counter display
function updateCounterDisplay() {
  counter.textContent = count;
  counter.style.color = count > 0 ? "green" : count < 0 ? "red" : "grey";
}
