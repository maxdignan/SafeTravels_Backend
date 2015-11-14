var setUpTexts = require('./setUpTexts');

var futureMessages = require('./futureMessages');

//setUpTexts(["6149403632"],'Balh');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('port', process.env.PORT || 8080);

app.get('/setUpText', function(req, res){

  //parse data
  var data = req.query.numbers;
  var mess = req.query.message;
  data = JSON.parse(data);
  mess = JSON.parse(mess);

  //sendMessages
  setUpTexts(data, mess);

  res.json({success: true});
});


app.get('/futureText', function(req, res){
    //parse data
    var data = req.query.numbers;
    var mess = req.query.message;
    var minutes = parseInt(req.query.minutes);
    data = JSON.parse(data);
    mess = JSON.parse(mess);

    //sendMessages
    futureMessages.future(data, mess, minutes, res);
});

app.get('/cancelText', function(req, res){
  var id = req.query.id;
  futureMessages.cancel(id, res);
});

app.get('/', function (req, res) {
  res.send('hi');
});




var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
