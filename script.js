/*https://api.darksky.net/forecast/[key]/[latitude],[longitude]
  Key : 103b07ef04d782146176e5e9f5408e46
  */

function getWeather(){
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        showWeather(lat,long);
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
