// Function to determine marker size based on population
function markerSize(population) {
  return population *5;
}

function markerSize2(population) {
  return population *1000;
}

// An array containing all of the information needed to create city and state markers
var locations = [
  // {
  //   coordinates: [40.7128, -74.0059],
  //   state: {
  //     name: "New York State",
  //     population: 19795791
  //   },
  //   city: {
  //     name: "New York",
  //     population: 8550405
  //   }
  // },
  // {
  //   coordinates: [34.0522, -118.2437],
  //   state: {
  //     name: "California",
  //     population: 39250017
  //   },
  //   city: {
  //     name: "Lost Angeles",
  //     population: 3971883
  //   }
  // },
  // {
  //   coordinates: [41.8781, -87.6298],
  //   state: {
  //     name: "Michigan",
  //     population: 9928300
  //   },
  //   city: {
  //     name: "Chicago",
  //     population: 2720546
  //   }
  // },
  // {
  //   coordinates: [29.7604, -95.3698],
  //   state: {
  //     name: "Texas",
  //     population: 26960000
  //   },
  //   city: {
  //     name: "Houston",
  //     population: 2296224
  //   }
  // },
  // {
  //   coordinates: [41.2524, -95.9980],
  //   state: {
  //     name: "Nebraska",
  //     population: 1882000
  //   },
  //   city: {
  //     name: "Omaha",
  //     population: 446599
  //   }
  // }

  {
    coordinates: [39.944564, -82.98085],
    state: {
      name: 'OH',
      population: 22144
    },
    city: {
      name: 'Columbus',
      population: 38.4615385
    }
  },
  {
    coordinates: [40.103133, -83.26825],
    state: {
      name: "OH",
      population: 13571
    },
    city: {
      name: "Plain City",
      population: 37.7777778
    }
  },
{
    coordinates: [40.255973, -83.36391],
    state: {
      name: "OH",
      population: 34001
    },
    city: {
      name: "Marysville",
      population: 36.440678
    }
  },
{
    coordinates: [41.104806, -102.40905],
    state: {
      name: "NE",
      population: 1199
    },
    city: {
      name: "Chappell",
      population: 35.8490566
    }
  },
{
    coordinates: [40.103792, -98.94389],
    state: {
      name: "NE",
      population: 1186
    },
    city: {
      name: "Franklin",
      population: 35.1351351
    }
  },
{
    coordinates: [40.355958, -83.46681],
    state: {
      name: "OH",
      population: 1536
    },
    city: {
      name: "Raymond",
      population: 34.3434343
    }
  },
{
    coordinates: [40.179696, -83.44266],
    state: {
      name: "OH",
      population: 1815
    },
    city: {
      name: "Milford Center",
      population: 32.6923077
    }
  },
{
    coordinates: [32.903922, -85.42905],
    state: {
      name: "AL",
      population: 5984
    },
    city: {
      name: "Lafayette",
      population: 32.2580645
    }
  },
{
    coordinates: [39.481247, -80.87533],
    state: {
      name: "WV",
      population: 2255
    },
    city: {
      name: "Middlebourne",
      population: 28.8461538
    }
  },
{
    coordinates: [34.376689, -82.71772],
    state: {
      name: "SC",
      population: 4064
    },
    city: {
      name: "Starr",
      population: 28.5714286
    }
  },
{
    coordinates: [45.417898, -111.19888],
    state: {
      name: "MT",
      population: 1980
    },
    city: {
      name: "Gallatin Gateway",
      population: 28.3911672
    }
  },
{
    coordinates: [34.038226, -94.33597],
    state: {
      name: "AR",
      population: 10907
    },
    city: {
      name: "De Queen",
      population: 26.984127
    }
  },
{
    coordinates: [32.731748, -109.11471],
    state: {
      name: "AZ",
      population: 2761
    },
    city: {
      name: "Duncan",
      population: 26.8656716
    }
  },
{
    coordinates: [33.555145, -84.40108],
    state: {
      name: "GA",
      population: 35558
    },
    city: {
      name: "Riverdale",
      population: 26.7857143
    }
  },
{
    coordinates: [30.216073, -82.6396],
    state: {
      name: "FL",
      population: 16851
    },
    city: {
      name: "Lake City",
      population: 26.3157895
    }
  },
{
    coordinates: [35.223796, -90.00646],
    state: {
      name: "TN",
      population: 44943
    },
    city: {
      name: "Memphis",
      population: 25.8064516
    }
  },
{
    coordinates: [31.279043, -86.48699],
    state: {
      name: "AL",
      population: 10621
    },
    city: {
      name: "Andalusia",
      population: 25.6410256
    }
  },
{
    coordinates: [35.098017, -84.36195],
    state: {
      name: "TN",
      population: 1330
    },
    city: {
      name: "Turtletown",
      population: 25
    }
  },
{
    coordinates: [46.35653, -120.33462],
    state: {
      name: "WA",
      population: 13067
    },
    city: {
      name: "Toppenish",
      population: 24.2424242
    }
  },
{
    coordinates: [32.330717, -89.33827],
    state: {
      name: "MS",
      population: 2557
    },
    city: {
      name: "Lake",
      population: 24.137931
    }
  },
{
    coordinates: [32.046143, -81.06724],
    state: {
      name: "GA",
      population: 31594
    },
    city: {
      name: "Savannah",
      population: 23.880597
    }
  },
{
    coordinates: [42.97228, -112.83218],
    state: {
      name: "ID",
      population: 3534
    },
    city: {
      name: "Aberdeen",
      population: 23.7623762
    }
  },
// #N/A
{
    coordinates: [44.249331, -95.46821],
    state: {
      name: "MN",
      population: 1254
    },
    city: {
      name: "Walnut Grove",
      population: 23.4042553
    }
  },
{
    coordinates: [33.859815, -79.7542],
    state: {
      name: "SC",
      population: 13546
    },
    city: {
      name: "Lake City",
      population: 23.4042553
    }
  },
{
    coordinates: [33.9117, -86.24408],
    state: {
      name: "AL",
      population: 2674
    },
    city: {
      name: "Steele",
      population: 23.0769231
    }
  },
{
    coordinates: [35.805114, -96.53926],
    state: {
      name: "OK",
      population: 1714
    },
    city: {
      name: "Depew",
      population: 22.9508197
    }
  },
{
    coordinates: [35.001842, -85.33092],
    state: {
      name: "TN",
      population: 2464
    },
    city: {
      name: "Chattanooga",
      population: 22.9508197
    }
  },
{
    coordinates: [33.734171, -81.07563],
    state: {
      name: "SC",
      population: 7936
    },
    city: {
      name: "Swansea",
      population: 22.9166667
    }
  },
{
    coordinates: [36.236377, -88.83586],
    state: {
      name: "TN",
      population: 2297
    },
    city: {
      name: "Sharon",
      population: 22.8571429
    }
  },
{
    coordinates: [35.518637, -81.62728],
    state: {
      name: "NC",
      population: 1877
    },
    city: {
      name: "Casar",
      population: 22.8070175
    }
  },
{
    coordinates: [38.470473, -87.09905],
    state: {
      name: "IN",
      population: 1404
    },
    city: {
      name: "Otwell",
      population: 22.8070175
    }
  },
{
    coordinates: [39.758142, -87.1754],
    state: {
      name: "IN",
      population: 8690
    },
    city: {
      name: "Rockville",
      population: 22.6415094
    }
  },
{
    coordinates: [38.424954, -83.86286],
    state: {
      name: "KY",
      population: 2588
    },
    city: {
      name: "Moorefield",
      population: 22.5
    }
  },
{
    coordinates: [38.101664, -82.5456],
    state: {
      name: "WV",
      population: 3169
    },
    city: {
      name: "Fort Gay",
      population: 22.5
    }
  },
{
    coordinates: [48.359904, -120.13051],
    state: {
      name: "WA",
      population: 2848
    },
    city: {
      name: "Twisp",
      population: 22.459893
    }
  },
{
    coordinates: [46.208571, -119.74507],
    state: {
      name: "WA",
      population: 13802
    },
    city: {
      name: "Prosser",
      population: 22.2929936
    }
  },
{
    coordinates: [33.652489, -83.08857],
    state: {
      name: "GA",
      population: 3360
    },
    city: {
      name: "Union Point",
      population: 22.2222222
    }
  },
{
    coordinates: [48.108672, -116.64794],
    state: {
      name: "ID",
      population: 985
    },
    city: {
      name: "Cocolalla",
      population: 22.1556886
    }
  },
{
    coordinates: [38.985138, -90.44563],
    state: {
      name: "IL",
      population: 2066
    },
    city: {
      name: "Grafton",
      population: 22.0779221
    }
  },
// #N/A
{
    coordinates: [34.146713, -87.39317],
    state: {
      name: "AL",
      population: 4366
    },
    city: {
      name: "Double Springs",
      population: 21.9512195
    }
  },
// #N/A
{
    coordinates: [39.230151, -111.57601],
    state: {
      name: "UT",
      population: 3553
    },
    city: {
      name: "Manti",
      population: 21.6
    }
  },
{
    coordinates: [43.67511, -111.87407],
    state: {
      name: "ID",
      population: 21446
    },
    city: {
      name: "Rigby",
      population: 21.4765101
    }
  },
{
    coordinates: [36.777702, -94.68768],
    state: {
      name: "OK",
      population: 3606
    },
    city: {
      name: "Wyandotte",
      population: 21.4285714
    }
  },
{
    coordinates: [40.838891, -85.62014],
    state: {
      name: "IN",
      population: 2102
    },
    city: {
      name: "Andrews",
      population: 21.2765957
    }
  },
{
    coordinates: [46.297139, -119.35457],
    state: {
      name: "WA",
      population: 15212
    },
    city: {
      name: "West Richland",
      population: 21.2643678
    }
  },
{
    coordinates: [43.653878, -116.90117],
    state: {
      name: "ID",
      population: 4511
    },
    city: {
      name: "Wilder",
      population: 21.2121212
    }
  },
{
    coordinates: [36.20423, -83.75046],
    state: {
      name: "TN",
      population: 3204
    },
    city: {
      name: "Luttrell",
      population: 21.2121212
    }
  },
{
    coordinates: [42.847727, -112.50329],
    state: {
      name: "ID",
      population: 18056
    },
    city: {
      name: "Pocatello",
      population: 21.0144928
    }
  },
{
    coordinates: [36.807043, -79.61864],
    state: {
      name: "VA",
      population: 1254
    },
    city: {
      name: "Callands",
      population: 20.9677419
    }
  },
{
    coordinates: [40.215278, -84.6477],
    state: {
      name: "OH",
      population: 2547
    },
    city: {
      name: "Ansonia",
      population: 20.9677419
    }
  },
{
    coordinates: [39.922612, -75.23453],
    state: {
      name: "PA",
      population: 28238
    },
    city: {
      name: "Philadelphia",
      population: 20.754717
    }
  },
{
    coordinates: [46.210957, -119.16369],
    state: {
      name: "WA",
      population: 51089
    },
    city: {
      name: "Kennewick",
      population: 20.7317073
    }
  },
{
    coordinates: [46.177732, -120.02966],
    state: {
      name: "WA",
      population: 3343
    },
    city: {
      name: "Mabton",
      population: 20.5882353
    }
  },
{
    coordinates: [37.029613, -120.64014],
    state: {
      name: "CA",
      population: 9388
    },
    city: {
      name: "Dos Palos",
      population: 20.4225352
    }
  },
{
    coordinates: [41.508503, -111.79102],
    state: {
      name: "UT",
      population: 1619
    },
    city: {
      name: "Paradise",
      population: 20.4188482
    }
  },
{
    coordinates: [46.169982, -119.10456],
    state: {
      name: "WA",
      population: 30466
    },
    city: {
      name: "Kennewick",
      population: 20.3592814
    }
  },
{
    coordinates: [33.58776, -84.33011],
    state: {
      name: "GA",
      population: 26395
    },
    city: {
      name: "Morrow",
      population: 20.3125
    }
  },
{
    coordinates: [31.684819, -110.34743],
    state: {
      name: "AZ",
      population: 5374
    },
    city: {
      name: "Huachuca City",
      population: 20.2898551
    }
  },
{
    coordinates: [42.96866, -112.43182],
    state: {
      name: "ID",
      population: 23113
    },
    city: {
      name: "Chubbuck",
      population: 20.2531646
    }
  },
{
    coordinates: [48.205853, -116.5571],
    state: {
      name: "ID",
      population: 6141
    },
    city: {
      name: "Sagle",
      population: 20.2247191
    }
  },
{
    coordinates: [48.362033, -116.55101],
    state: {
      name: "ID",
      population: 18071
    },
    city: {
      name: "Sandpoint",
      population: 20.1219512
    }
  },
{
    coordinates: [46.279657, -119.28137],
    state: {
      name: "WA",
      population: 30184
    },
    city: {
      name: "Richland",
      population: 20.1149425
    }
  },
{
    coordinates: [33.564711, -84.43987],
    state: {
      name: "GA",
      population: 28467
    },
    city: {
      name: "Riverdale",
      population: 20
    }
  },
{
    coordinates: [32.569122, -82.80959],
    state: {
      name: "GA",
      population: 9292
    },
    city: {
      name: "East Dublin",
      population: 20
    }
  },
  
];

// Define arrays to hold created city and state markers
var cityMarkers = [];
var stateMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  stateMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
      radius: markerSize(locations[i].state.population)
    })
  );

  // Setting the marker radius for the city by passing population into the markerSize function
  cityMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "red",
      fillColor: "red",
      radius: markerSize2(locations[i].city.population)
    })
  );
}

// Define variables for our base layers
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Create two separate layer groups: one for cities and one for states
var states = L.layerGroup(stateMarkers);
var cities = L.layerGroup(cityMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "State Population": states,
  "City Population": cities
};

// Define a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [streetmap, states, cities]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
