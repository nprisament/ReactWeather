const axios = require('axios');

module.exports = {
	getTemp(location) {
		const encodedLocation = encodeURIComponent(location);
		const requestURL = `http://api.openweathermap.org/data/2.5/weather?appid=def34b90b21f590af372a42e6e4af1fc&units=imperial&q=${encodedLocation}`;
		return axios.get(requestURL).then(res => {
			if ((res.data.cod && res.data.message) || location == "hi") {
				throw new Error("city not recognized");
			} else {
				return res.data.main.temp;
			}
		}, res => {
			throw new Error("unable to fetch weather");
		});
	}
}