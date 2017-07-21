'use strict';
const AWS = require('aws-sdk');
const DarkSky = require('dark-sky')

const encrypted = process.env['darkSky'];
let decrypted;

function getWeather(event, context, callback, decrypted) {

  let forecast = new DarkSky(decrypted);

  forecast
      .latitude(event.latitude)
      .longitude(event.longitude)
      .language('en')
      .get()
      .then(res => {
          callback(null, res);
      })
      .catch(err => {
          console.log(err)
      })

}

exports.handler = (event, context, callback) => {

    if (decrypted) {
        getWeather(event, context, callback, decrypted);
    } else {
        const kms = new AWS.KMS();
        kms.decrypt({ CiphertextBlob: new Buffer(encrypted, 'base64') }, (err, data) => {
            if (err) {
                console.log('Decrypt error:', err);
                return callback(err);
            }
            decrypted = data.Plaintext.toString('ascii');
            getWeather(event, context, callback, decrypted);
        });
    }

};
