'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;

let commandSchema = new schema({
    description: {
        type: String,
        required: 'Enter description of command'
    },
    command: {
        type: String,
        required: "Enter the command"
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    technology: {
        type: [{
            type: String,
            enum: ['unix', 'docker', 'kubernetes', 'gauge', 'java', 'shell', 'python', 'javascript', 'git']
        }],
        default: ['unix']
    }
});

module.exports = mongoose.model('commands', commandSchema);