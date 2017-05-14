var link = document.querySelector(".feedback_link");

var popup = document.querySelector(".feedback_form");
var close = popup.querySelector(".feedback_close");

var form = popup.querySelector(".form_button");
var login = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");

var storage = localStorage.getItem(".feedback_link");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback_show");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback_show");
  popup.classList.remove("feedback_error");
});

form.addEventListener("click", function(event) {
  if (!name.value && !mail.value) {
    event.preventDefault();
    popup.classList.remove("feedback_error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback_error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback_show")) {
      popup.classList.remove("feedback_show");
      popup.classList.remove("feedback_error");
    }
  }
});
