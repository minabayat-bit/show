const btnEl = document.getElementById("btn")
const modalEl = document.getElementById("modal")
const closeEl = document.getElementById("close")
const backdropEl = document.getElementById("backdrop")

btnEl.addEventListener("click", () => {
  modalH.classList.remove("hide");
  blurEl.classList.remove("hide");
});
colseEl.addEventListener("click", () => {
  modalH.classList.add("hide");
  blurEl.classList.add("hide");
});

backdropElEl.addEventListener("click", () => {
  modalH.classList.add("hide");
  blurEl.classList.add("hide");
});
