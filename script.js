var query = 'http://api.open-notify.org/iss-pass.json?lat=41&lon=87'

$.ajax({

  url: query,
  dataType: 'jsonp',
  method: 'GET'

}).then(function (data) {

console.log(data)

var value = data.response[0].risetime
console.log(value)

var newVal = parseInt(value)

var d = new Date(value);


d.toDateString();  
d.toTimeString(); 
console.log(d)

   
})



var queryURL = 'https://api.wheretheiss.at/v1/satellites/25544'

$.ajax({

  url: queryURL,
  method: 'GET'

}).then(function (response) {



  mapboxgl.accessToken = 'pk.eyJ1IjoibGF2aW5hOTEiLCJhIjoiY2trcjJuZ29uMDRlcTJubng0djRwNGZ5YiJ9.BtYL1IoJPknYjBxo5N6vKA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [response.longitude, response.latitude]
  });

  var marker = new mapboxgl.Marker()
    .setLngLat([response.longitude, response.latitude])
    .addTo(map);

  map.addControl(new mapboxgl.NavigationControl());


})




