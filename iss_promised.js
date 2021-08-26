// iss_promised.js
const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function(jsonIp) {
  const ip = JSON.parse(jsonIp).ip;
  return request('https://freegeoip.app/json/'+ip);
};

const fetchISSFlyOverTimes = function(coords) {
  const { latitude, longitude } = JSON.parse(coords);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then( (data) => {
    const {response } = JSON.parse(data);
    return response;
  });
}

module.exports = { nextISSTimesForMyLocation };