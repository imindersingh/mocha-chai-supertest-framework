const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Task = require('./api/models/model'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/db', {useNewUrlParser : true, useUnifiedTopology : true}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('Commands API starting on localhost:'+port);

module.exports = app;