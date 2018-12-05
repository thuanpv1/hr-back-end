'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const Skill = require('skill.server.model.js');
const CustomerEmployee = require("customer-employee.server.model.js");
/**
 * FptEmployee Schema
 */
var FptEmployeeSchema = new Schema({
	// FptEmployee model fields   
	// ...
	FptAccount: {
		type: String,
		required: true
	},
	Gender: {
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
	FullName: {
		type: String,
		required: true
	},
	SkillID: [{	
		type: Schema.Types.ObjectId,
		ref: 'Skill'
	}],
	PhoneNumber: {
		type: Number,
		required: true
	},
	CustomerEmployeeID: [{
		type: Schema.Types.ObjectId,
		ref: "CustomerEmployee"
	}]
});

moduel.exports = mongoose.model('FptEmployee', FptEmployeeSchema);