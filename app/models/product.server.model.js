'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const Project = require("project.server.model.js");
/**
 * Product Schema
 */
var ProductSchema = new Schema({
	// Product model fields   
	// ...
	ProductName: {
		type: String,
		required: true
	},
	ProjectID: [{
		type:Schema.Types.ObjectId,
		ref: "Project"
	}],
	ProductOwner: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Product', ProductSchema);