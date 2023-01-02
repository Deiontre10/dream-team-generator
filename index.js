const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const team = [];

function managerInfo () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter a name for your manager?"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter an id for your manager?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter a email for your manager?"
        },
        {
            type: "input",
            name: "number",
            message: "Please enter the office number for your manager?"
        },
    ]).then(function(response) {
        const manager = new Manager(response.name, response.id, response.email, response.number);
        team.push(manager);
    })
};
managerInfo();