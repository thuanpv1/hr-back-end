'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const Skill = require('skill.server.model.js');

/**
 * ResourceRequest Schema
 */
var ResourceRequestSchema = new Schema({
	// ResourceRequest model fields   
	// ...
	InitialAmount: {
		type: Number,
		required: true
	},
	RemainAmount: {
		type: Number,
		required: true
	},
	CreateDate: {
		type: Date,
		required: true
	},
	PlanStart: {
		type: Date
	},
	Description: {
		type: String
	},
	RequestStatus: {
		type: String
	},
	SkillID: [{
		type: Schema.Types.ObjectId,
		ref: "Skill"
	}]
});

module.exports = mongoose.model('ResourceRequest', ResourceRequestSchema);
