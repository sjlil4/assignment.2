var position = {lat:35, lng:-145};
var locationcircle;


function initialisemap()
{
	console.log('A')
   		navigator.geolocation.getCurrentPosition (
			function (location)
			{
        		console.log('B')

				position =
					{
						lat : location.coords.latitude,
        				lng : location.coords.longitude
					}
				console.log(position.lat);
				return position

   			})
 	console.log("C")

  	map = new google.maps.Map(document.getElementById("map"),
		{
			center:setposition.position,
			zoom:20
		});
	initlocationcircle();
}

function initlocationcircle ()
{
	var locationcircle = new google.maps.Circle (
		{
			strokeColor: '#FF0000',
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 1,
            map: map,
            center: position,
            radius: 1
		});
	var autoUpdatePosition = window.setInterval(setposition, 100);
	var autoUpdatelocationCircle = window.setInterval(updatelocationcirlce, 100);
	window.locationcircle= locationcircle;
}

function updatelocationcirlce ()
{
	locationcircle.center = position;
}

function setposition ()
{
	if (navigator.geolocation)
	{
		console.log('A')
   		navigator.geolocation.getCurrentPosition (
			function (location)
			{
        		console.log('B')

				position =
					{
						lat : location.coords.latitude,
        				lng : location.coords.longitude
					}
				console.log(position.lat);
				return position

   			})
	}

	else alert ("Your device is not suporting geolocation, this is required for this app. Please check settings");

}
