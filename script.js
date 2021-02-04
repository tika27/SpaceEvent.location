
var nasaURL =


    //Primary Functions
    //User wants to see where the space station currently is, and when it will pass over their region in North America  
    //The current location of the space station will be plotted on a mapbox map


    //define 4 different north american regions, each with different locations(longitude and latitude)-- or other way to assign area values  
    //create an event listener with a drop down menu of different regions(east coast, mid-west, west, west-coast) and a submit button

    //retrieve and store selected variable on click 

    //execute first function: 
    //query the ISS API by using boiler plate AJAX
    //accsess the 


    //function to find iss. not functioning yet
    function findISS() {
        //satellite endpoint
        var queryURL = "https://api.wheretheiss.at/v1/satellites";
        //returns position, velocity, and other related info about satellite at any given point in time
        var location = "https://api.wheretheiss.at/v1/satellites/25544"
        //returns list of positions about satellite w/ timestamps (up to 10)
        var futureLocations = "https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles"
        //returns TLE data--predicts location of satellite for given point in time
        var TLEData = "https://api.wheretheiss.at/v1/satellites/25544/tles"
        //returns coordinates 
        var coord = "https://api.wheretheiss.at/v1/coordinates"

        

      

    }

//Primary Functions
//User wants to see where the space station currently is, and the date it will pass over their region in North America  
//The current location of the space station will be plotted on a mapbox map


//define 4 different north american region variables, each with different area values using longitude and latitude
//var east coast, mid-west, west, west-coast
//create a mapbox map using the map object in the mapbox.js library



//create an event listener with a drop down menu of the different variables and a submit button
//on click retreive the selected variable (*also add an event prevent default function) then execute the first function:
 
//query the ISS API by using boiler plate AJAX 
//if the object is received, access the current longitude and latitude data and store them as a variable 
//will liekly need to convert longitude and latitude into one element  
//plot the current longitude and latitude on a mapbox map and present it to user in an iframe

//



