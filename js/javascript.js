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

function initialize() {
  var mapOptions = {
    scrollwheel: false,
    zoom: 17,
    center: new google.maps.LatLng(59.93920802, 30.32150616)
  }
  var map = new google.maps.Map(document.getElementById("map"),
    mapOptions);
  var image = 'img/map-marker.png';
  var LatLng = new google.maps.LatLng(59.9387942, 30.3230833);
  var beachMarker = new google.maps.Marker({
    position: LatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
