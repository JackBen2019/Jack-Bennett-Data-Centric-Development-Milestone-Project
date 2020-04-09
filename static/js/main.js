// Pre-Loaded Images - Code assisted by Webhostingsecresrevelaed

var images = new Array();

function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){
         images[i] = new Image();
        images[i].src = "static/images/"+preloadImages.arguments[i];
    }
}

preloadImages("jb-cookbook-logo.png", "banana_bread.jpg", "beautiful_cake.jpg", "best_selling_books.jpg", "bourbon_chicken.jpg", "caramel_apples.jpg", "cheesy_bagel.jpg", "chicken_pasta.jpg", "declutter_kitchen.jpg", "defrosted_meat.jpg", "falafel.jpg", "galley_kitchen.jpg", "garlic_pasta.jpg", "organise_kitchen.jpg", "overripe_bananas.jpg", "raisin_cookies.jpg", "sourdough_starter.jpg", 
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

// Countdown Clock - Code assisted by W3 Schools

var countDownDate = new Date("May 5, 2020 23:59:59").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown-timer").innerHTML = days + "D -" + " " + hours + " " +  "H -"
  + " " + minutes + "M -" + " " + seconds + "S";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "Offer has now finished!";
  }
}, 1000);
