var body = document.querySelector("body");
var div = document.querySelector("div");

body.addEventListener("keydown", function() {
  div.classList.add("keydown");
});