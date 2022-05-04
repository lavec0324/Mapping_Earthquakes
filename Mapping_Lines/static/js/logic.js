// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level (alternate method using setview)
let map = L.map('mapid').setView([40.497639, -80.239563], 4);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
  [37.615223,-122.389977],
  [30.197472, -97.666351],
  [43.677717,  -79.62481],
  [40.641312, -73.778137],
  [40.515820, -74.681450]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  dashArray: '10,10'
}).addTo(map);

// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       39.099724, -94.578331
//     ],
//     zoom: 4
//   });

//Cities data array cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: city.population/100000,
//     color:"orange",
//     fillcolor:'#ffffa1'
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });
  
  
//   {
//   radius: 300,
//   color:"black",
//   fillColor:'#ffffa1'
// }).addTo(map);

  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',   
maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);