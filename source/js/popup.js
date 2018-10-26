var form = document.querySelector(".form");
var lastName = form.querySelector("[name=last-name]");
var firstName = form.querySelector("[name=first-name]");
var email = form.querySelector("[name=email]");
var butForm = document.querySelector(".form__button");
var popup = document.querySelector(".modal");
var popupFailure = document.querySelector(".modal__content--failure");
var popupSuccess = document.querySelector(".modal__content--success");
var butFailure = document.querySelector(".modal__button--failure");
var butSuccess = document.querySelector(".modal__button--success");

lastName.focus();

// form.addEventListener("submit", function() {
//   if (!lastName.value || !firstName.value || !email) {
//     // evt.defaultPrevented();
//     popup.classList.add("modal--show");
//     popupFailure.classList.add("modal__content--show");
//   } else {
//     popup.classList.add("modal--show");
//     popupSuccess.classList.add("modal__content--show");
//   }
// })

butForm.addEventListener("click", function() {
  if (!lastName.value || !firstName.value || !email) {
    // evt.defaultPrevented();
    popup.classList.add("modal--show");
    popupFailure.classList.add("modal__content--show");
  } else {
    popup.classList.add("modal--show");
    popupSuccess.classList.add("modal__content--show");
  }
  // evt.defaultPrevented();
  // popup.classList.add("modal--show");
  // popupFailure.classList.add("modal__content--show");
})



butFailure.addEventListener("click", function() {
  // evt.defaultPrevented();
  popup.classList.remove("modal--show");
  popupFailure.classList.remove("modal__content--show");
  lastName.focus();
});

butSuccess.addEventListener("click", function() {
  // evt.defaultPrevented();
  popup.classList.remove("modal--show");
  popupSuccess.classList.remove("modal__content--show");
});
