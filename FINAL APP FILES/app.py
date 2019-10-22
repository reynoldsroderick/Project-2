####Dependicies 

import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify,render_template

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///teamproj.sqlite")
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
# Save reference to the table
# censusdata = Base.classes.passenger

# Create our session (link) from Python to the DB

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes (Dash Board )
#################################################

@app.route("/")
def welcome ():
	return "Welcome to our app!"
	# return "For map, use the /map route"
	# return "For SPLOM, use the /splom route" 
	# return "For bubble, use the /bubble route"

# 	return render_template(dashboard.html)	

###########################zip code Map################
@app.route ("/map")
def map ():
	return render_template("index.html")					#map.html refs map.js



############################# Bubble Route##############
@app.route ("/splom")
def census ():
	return render_template("splom.html")					#bubbles.html refs bubbles.js



############################# Census Data Route##############
@app.route("/bubble")
def bubble ():
 	return render_template("bubbleindex.html")



############################# Geojson Data Route##############
@app.route("/Interactivemap")
def mapnbubble ():
	return render_template("Interativeindex.html")

# 	return jsonify(geojson-data)


####bubbbles.js



# d3.json(herokuapp/census_data)

if __name__ == '__main__':
    app.run(debug=True)