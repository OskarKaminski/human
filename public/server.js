var express = require('express');
var history = require('connect-history-api-fallback');
var app = express();

app.use(history());
app.get('*.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('**/bundle.js', function(req, res){
    res.sendFile(__dirname + req.originalUrl);
});
app.get('*', function(req, res){
    res.sendFile(__dirname + '/dist' + req.originalUrl);
});
app.use(express.static(__dirname));
var port = process.env.PORT || 8080;
app.listen(port);