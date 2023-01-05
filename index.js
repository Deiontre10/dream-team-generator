const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeamMembers = require('./src/page-template')

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
        employeeOption();
    })
};

function employeeOption () {
    inquirer.prompt([{
        type: "list",
        name: "name",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "Finish"]
    }      
    ]).then(selection => {
        if (selection.name === "Engineer") {
            engineerInfo();
        }
        if (selection.name === "Intern") {
            internInfo();
        }
        if (selection.name === "Finish") {
            return makeFile();
        }
        
    })
};

function engineerInfo () {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter a name for your engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter an id for your engineer?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter a email for your engineer?"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the Github for your engineer?"
        },
    ]).then(function(response) {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        team.push(engineer);
        employeeOption();
    })
};

function internInfo () {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter a name for your intern?"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter an id for your intern?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter a email for your intern?"
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the school for your intern?"
        },
    ]).then(function(response) {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        team.push(intern);
        employeeOption();
    })
};

function makeFile () {
    fs.writeFile('test.html', generateTeamMembers(team), (err) => {
        if (err) {
            console.log(err);
            return
        }else{
            console.log("Your team page is created")
        }
    })
};

managerInfo();