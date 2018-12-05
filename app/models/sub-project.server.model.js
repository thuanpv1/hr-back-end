'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const Allocation = require('allocation.server.model.js');
const ResourceRequest = require('resource-request.server.model.js');
/**
 * SubProject Schema
 */
var SubProjectSchema = new Schema({
	// SubProject model fields   
	// ...
	SubProjectName: {
		type: String,
		required: true
	},
	Commission: {
		type: String,
		required: true
	},
	ProjectManager: {
		type: String,
		required: true
	},
	AllocationID: [{
		type: Schema.Types.ObjectId,
		ref: "Allocation"
	}],
	ResourceRequest: [{
		type: Schema.Types.ObjectId,
		ref: "ResourceRequest"
	}]
});

module.exports = mongoose.model('SubProject', SubProjectSchema);