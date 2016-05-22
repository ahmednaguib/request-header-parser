'use strict';

var path = process.cwd();
var apiController = require('../controllers/apiController');

module.exports = function (app) {

	app.route('/')
	.get(apiController.getRequestData);
};
