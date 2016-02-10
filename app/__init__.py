"""Inititalize the flask app."""

from flask import Flask
from flask_bootstrap import Bootstrap

app = Flask(__name__, static_url_path="")
Bootstrap(app)
app.config.from_object('config')
# pages = FlatPages(app)
# db = SQLAlchemy(app)

from app import views

# end
