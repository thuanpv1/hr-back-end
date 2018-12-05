'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
const CustomerEmployee = require("customer-employee.server.model.js");
const Product = require("product.server.model.js");
/**
 * Domain Schema
 */
var DomainSchema = new Schema({
	// Domain model fields   
	// ...
	DomainName: {
		type: String,
		required: true
	},
	DomainNameOwner: {
		type: String,
		required: true
	},
	CustomerEmployeeID: [{
		type: Schema.Types.ObjectId,
		ref: "CustomerEmployee",
	}],
	ProductID: [{
		type: Schema.Types.ObjectId,
		ref: "Product"
	}]
});

module.exports = mongoose.model('Domain', DomainSchema);