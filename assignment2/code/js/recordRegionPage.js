// Code for the Record Region page.
var pos = {lat:3, lng:0}
 if (navigator.geolocation)
 {console.log('A')
   navigator.geolocation.getCurrentPosition (function (location){
console.log('B')
         pos.lat = location.coords.latitude ;
         pos.lng = location.coords.longitude;
         console.log (pos.lat)
   })
 }
 else alert ("Your device is not suporting geolocation, this is required for this app. Please check settings");

function initialisemap()
{

//  var pos;

//  function setcenter(position)
  //{
    //  pos =
    //  {
    //    lat : position.coords.latitude ,
    //    lng : position.coords.longitude
    //  };
  //  console.log(pos);
//  }

//  console.log(pos);

  var map;
  var mapsettings =
  {
    center:  pos,
    zoom: 8
  };
  map = new google.maps.Map(document.getElementById("map"), mapsettings);
}
