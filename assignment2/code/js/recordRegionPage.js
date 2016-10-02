// Code for the Record Region page.


function initialisemap()
{
var map
var mapsettings = {
  center: {lat:-20, lng: -17},
  zoom: 2
}

map = new google.maps.Map(document.getElementById("map"), mapsettings);
}
