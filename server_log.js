var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require('body-parser');
var multer = require('multer');
var path          = require('path');

// process.env.TZ = 'Asia/Jakarta' // here is the magical line



//var time = require('time')(Date);

//var d = new Date();
//d.setTimezone('UTC');


// const mandiri = require('./api-bank/mandiri')
//const testing =require('./api-bank/testing')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 var routes = require('./routes/routes');
 routes(app);


app.get('/', (req, res) => {
    res.send('WELCOME TO PLC BACKEND API SERVICE log!')
  })
  

app.listen(port);
express.timeout = 30000;
console.log('webservice logging data started on port: ' + port);
