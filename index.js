// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("Index found this error:",error);
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

// Old test code

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('64.229.40.211', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// fetchISSFlyOverTimes({ latitude: 43.5265, longitude: -80.3091 }, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("It worked:",data);
//   // for (let pass of data) {
//   // }
// });