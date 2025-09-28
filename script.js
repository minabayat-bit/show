const btnEl = document.getElementById("btn");
const modalEl = document.getElementById("modal");
const closeEl = document.getElementById("close");
const backdropEl = document.getElementById("backdrop");

btnEl.addEventListener("click", () => {
  modalEl.classList.remove("hidden");
  backdropEl.classList.remove("hidden");
});
closeEl.addEventListener("click", () => {
  modalEl.classList.add("hidden");
  backdropEl.classList.add("hidden");
});

backdropEl.addEventListener("click", () => {
  modalEl.classList.add("hidden");
  backdropEl.classList.add("hidden");
});
