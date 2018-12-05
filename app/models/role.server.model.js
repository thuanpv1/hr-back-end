'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const JobRank = require("job-rank.server.model.js");
/**
 * Role Schema
 */
var RoleSchema = new Schema({
	// Role model fields   
	// ...
	RoleName: {
		type: String,
		required: true
	},
	JobRankID: [{
		type: Schema.Types.ObjectId,
		ref: "JobRank"
	}]
});

module.exports = mongoose.model('Role', RoleSchema);