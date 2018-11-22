const express = require('express');
const config = require('../config/config.json');
const router = express.Router();
const userService = require('../service/employee.service');

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeesByID);
router.post('/employees/add', addEmployee);
router.post('/employees/update/:id', updateEmployeeByID);
router.get('/employees/delete/:id', deleteEmployeeByID);

function getEmployees(req, res){
    userService.getEmployees(req.body.employee)
    .then(employee => employee ? res.json(employee) :  console.log(err))
};

function getEmployeesByID(req, res){
    userService.getEmployees(req.param.id)
    .then(employee => employee ? res.json(employee) :  console.log(err))
};

function addEmployee(req, res){
    userService.addEmployee(req.body, res)
};

function updateEmployeeByID(req, res){
    userService.updateEmployeeByID(req, res)
};

function deleteEmployeeByID(req, res){
    userService.deleteEmployeeByID(req, res)
};
module.exports = router;