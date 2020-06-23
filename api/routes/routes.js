'use strict';
module.exports = function(app) {
  var commandsController = require('../controllers/controller');

  app.route('/commands')
    .get(commandsController.getAllCommands)
    // .get(commandsController.getAllCommandsByTechnology)
    .post(commandsController.createCommand);

  app.route('/command/:commandId')
    .get(commandsController.getCommand)
    .put(commandsController.updateCommand)
    .delete(commandsController.deleteCommand);
};
