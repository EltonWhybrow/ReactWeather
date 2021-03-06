var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9ab4a8e55441f30560c7591a05d2e930&units=imperial';

// OWM key 9ab4a8e55441f30560c7591a05d2e930
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){

      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (err){
      throw new Error('Unable to find a city! ' + err.response.data.message);
    });
  }
}
