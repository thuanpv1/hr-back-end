'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const FptEmployee = require('fpt-employee.server.model.js');
/**
 * Skill Schema
 */
var SkillSchema = new Schema({
	// Skill model fields   
	// ...
	SkillName: {
		type: String,
		required: true
	}, 
	FptEmployeeID: [{
		type: Schema.Types.ObjectId,
		ref: "FptEmployee",
	}]
});

module.exports = mongoose.model('Skill', SkillSchema);
