// Slideshow - Code assisted by W3 Schools

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slide-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slide-opacity-off";
}

// Pre-Loaded Images - Code assisted by Webhostingsecresrevelaed

var images = new Array();

function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){
         images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}

preloadImages("bbq-ribs.jpg", "belgian-waffles.jpg", "cook-for-family.jpg", "fried_chicken.jpg", "JB-Cookbook-Logo.png", "strawberries.jpg", "teal-icing-cupcake-recipe.jpg");