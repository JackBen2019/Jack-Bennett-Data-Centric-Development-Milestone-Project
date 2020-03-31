import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from os import path
if path.exists("env.py"):
  import env 

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'uploadedRecipes'
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")

mongo = PyMongo(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/recipes")
def recipes():
    return render_template("/recipes.html", recipes=mongo.db.recipes.find())

@app.route("/shop")
def shop():
    return render_template("/shop.html")

@app.route("/contact")
def contact():
    return render_template("/contact.html")

@app.route("/upload")
def upload():
    return render_template("/upload.html", categories=mongo.db.categories.find())

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)