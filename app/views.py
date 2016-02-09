"""Views module for the flask app."""

# import csv

# from io import StringIO

from app import app

from flask import render_template


# index view function - home page
@app.route("/")
@app.route("/index", methods=['GET'])
def index():
    """Display the home (index) page."""
    return render_template("index.html",
                           title="JennieTatum.com")

# end
