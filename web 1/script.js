//Get the bar
var scorebar = document.getElementById("bar");

// When the user scrolls down 20px from the top of the document, show the bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scorebar.style.display = "block";
  } else {
    scorebar.style.display = "none";
  }
}
