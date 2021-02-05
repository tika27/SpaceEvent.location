

var queryURL = 'https://api.wheretheiss.at/v1/satellites/25544'

$.ajax({

    url: queryURL,
    method: 'GET'

}).then(function (response) {

    console.log(response)


    mapboxgl.accessToken = 'pk.eyJ1IjoibGF2aW5hOTEiLCJhIjoiY2trcjJuZ29uMDRlcTJubng0djRwNGZ5YiJ9.BtYL1IoJPknYjBxo5N6vKA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [response.longitude, response.latitude]
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([response.longitude, response.latitude])
        .addTo(map);





    $('#add-city').on('click', function (event) {

        event.preventDefault();

        var city = $('#city-input').val().trim();


        $.ajax({

            url: 'https://api.opencagedata.com/geocode/v1/json?q=' + city + '&key=e4b96817bbdb4f5ea616979b004213f1',
            method: 'GET'

        }).then(function (data) {

            console.log(data)


            var newMarker = new mapboxgl.Marker()
            newMarker.remove()
                .setLngLat([data.results[0].geometry.lng, data.results[0].geometry.lat])
                .addTo(map);


            var query = 'http://api.open-notify.org/iss-pass.json?lat=' + data.results[0].geometry.lat + '&lon=' + data.results[0].geometry.lng

            $.ajax({

                url: query,
                dataType: 'jsonp',
                method: 'GET'

            }).then(function (data) {

                console.log(data)
                //code snippet to convert UNIX timestamp to a date and time 
                var value = data.response[0].risetime
                function timeConverter(UNIX_timestamp) {
                    var a = new Date(value * 1000);
                    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    var year = a.getFullYear();
                    var month = months[a.getMonth()];
                    var date = a.getDate();
                    var hour = a.getHours();
                    var min = a.getMinutes();
                    var sec = a.getSeconds();
                    if (hour > 0 && hour <= 12) {
                        hourVal = "" + hour;
                        var when = " am"
                    } else if (hour > 12) {
                        hourVal = "" + (hour - 12);
                        var when = " pm"
                    } else if (hour == 0) {
                        hourVal = "12";
                    }
                    var time = date + ' ' + month + ' ' + year + ' ' + hourVal + ':' + min + ':' + sec + when;
                    return time;
                }

                console.log('The ISS will pass over ' + city + ' on ' + timeConverter(value));


            })



        })






    })









})



