const display = document.getElementById("main-display");


async function letsFetchSomeData(where) {
		const response = await fetch(
			`api.openweathermap.org/data/2.5/weather?q=${where}&appid=b4511e0f3d46dc6c849105371aafd345`,
			{ mode: "cors" }
		);
		const weatherData = await response.json();

		display.textContent = weatherData.weather;
	}

export default letsFetchSomeData;
