var biscoito = document.querySelector("#img1");
var screen1 = document.querySelector("#screen1");
var screen2 = document.querySelector("#screen2");
var retornar = document.querySelector("#retornar");
var imgbiscoito = document.querySelector("#img1");

biscoito.addEventListener("click", function () {
  screen1.style.display = "none";
  screen2.style.display = "flex";
});

retornar.addEventListener("click", function () {
  screen2.style.display = "none";
  screen1.style.display = "flex";
});

imgbiscoito.addEventListener("mouseover", function () {
  imgbiscoito.classList.add("animate__animated");
});

imgbiscoito.addEventListener("mouseout", function () {
  imgbiscoito.classList.remove("animate__animated");
});
