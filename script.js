/* Javascript web application using Dark Sky API Weather App */

document.getElementById("searchBox").addEventListener("input", placeSearch);

var globalLong;
var globalLat;

function placeSearch(){

  var options = {
    types: ['(cities)']
   };
var input = document.getElementById("searchBox");
var autocomplete = new google.maps.places.Autocomplete(input, options);
google.maps.event.addListener(autocomplete,'place_changed', function(){
var place = autocomplete.getPlace();
globalLong = place.geometry.location.lng();
globalLat = place.geometry.location.lat();
  });
};

function call(){
  showWeather(globalLat, globalLong);
  document.getElementById("city").innerHTML = document.getElementById("searchBox").value;
}



  function showWeather(latitude, longitude){
    var url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/103b07ef04d782146176e5e9f5408e46/"+ latitude + "," +longitude;
    var url2 = 'https://api.darksky.net/forecast/103b07ef04d782146176e5e9f5408e46/${latitude},${longitude}';
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function(){
      if(request.status >= 200 && request.status < 400){
      var data = JSON.parse(this.responseText);
      displayWeather(data);
      console.log("Success");
    }
    else{
      console.log("Error");
    };
  };
    request.onerror = function(){
      console.log("Error");
    };
    request.send();
}


function displayWeather(data){
  var precise = data.currently.temperature;
  precise = precise.toPrecision(2);
  document.getElementById("curr-temp").innerHTML = precise + "°F";
  document.getElementById("curr-summary").innerHTML = data.currently.summary;
  document.getElementById("curr-humidity").innerHTML = "Humidity:" + " " + convertHumidity(data.currently.humidity);
  document.getElementById("curr-windSpeed").innerHTML ="Wind Speed:" + " " +  data.currently.windSpeed+ " " + "mph";
  console.log(data.currently.icon);
  whichIcon(data.currently.icon);

}

/*clear-day, clear-night, rain, snow, sleet, wind, fog, 
 cloudy, partly-cloudy-day, or partly-cloudy-night*/
function whichIcon(icon){
  if(icon == "clear-day"){
    document.getElementById("curr-icon").src = "Sun.svg";
  }
  if(icon == "rain"){
    document.getElementById("curr-icon").src = "Cloud-Drizzle.svg";
  }
}

function convertHumidity(data){
  var num = data * 100;
  return num + "%";
}

/* °F -> °C */
function toCelcius(temp){
 var convert = (temp-32) * .556;
 convert = convert.toPrecision(2);
 return convert + "°C";
}




/*function getCoordinate(){
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      document.getElementById("latitude").placeholder = latitude;
      document.getElementById("longitude").placeholder = longitude;
      document.getElementById("latitude").value = latitude;
      document.getElementById("longitude").value = longitude;
    })
  }
  else {
    window.alert("Could not get location");
      }
  } */
