// Pre-Loaded Images - Code assisted by Webhostingsecresrevelaed

var images = new Array();

function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){
         images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}

preloadImages("JB-Cookbook-Logo.png", "banana_bread.jpg", "beautiful_cake.jpg", "best_selling_books.jpg", "bourbon_chicken.jpg", "caramel_apples.jpg", "cheesy_bagel.jpg", "chicken_pasta.jpg", "declutter_kitchen.jpg", "defrosted_meat.jpg", "falafel.jpg", "galley_kitchen.jpg", "garlic_pasta.jpg", "organise_kitchen.jpg", "overripe_bananas.jpg", "raisin_cookies.jpg", "sourdough_starter.jpg", 
"stop_storing_fridge.jpg", "tofu_curry.jpg", "vegetable_stew.jpg", "xl-bbq-ribs.jpg", "yeast.jpg");

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