const config = require('../config/config.json');
const db = require('../config/db');
const Employee = db.Employee;

module.exports = {
    getEmployees,
    getEmployeeByID,
    addEmployee,
    updateEmployeeByID,
    deleteEmployeeByID
};

async function getEmployees(employees) {
    return await Employee.find((employees))
}

async function getEmployeeByID(id){
    return await Employee.findById(id)
}

async function addEmployee(employees, res) {
    const employee = new Employee(employees)
    await employee.save()
        .then(employee => {
            res.status(200).json({'employee': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
}

async function updateEmployeeByID(req, res) {
    await Employee.findById(req.params.id, (err, employee) => {
        if (!employee)
            return next(new Error('Could not load document'));
        else {
            employee.Name = req.body.Name;
            employee.Age = req.body.Age;
            employee.Position = req.body.Position;
            employee.Skill = req.body.Skill;
            employee.Team = req.body.Team;

            employee.save().then(employee => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
}

async function deleteEmployeeByID(req, res) {
    await  Employee.findByIdAndRemove({_id: req.params.id}, (err, employee) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
}