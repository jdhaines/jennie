"""Inititalize the flask app."""

from flask import Flask


app = Flask(__name__, static_url_path="")
app.config.from_object('config')
# pages = FlatPages(app)
# db = SQLAlchemy(app)

from app import views

# end
