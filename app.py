import os
from flask import Flask, render_template
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from os import path
if path.exists("env.py"):
  import env 

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'uploadedRecipes'
app.config["MONGO_URI"] = 'mongodb+srv://root:Ch3ls34_12361@myfirstcluster-rhnnf.mongodb.net/uploadedRecipes?retryWrites=true&w=majority'

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/recipes")
def recipes():
    return render_template("/recipes.html")

@app.route("/shop")
def shop():
    return render_template("/shop.html")

@app.route("/contact")
def contact():
    return render_template("/contact.html")

@app.route("/upload-recipe")
def uploadrecipe():
    return render_template("/upload-recipe.html")

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)