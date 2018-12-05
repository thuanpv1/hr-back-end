'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const CustomerEmployee = require("customer-employee.server.model.js");
const BusinessLine = require('business-line.server.model.js');

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	// Customer model fields   
	// ...
	CustomerName: {
		type: String,
		required: true
	},
	CustomerEmployeeID: [{
		type: Schema.Types.ObjectId,
		ref: 'CustomerEmployee'
	}],
	BusinessLineID: [{
		type: Schema.Types.ObjectId,
		ref: "BusinessLine"
	}]
});

module.exports = mongoose.model('Customer', CustomerSchema);