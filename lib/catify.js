/*jslint node: true,nomen: true, vars: true */
'use strict';

var Chance = require('chance');

module.exports = function(odds) {

    odds = odds || 50;

    return function(req, res, done) {

        var chance = new Chance();

        if (chance.bool({likelihood: odds}) === true) {
            res.redirect('http://thecatapi.com/api/images/get?format=src&type=gif');
        } else {
            done();
        }
    };
};