let count = 0;

const countElement = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countElement.textContent = count;
});
