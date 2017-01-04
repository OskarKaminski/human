var express = require('express');
var history = require('connect-history-api-fallback');
var app = express();

app.use(history());
app.use(express.static(__dirname));
var port = process.env.PORT || 8080;
app.listen(port);