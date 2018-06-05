


/* Javascript web application using Dark Sky API Weather App */

document.getElementById("searchBox").addEventListener("input", placeSearch);


function placeSearch(){
var input = document.getElementById("searchBox");
var autocomplete = new google.maps.places.Autocomplete(input);

google.maps.event.addListener(autocomplete,'place_changed', function(){
var place = autocomplete.getPlace();
document.getElementById("longitude").placeholder = place.geometry.location.lng();
document.getElementById("latitude").placeholder = place.geometry.location.lat();
document.getElementById("longitude").value = place.geometry.location.lng();
document.getElementById("latitude").value = place.geometry.location.lat();
  });
};


function userCoordInput(){
  var userLat = document.getElementById("latitude").value;
  var userLong= document.getElementById("longitude").value;
  showWeather(userLat, userLong);
}


  function showWeather(latitude, longitude){
    var url = "https://api.darksky.net/forecast/103b07ef04d782146176e5e9f5408e46/"+ latitude + "," +longitude;
    var url2 = 'https://api.darksky.net/forecast/103b07ef04d782146176e5e9f5408e46/${latitude},${longitude}';
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function(){
      if(request.status >= 200 && request.status < 400){
      var data = JSON.parse(this.responseText);
      displayWeather(data);
      console.log("poop");
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
  document.getElementById("curr-temp").innerHTML = toCelcius(data.currently.temperature);
  document.getElementById("curr-summary").innerHTML = data.currently.summary;
  document.getElementById("curr-humidity").innerHTML = convertHumidity(data.currently.humidity);
  document.getElementById("curr-windSpeed").innerHTML = data.currently.windSpeed+ " " + "mph";

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




function getCoordinate(){
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
  }






