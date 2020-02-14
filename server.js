const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  model = require('./api/models/model'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/db', {useNewUrlParser : true, useUnifiedTopology : true}); 

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) =>{
  model.find(function(err, command) {
    if (err)
      res.send(err);
    res.render("index", { command : command});   
  });
})

const routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('Commands API starting on localhost:'+port);

module.exports = app;