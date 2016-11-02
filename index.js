/**** Index.Js
 * for Node Node server
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');




app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));

app.use(bodyParser.json());
app.use(logger('dev'));
app.set('app', __dirname + '/app');



app.get('/', function (request, response) {
    response.render('index');
});





app.listen(app.get('port'), function () {
    console.log('Node app is running on', app.get('port'));
});