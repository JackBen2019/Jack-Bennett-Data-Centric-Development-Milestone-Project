import os
from flask import Flask, render_template

app = Flask(__name__)

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