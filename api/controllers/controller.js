'use strict';

var mongoose = require('mongoose'),
commandModel = mongoose.model('commands');

exports.getAllCommands = function(req, res) {
  var query = req.query.technology === undefined ? {} : {technology : req.query.technology};
  console.log(query);
  commandModel.find(query, function(err, command) {
    if (err)
      res.send(err);
    res.json(command);
  });
}; 

// exports.getAllCommandsByTechnology = function(req, res) {
//   commandModel.findOne({technology : req.query.technology}, function(err, command) {
//     if (err)
//       res.send(err);
//     res.json(command);
//   }).exec();
// }; 

exports.createCommand = function(req, res) {
  var newCommand = new commandModel(req.body);
  newCommand.save(function(err, command) {
    if (err)
      res.send(err);
      res.json(command);
  });
};

exports.getCommand = function(req, res) {
  commandModel.findById(req.params.commandId, function(err, command) {
    if (err)
      res.send(err);
    res.json(command);
  });
};

exports.updateCommand = function(req, res) {
  commandModel.findOneAndUpdate({_id: req.params.commandId}, req.body, {new: true}, function(err, command) {
    if (err)
      res.send(err);
    res.json(command);
  });
};

exports.deleteCommand = function(req, res) {
  commandModel.remove({
    _id: req.params.commandId
  }, function(err, command) {
    if (err)
      res.send(err);
    res.json({ message: 'Command successfully deleted' });
  });
};