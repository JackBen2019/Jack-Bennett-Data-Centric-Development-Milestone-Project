import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from os import path
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'uploadedRecipes'
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")

mongo = PyMongo(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/yourrecipes")
def yourrecipes():
    return render_template("/yourrecipes.html", recipes=mongo.db.recipes.find())

@app.route("/recipes")
def recipes():
    return render_template("/recipes.html")

@app.route("/blog")
def blog():
    return render_template("/blog.html")

@app.route("/contact")
def contact():
    return render_template("/contact.html")

@app.route("/upload")
def upload():
    return render_template("/upload.html", categories=mongo.db.categories.find())

@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    recipes = mongo.db.recipes
    recipes.insert_one(request.form.to_dict())
    return redirect(url_for('yourrecipes'))

@app.route('/edit_recipe/<recipe_id>')
def edit_recipe(recipe_id):
    the_recipe = mongo.db.recipes.find_one({"_id": ObjectId(recipe_id)})
    all_categories = mongo.db.categories.find()
    return render_template('editrecipe.html', recipe=the_recipe, categories=all_categories)

@app.route('/update_recipe/<recipe_id>', methods=["POST"])
def update_recipe(recipe_id):
    recipes = mongo.db.recipes
    recipes.update( {'_id': ObjectId(recipe_id)},
    {
        'recipe_name':request.form.get('recipe_name'),
        'ingredients':request.form.get('ingredients'),
        'recipe_category':request.form.get('recipe_category'),
        'first_name':request.form.get('first_name'),
        'last_name':request.form.get('last_name')
    })
    return redirect(url_for('yourrecipes'))

@app.route('/delete_recipe/<recipe_id>')
def delete_recipe(recipe_id):
    mongo.db.recipes.remove({'_id': ObjectId(recipe_id)})
    return redirect(url_for('yourrecipes'))

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=False)