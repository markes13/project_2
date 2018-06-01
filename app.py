import os

import pandas as pd
import numpy as np
import tablib

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
app = Flask(__name__)
dataset = tablib.Dataset()
with open(os.path.join(os.path.dirname(__file__),'data.csv')) as f:
    dataset.csv = f.read()

#################################################
# Database Setup
#################################################
dbfile = os.path.join('db', 'project_2.sqlite')
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
    return dataset.html

@app.route("/loss")
def lossProperty():
    """Return the Loss Statistics dataset."""
    return render_template("Loss_Statistics.htm")

@app.route("/seaLevelGraph")
def seaLevelGraph():
    """Return the seaLevel graph."""
    return render_template("Loss_Statistics.htm")


if __name__ == "__main__":
    app.run(debug=True)