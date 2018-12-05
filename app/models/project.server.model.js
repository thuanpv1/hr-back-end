'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const SubProject = require('sub-project.server.model.js');
const Product = require('product.server.model.js');

/**
 * Project Schema
 */
var ProjectSchema = new Schema({
	// Project model fields   
	// ...
	ProjectName: {
		type: String,
		required: true
	},
	ProductID: [{
		type: Schema.Types.ObjectId,
		ref: "Product"
	}],
	SubProjectID: [{
		type: Schema.Types.ObjectId,
		ref: "SubProject"
	}]
});

module.exports = mongoose.model('Project', ProjectSchema);