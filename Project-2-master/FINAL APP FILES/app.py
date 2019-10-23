####Dependicies 

import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify,render_template
import inspect
#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///teamproj.sqlite")
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
# Save reference to the table
print(engine.table_names())
censusdata = Base.classes.censusdata

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

@app.route("/bubbledata")
def names():
    """Return a list of all passenger names"""
    # Query all passengers
    session = Session(engine)
    results = session.query(censusdata.state, censusdata.addr, censusdata.poverty, censusdata.age, censusdata.income, censusdata.AvgPricePerSqFt).all()
	 # Convert list of tuples into normal list
    all_names = list(np.ravel(results))
	#create dictionary to append to list
    allcensusdata = []
    for state, addr, poverty, age, income, AvgPricePerSqFt in results:
        census_dict = {}
        census_dict["state"] = state
        census_dict["addr"] = addr
        census_dict["poverty"] = poverty
        census_dict["age"] = age
        census_dict["income"] = income
        census_dict["AvgPricePerSqFt"] = AvgPricePerSqFt
        allcensusdata.append(census_dict)


   
    return jsonify(allcensusdata)




############################# Geojson Data Route##############
@app.route("/Interactivemap")
def mapnbubble ():
	return render_template("Interativeindex.html")

# 	return jsonify(geojson-data)


####bubbbles.js



# d3.json(herokuapp/census_data)

if __name__ == '__main__':
    app.run(debug=True)