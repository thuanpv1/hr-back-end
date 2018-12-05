'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const Product = require("product.server.model.js");

/**
 * BusinessLine Schema
 */
var BusinessLineSchema = new Schema({
	// BusinessLine model fields   
	// ...
	BusinessName: {
		type: String,
		required: true
	},
	ProductID: [{
		type: Schema.Types.ObjectId,
		ref: "Product"
	}]
});

module.exports = mongoose.model('BusinessLine', BusinessLineSchema);