var idToTimerMap = {};
var setUpTexts = require('./setUpTexts');
var randomstring = require("randomstring");

module.exports = {
  future: function (numbers, customMessage, minutes, res) {
    var id;
    var timeout = setTimeout(function(){
      setUpTexts(numbers, customMessage);
    }, minutes * 60 * 1000);


    do {
      id = randomstring.generate(10);
    } while(id === undefined);

    idToTimerMap[id] = timeout;
    res.set("dataid", id);
  },

  cancel: function (id, res){
    if(idToTimerMap && idToTimerMap[id]){
      clearTimeout(idToTimerMap[id]);
      res.send('true');
    }
    res.send('false');
  }

};
