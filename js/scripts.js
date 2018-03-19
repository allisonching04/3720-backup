window.onload = init();

function init() {

	var weatherM = document.getElementById("box1");
	var city = document.getElementById("box2");
	var allData = document.getElementById("box3");
	var weatherInfo = document.getElementById("box4");

	var xhr = new XMLHttpRequest();

	var weatherAPI = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=ac4442d3cc94f73f2a14aabd2a07da36";

	xhr.open("GET", weatherAPI, true);

	//this case: no data is sent
	// because we just request the data 
	xhr.send(null);

	xhr.onload = function() {
		if(xhr.status == 200){

			var weatherObj = JSON.parse(xhr.responseText);
			city.innerHTML = weatherObj.city.name;
			weatherM.innerHTML = weatherObj.list[0].weather[0].main;
			//allData.innerHTML 

			var list = weatherObj.list[0];

			for(var i=0; i< weatherObj.list.length; i++) {

				list +=  weatherObj.list[i];

				//allData.innerHTML = list.wind.;
				 

			}

			console.log(weatherObj);

		}
	}

}