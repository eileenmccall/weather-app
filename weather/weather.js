const request = require('request');
const key;

function getWeather (lat, lng, callback) {
	request({
		url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				actual: body.currently.apparentTemperature
			});	
		} else {
			callback('Unable to fetch weather');
		}
	})
}

module.exports = {
	getWeather: getWeather
}

