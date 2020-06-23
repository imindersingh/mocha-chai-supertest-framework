const env = require('../config/env.json');
const nodeEnv = process.env.NODE_ENV || 'development';

exports.getEnv = function() {
    return nodeEnv;
};

exports.config = function() {
    return env[nodeEnv];
};