const config = require('./config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString)
.then(console.log("MongoDB database connection established successfully!"));
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../model/user.model'),
    Employee: require('../model/employee.model')
};