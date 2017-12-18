# weather-app
This is an app I created as part of [Andrew Mead's Node.js course on Udemy.com](https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content). It's a small, simple app that tells you the temperature and apparent temperature for a given address. It uses the Google Maps API to get the formatted address, as well as the latitude and longitude, and the Dark Sky API to get the weather information.

Before you can use the app, you'll need to create an account at [darksky.net/dev](darksky.net/dev) and set the `key` variable in `weather.js` to your API key.

To fetch the weather for an address, cd into the app directory and run the command `node app.js -a "Your Address"` using the desired address. It will then print the formatted address, as well as the temperature.

You know, in case pulling up the weather on your phone is too much work or something.
