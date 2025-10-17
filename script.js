let input = document.querySelector("input");
let SearchButton = document.querySelector(".search");
let temperature = document.querySelector(".temperature p");
let weather = document.querySelector(".weather p");
let humidity = document.querySelector(".humidity p");
let wind_speed = document.querySelector(".wind_speed p");
let visibility = document.querySelector(".visibility p");
let pressure = document.querySelector(".pressure p");
let info = document.querySelector(".info");

let url = `https://yahoo-weather5.p.rapidapi.com/weather?location=`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '246b65226cmshc73fcfd28ede6c5p112574jsn2a1a4d47ec98',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

async function getdata() {
	try
	{
		let city = input.value;
		let extra = `${city}&format=json&u=c`;
		url = url + extra;
		let response = await fetch(url,options);
		let data = await response.json();

		temperature.innerText = data.current_observation.condition.temperature;
		temperature.innerText += "°C";

		weather.innerText = data.current_observation.condition.text;	

		humidity.innerText = data.current_observation.atmosphere.humidity;
		humidity.innerText += "%";

		visibility.innerText = data.current_observation.atmosphere.visibility;
		visibility.innerText += "km";

		pressure.innerText = data.current_observation.atmosphere.pressure;
		pressure.innerText += "mb";

		wind_speed.innerText = data.current_observation.wind.speed;
		wind_speed.innerText += "km/h"

		info.style.display = "block";
	}
	catch(error)
	{
		console.error(error);
	}
}


input.addEventListener("keydown",(event) =>
{
	if(event.key == "Enter")
	{
		getdata();
	}
});
SearchButton.addEventListener("click",()=>
{
	getdata();
});