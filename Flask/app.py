import os

import pandas as pd
import numpy as np
# import tablib

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
app = Flask(__name__)

#################################################
# Database Setup
#################################################
dbfile = os.path.join('db', 'globalwarming.sqlite')
engine = create_engine(f"sqlite:///{dbfile}")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Create our session (link) from Python to the DB
session = Session(engine)

@app.route("/")
def index():
    """Return the homepage."""
    return render_template('index.html')

@app.route("/seaLevel")
def seaLevel():
    """Return the sealevel rise dataset."""
    return 

@app.route("/loss")
def lossProperty():
    """Return the Loss Statistics dataset."""
    return 

@app.route("/seaLevelGraph")
def seaLevelGraph():
    """Return the seaLevel graph."""
    return 


if __name__ == "__main__":
    app.run(debug=True)
