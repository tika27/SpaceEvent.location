var query = 'http://api.open-notify.org/iss-pass.json?lat=41&lon=72'

$.ajax({

  url: query,
  dataType: 'jsonp',
  method: 'GET'

}).then(function (data) {

console.log(data)
//code snippet to convert UNIX timestamp to a date and time 
var value = data.response[0].risetime
function timeConverter(UNIX_timestamp){
    var a = new Date(value * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  console.log(timeConverter());

   
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




