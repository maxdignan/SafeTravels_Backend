// Twilio Credentials
var accountSid = 'AC2f14ab70466eaf8a604a3186aa15367b';
var authToken = '0fb3a7d79d6f00076f0265f716acfcc8';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

module.exports = function(numbers, customMessage) {
  if (numbers && numbers.length){
    numbers.forEach(function(num){
      num = "+1" + num;
      console.log(num);
      try {
        client.sendMessage({
            to: num,
            from: "+16142896070",
            body: customMessage
        }, function(err, message) {
            console.log(err);
        });
      } catch (e) {
        console.log("Error with num" + e);
      } finally {

      }
    });
  }
};
