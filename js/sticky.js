
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyLogo()};

// Get the navbar
var logo = document.getElementById("Logo");

// Get the offset position of the navbar
var sticky_logo = logo.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyLogo() {
  if (window.pageYOffset >= sticky_logo) {
    logo.classList.add("sticky")
  } else {
    logo.classList.remove("sticky");
  }
}
