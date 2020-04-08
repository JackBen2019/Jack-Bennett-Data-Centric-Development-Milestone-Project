# Jack Bennett Cookbook

This website's sole purpose is to provide a platform for those looking to find a new recipe to cook and provide the reader with some helpful cooking tips. It also allows people to upload their own recipes, which can automatically be seen by anyone browsing the website on the 'community recipes' page.

## UX

The target audience for this website is those who are interested in cooking, or want to learn more about it.

I have ensured this website is user friendly for all users, regardless of their device. The webpages have been structured so that they will be responsive on any device that you choose to use.

The wireframes for each page on this website have been added into the GitHib files.

**Strategy**

This website needs to be easy to use and provide user with everything they would expect from a cooking website. The design needs to be modern and simple so the user isn't required to work hard to find what they need.

**Scope**

The main objective of this website is to make recipes and cooking tips accessible with ease. In addition to that, people will be able to upload, edit and delete recipes in one community page.

My future scope would be to add more functionality to the community recipes page, so that only the person who uploaded a recipe, has the ability to edit or delete it.

**Structure**

Using Flask (Python), I was able to set a structure in place for my website. This meant I could keep the main elements of my website in one base file and this file could then be used as a template for all pages on my website.

**User Stories**

Speaking with some people who were already interested in cooking, I asked them what they would like for my website to provide them. They said:

1. "As a visitor to a cooking website, I would expect to see a range of recipes that doesn't discriminate. I would expect the recipes to range from vegetarian, meat based and even some desert/snack type recipes."
2. "I would expect recipes to be on the website, but as someone who is always looking to get better at cooking, I would also like to see some cooking advice/tips."
3. "While I'm very keen on learning new recipes from others, I would also like to have the option to upload my own as I'm always putting things togther in the kitchen."

## Features

1. **Navigation**: The navigation allows you to visit all pages on the website, regardless of what page you may be on.
2. **Responsiveness**: With the use of both Bootsrap and Materialize, the website can is fully responsive and is user friendly on all devices.
3. **MongoDB Database**: This website has been synced with a MongoDB database so that all recipes uploaded can be stored and then sent back to the website via the use of a Python server.

There are a range of extra features available on my website that could assist the user in one way or another. These have been listed below:

1. **Searh Bar**: A search bar with some pre-populated recipe options has been added to the 'Recipes' page.
2. **Upload a Recipe Form**: A form which allows the user to upload a recipe, which is then added to a 'Community Recipes' page for all website users to see.
3. **Contact Form**: A contact form has been added just above the footer so that people who want to get in contact have the option to do so.
4. **Countdown Timer**: A countdown timer has been added to show people how long is left until the next recipe of the month.

**Features Left to Implement**

The ability to only edit and delete your own recipes is a feature I will look to add in the future.

**Technologies Used**

Frameworks/Libraries:

- Bootstrap
- Materialize
- Font Awesome
- Google Fonts
- MongoDB

Languages:

- HTML5
- CSS3
- JavaScript
- jQuery
- Python3
- SQL

## Testing

Referring back to the user stories mentioned above, I needed to test that these were possible and whether my site provided what they wanted to see.

Starting with the first user story, which was "As a visitor to a cooking website, I would expect to see a range of recipes that doesn't discriminate. I would expect the recipes to range from vegetarian, meat based and even some desert/snack type recipes.". The way I approached this was by adding a page on the website dedicated to all of the recipes available, which can be easily accessed within the navigation bar. To help the user a little more, I also added a search bar so they can search for any specific recipes.

The second user story was "I would expect recipes to be on the website, but as someone who is always looking to get better at cooking, I woudld also like to see some cooking advice/tips". The way I planned on approaching this was to ensure there were two seperate pages on the website that provided this. So, provide one page that shows the recipes available and another that shows the cooking tips.

The third, and last, user story was "While I'm very keen on learning new recipes from others, I would also like to have the option to upload my own as I'm always putting things togther in the kitchen.". I decided that in order to do this, I would need to create a form on my website that allowed people to upload recipes. But I also knew I needed somewhere for those recipes to be stored. So, I chose to use MonoDB to store the recipes from the form and then used Python to connect the uploaded recipes to the website.

1. Upload a recipe form:
    i. Go to 'Upload Recipe' page
    ii. Fill out all the fields in the form provided
    iii. Submit the form
    iiii. Confirm that is takes me to the 'Community Recipes' page and that I can now see my form

2. Contact form:
    i. Go to the 'Contact Us' page
    ii. Fill out all the fields in the form provided
    iii. Submit the form
    iiii. Confirm that it takes you to a new blank form once you have submitted, confirming that the form has been submitted

**More User Testing**

- The main concern from users testing my completed site was that they were able to delete and edit other people's recipes
- Users would like to see more recipes and cooking tips added in the future as there is a limited amount

**Browsers**

My website was tested on multiple browsers to ensure it's functionality worked the same. Browsers tested on were:

- Chrome
- Safari
- Microsoft Edge
- Internet Explorer

**Devices**

My website was tested on multiple devices to ensure it's functionality worked the same. Devices tested on were:

- 22" Desktop Monitor
- iPhone 7
- iPhone 8
- Samsung Galaxy S8
- iPad Pro

## Bugs/Issues

**Materialize CSS**: The issue I experienced was when importing the Materialize CSS package. Many of the classes used in Materialize were named the same as the classes used the Bootstrap files. This often meant that the classes in Materialize were being implemented into my website, while the classes that needed to be used were within Bootstrap.

To combat this issue, I created my own Materialize CSS file and copied all of the Materialize CSS into it. I then proceeded to remove any classes that were clashing with classes used in Bootstrap.

**Deleting Recipes From The Community Page**: With the current functionality of the community recipes page, anyone can edit or delete ANY recipe. This could potentially become an issue in the future as people may decide to edit or delete other people's recipes, for whatever reason. 

## Deployment

This project was deployed to both GitHub and Heroku. See links to both below.

Heroku: https://dashboard.heroku.com/apps/jb-cookbook
GitHub: https://github.com/JackBen2019/Jack-Bennett-Data-Centric-Development-Milestone-Project

To ensure my site met the correct functionality of Heroku, I added the following to my website:

- Requirements.txt file
- Procfile

It will not be possible to run this site locally, due to enviromental variables being used and not being open.

## Credits

**Content**

The **contact form** design was inspired and assisted by the contact form designed in the small 'Module 4' project which was completed in at earlier date.

The **upload a recipe form** was inspired and assisted by the mini project completed in 'Module 10'.

The **countdown timer** was inspired and assisted by W3 Schools: https://www.w3schools.com/howto/howto_js_countdown.asp

The **pre-loaded** images JavaScript used was provided by https://www.webhostingsecretrevealed.net/blog/featured-articles/15-cool-javascript-sample-snippets/.

**Media/Links**

Recipe of the month link - image: https://www.food.com/recipe/beths-melt-in-your-mouth-barbecue-ribs-oven-107786 - https://www.freeimages.com/photo/bbq-ribs-1057470

Links - Images used in the 'Expanding Your Cooking Knowledge' and 'General Cooking Tips' section:

1. Overripe Bananas: https://www.thekitchn.com/6-delicious-ways-to-use-up-overripe-bananas-223860 - https://unsplash.com/photos/4t0kofpmmnA
2. Sourdough Starter: https://www.thekitchn.com/testing-sourdough-starter-for-baking-23020669 - https://unsplash.com/photos/tOYiQxF9-Ys
3. Make a More Beautiful Cake: https://www.thekitchn.com/cake-tips-food-stylist-23016610 - https://unsplash.com/photos/kPxsqUGneXQ
4. Difference Between Active Dry Yeast and Instant Yeast: https://www.thekitchn.com/whats-the-difference-between-active-dry-yeast-and-instant-yeast-54252 - https://unsplash.com/photos/-QyXCuVHwfE
5. Defrosted Meat: https://www.thekitchn.com/easiest-marinade-frozen-meat-23005063 - https://unsplash.com/photos/DVRXFIH42d0

Links - Images used in the 'Try a New Recipe Today' and 'Recipes in Demand' section:

1. Best Banana Bread: https://www.food.com/recipe/best-banana-bread-2886 - https://unsplash.com/photos/qKxELxIH5t8
2. Bourbon Chicken: https://www.food.com/recipe/bourbon-chicken-45809 - https://unsplash.com/photos/mjcJ0FFgdWI
3. Oatmeal Raisin Cookies: https://www.food.com/recipe/oatmeal-raisin-cookies-35813 - https://unsplash.com/photos/oLq-OHHnEyQ
4. Creamy Cajun Chicken Pasta: https://www.food.com/recipe/creamy-cajun-chicken-pasta-39087 - https://unsplash.com/photos/yfs1UJziyoM
5. Creamy Garlic Penne Pasta: https://www.food.com/recipe/creamy-garlic-penne-pasta-43023 - https://unsplash.com/photos/jL3X9oeQ3Ps

Links - Images used in the 'Tips For The Kitchen' section:

1. 9 Ways to Add Organization to Your Kitchen: https://www.thekitchn.com/organizing-tricks-that-dont-cost-money-23017717 - https://unsplash.com/photos/MP0bgaS_d1c
2. 3 Things You Should Stop Storing in the Fridge: https://www.thekitchn.com/things-stop-storing-fridge-23004435 - https://unsplash.com/photos/cVTC0gEOx8E
3. A Brilliant Way to Declutter Your Kitchen: https://www.thekitchn.com/kitchen-decluttering-tape-trick-23012562 - https://unsplash.com/photos/uarQNKJUdJk
4. 7 Organizing Ideas to Steal from Galley Kitchens: https://www.thekitchn.com/galley-kitchen-organizing-ideas-23003926 - https://unsplash.com/photos/UXFJ-6Zj27M
5. 10 of Amazon’s Bestselling Kitchen Organizers: https://www.thekitchn.com/bestselling-kitchen-organizers-amazon-23002821 - https://unsplash.com/photos/P6uqpNyXcI4

Links - Images used in the 'Vegetarian Recipes' section:

1. Butterbean and Vegetable Stew: https://www.deliciousmagazine.co.uk/recipes/butterbean-and-vegetable-stew/ - https://unsplash.com/photos/XoByiBymX20
2. Baked Falafel in Tomato Sauce: https://www.deliciousmagazine.co.uk/recipes/baked-falafel-tomato-sauce/ - https://pixabay.com/photos/falafel-dough-balls-chickpeas-2300734/
3. Aubergine and Tofu Curry: https://www.deliciousmagazine.co.uk/recipes/aubergine-and-tofu-curry/ - https://unsplash.com/photos/3DZTercmEF4
4. Cheesy Baked Bagel Pudding: https://www.deliciousmagazine.co.uk/recipes/cheesy-baked-bagel-pudding/ - https://unsplash.com/photos/Vuvaw92UbsM
5. Sticky Salted Caramel Apples: https://www.deliciousmagazine.co.uk/recipes/sticky-salted-caramel-apples/ - https://unsplash.com/photos/7u_wURCg5rw


**Website created by Jack Bennett.**