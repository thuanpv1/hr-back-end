'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const Allocation = require('allocation.server.model.js');
/**
 * CustomerEmployee Schema
 */
var CustomerEmployeeSchema = new Schema({
	// CustomerEmployee model fields   
	// ...
	CustomerEmail: {
		type: String,
		required: true
	},
	DateofJoin: {
		type: Date,
		required: true
	},
	DateofLeave: {
		type: Date
	},
	AllocationID: {
		type: Schema.Types.ObjectId,
		ref: "Allocation"
	}
});

module.exports = mongoose.model('CustomerEmployee', CustomerEmployeeSchema);