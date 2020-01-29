'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;

let taskSchema = new schema({
    name: {
        type: String,
        required: 'Enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'in-progress', 'done']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Tasks', taskSchema);