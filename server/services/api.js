const axios = require('axios');

const convertPostalCodeToLatLon = (postalCode) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://developers.onemap.sg/commonapi/search?searchVal=${postalCode}&returnGeom=Y&getAddrDetails=Y`)
         .then(response => {
           if (response.data.results.length <= 0) {
             return reject({ message: 'Latitude and Longitude is empty' });
           }
           let coordinates = {
             latitude: response.data.results[0].LATITUDE,
             longitude: response.data.results[0].LONGITUDE,
           };
           resolve(coordinates);
         })
         .catch(err => {
           reject(err);
         });
  });
};

module.exports = {
  convertPostalCodeToLatLon
};