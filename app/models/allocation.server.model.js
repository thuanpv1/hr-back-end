'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
/**
 * Allocation Schema
 */
var AllocationSchema = new Schema({
	// Allocation model fields   
	// ...
	DateofStart: {
		type: Date,
		required: true
	},
	DateofFinish: {
		type: Date,
	},
	Effort: {
		type: Number,
		required: true
	},
	ChargeStatus: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Allocation', AllocationSchema);