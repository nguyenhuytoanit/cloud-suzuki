const popup = document.querySelector(".rollling-price-popup");
const btnPopup = document.querySelector(".btn-popup");
const btnClose = document.querySelector(".btn-close");

btnPopup.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.add("active");
});

btnClose.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.remove("active");
});
