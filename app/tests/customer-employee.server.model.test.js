'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	CustomerEmployee = mongoose.model('CustomerEmployee');

/**
 * Globals
 */
var user, customerEmployee;

/**
 * Unit tests
 */
describe('Customer employee Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			customerEmployee = new CustomerEmployee({
				// Add model fields
				// ...
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return customerEmployee.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		CustomerEmployee.remove().exec();
		User.remove().exec();

		done();
	});
});