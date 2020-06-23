'use strict';

const app = require('../server');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

describe('Commands API Integration Tests', function() {

    var command = {
        description :"List gauge project templates",
        command: "gauge --list-templates",
        technology :"gauge" 
    };

    describe('POST command', function() {
        it('Should successfully post a command with all mandatory fields', function(done) {
            request(app).post('/commands')
            .send(command)
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('GET all commands', function() {
        it('Should get all commands', function(done) {
            request(app).get('/commands')
            .end(function(err, res) { 
              expect(res.statusCode).to.equal(200);
              expect(res.body).to.be.an('array');
              expect(res.body).not.to.be.empty; 
              done();
            }); 
        });
    });
});