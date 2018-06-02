
# coding: utf-8

# In[1]:


# Import Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func, desc
import datetime as dt
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
# Import flask 
from flask import Flask, jsonify, render_template


# In[3]:


# Use create_engine to connect to your sqlite database# Use cr 
engine = create_engine("sqlite:///global_warming.sqlite", echo=False)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Create our session (link) from Python to the DB
session = Session(engine)


# In[ ]:


# Flask Setup
app = Flask(__name__)
@app.route("/")
def home():  
    return render_template('index.html')

@app.route("/seaLevelData")
def seaLevel():
    """Return the sealevel rise dataset."""
    return render_template ('data_sealevel.csv')

@app.route("/lossData")
def lossProperty():
    """Return the lossProperty dataset."""
    return render_template ('Loss_Statistics.htm')

@app.route("/tempData")
def tempData():
    """Return the temperature dataset."""
    return render_template ('data_temp.csv')

@app.route("/seaLevelGraph")
def seaLevelGraph():
    """Return the seaLevel graph."""
    return render_template("sealevel.html")   

@app.route("/lossPropertyGraph")
def lossPropertyGraph():
    """Return the lossProperty graph."""
    return render_template("PolicyLoss.html")

@app.route("/tempGraph")
def tempGraph():
    """Return the temperature graph."""
    return render_template("viz.html")  

@app.route("/climateGraph")
def climateGraph():
    """Return the climate graph."""
    return render_template("index_climate.html")

if __name__ == "__main__":
    app.run(debug=True)

