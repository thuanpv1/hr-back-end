const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    Name: {
        type: String
    },
    Age: {
        type: Number
    },
    Position: {
        type: String
    },
    Skill: {
        type: String
    },
    Team: {
        type: String,
        default: 'OS'
    }
});

module.exports = mongoose.model('Employee', Employee);