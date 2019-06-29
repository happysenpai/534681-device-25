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
