const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((passes) => {
    console.log(passes);
  })
  .catch((err) => {
    console.log("Error from index2",err);
  })