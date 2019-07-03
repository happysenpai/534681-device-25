var maplink      = document.querySelector(".active-map");
contactlink  = document.querySelector(".active-contact");
popcontact   = document.querySelector(".popup-write-us");
popmap       = document.querySelector(".popup-map");
closemap     = document.querySelector(".button-close-map");
closeform    = document.querySelector(".button-close-form");

maplink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popmap.classList.add("popup-show");
  console.log("открыли карту");
});
contactlink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popcontact.classList.add("popup-show");
  console.log("открыли форму");
});
closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popmap.classList.remove("popup-show");
  console.log("закрыли форму");
});

closeform.addEventListener("click", function (evt) {
  evt.preventDefault();
  popcontact.classList.remove("popup-show");
  console.log("закрыли форму");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popmap.classList.contains("popup-show")){
      evt.preventDefault();
      popmap.classList.remove("popup-show");
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popcontact.classList.contains("popup-show")){
      evt.preventDefault();
      popcontact.classList.remove("popup-show");
    }
  }
});

function updatePriceLabels() {
    //avoids slider overlap
    var sliders = document.querySelectorAll(".filter-range input");
    var val1 = parseInt(sliders[0].value);
    var val2 = parseInt(sliders[1].value);
    if (val1 >= val2) {
        sliders[0].value = val2 - 3;
        return;
    }
    if (val2 <= val1) {
        sliders[1].value = val1 + 3;
        return;
    }

    //adds color when a range is selected
    if (val1 > 0 || val2 < 99) {
        sliders[0].style.background = sliders[1].style.background = "-webkit-gradient(linear, 0 0,100% 0, color-stop(0, white), color-stop(" + (val1 / 100) + ", white),color-stop(" + (val1 / 100) + ", #f0f0f0), color-stop(" + (val2 / 100) + ", #f0f0f0), color-stop(" + (val2 / 100) + ", white))";
    } else {
        sliders[0].style.background = sliders[1].style.background = '';
    }
}
