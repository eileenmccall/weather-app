const request = require('request');

function getWeather (lat, lng, callback) {
	request({
		url: `https://api.darksky.net/forecast/25cbeff1d6bc1d695237ba2b4dfab984/${lat},${lng}`,
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

