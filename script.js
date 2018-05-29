/*https://api.darksky.net/forecast/[key]/[latitude],[longitude]
  Key : 103b07ef04d782146176e5e9f5408e46
  */

/* Javascript web application using Dark Sky API Weather App */


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
  console.log(data.currently.summary);
  console.log(data.currently.temperature);
  console.log(data.currently.humidity);
  console.log(data.currently.pressure);
  console.log(data.currently.windSpeed);




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









/*var button = document.getElementById("clicky");
var latitude;
var longitude;
var url = "https://api.darksky.net/forecast/103b07ef04d782146176e5e9f5408e46/37.8267,-122.4233"
button.addEventListener("click",function(){
var request = new XMLHttpRequest();
request.open('GET', url, true);
request.onload = function(){
  var data = JSON.parse(this.response);
    renderHTML(data);
  };
  request.send();
});


function renderHTML(input){
    console.log(input.latitude);
    console.log(input.longitude);
  }*/
