'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const ResourceRequest = require("resource-request.server.model.js");
const Allocation = require(allocation.server.model.js);
/**
 * JobRank Schema
 */
var JobRankSchema = new Schema({
	// JobRank model fields   
	// ...
	JobRankName: {
		type: String,
		required: true
	},
	ResourceRequestID: [{
		type: Schema.Types.ObjectId,
		ref: "ResourceRequest"
	}],
	AllocationID: [{
		type: Schema.Types.ObjectId,
		ref: "Allocation"
	}]
});

module.exports = mongoose.model('JobRank', JobRankSchema);
