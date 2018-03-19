window.onload = init();

function init() {
	
	var xhr = new XMLHttpRequest();

	var weatherAPI = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=ac4442d3cc94f73f2a14aabd2a07da36";

	xhr.open("GET", weatherAPI, true);

	//this case: no data is sent
	// because we just request the data 
	xhr.send(null);

	xhr.onload = function() {
		if(xhr.status == 200){

			var weatherObj = JSON.parse(xhr.responseText);
			console.log(weatherObj)

		}
	}

}