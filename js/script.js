let log = console.log;

let sliderContent = document.querySelector(".slider-1-content");
let buttons = document.querySelectorAll(".btn-slider-1");
let count = 1;
let translation;

buttons.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e.classList.contains("btn-next")) {
      if (count == sliderContent.children.length) {
        sliderContent.style.transform = `translateX(0)`;
        count = 1;
      } else {
        translation = count * (100 / sliderContent.children.length);
        sliderContent.style.transform = `translateX(calc(-${translation}%))`;
        count++;
      }
    } else {
      if (count == 1) {
        sliderContent.style.transform = `translateX(-75%)`;
        count = sliderContent.children.length;
      } else {
        translation = (count - 2) * (100 / sliderContent.children.length);
        sliderContent.style.transform = `translateX(calc(-${translation}%))`;
        count--;
      }
    }
  });
});
