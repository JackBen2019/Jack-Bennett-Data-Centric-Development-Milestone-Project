// Pre-Loaded Images - Code assisted by Webhostingsecresrevelaed

var images = new Array();

function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){
         images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}

preloadImages("bbq-ribs.jpg", "belgian-waffles.jpg", "cook-for-family.jpg", "fried_chicken.jpg", "JB-Cookbook-Logo.png", "strawberries.jpg", "teal-icing-cupcake-recipe.jpg");

// Search Bar - Code assisted by W3 Schools

function searchBarFunction() {
  document.getElementById("searchBarDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchBarInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("searchBarDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}