const configuration = require('./config/config')
const config = configuration.config(); 

const express = require('express'),
  app = express(),
  port = config.app_port,
  db = "mongodb://" + config.db_host + "/" + config.db_name
  mongoose = require('mongoose'),
  model = require('./api/models/model'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect(db, {useNewUrlParser : true, useUnifiedTopology : true}); 

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

console.log('Commands API starting on localhost:'+ port);
console.log('Environment is: ' + configuration.getEnv())
console.log('Database is: ' + db)
module.exports = app;