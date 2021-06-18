const inquire = require('inquirer');
const emailValidator = require('email-validator');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your manager's name?",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log('Please enter a Name!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's ID?",
        validate: id => {
            if(id) {
                return true;
            } else {
                console.log('Please enter an id!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
        validate: email => {
            if(emailValidator.validate(email)) {
                return true;
            } else {
                console.log(' Please enter a valid email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "What is the team manager's office number?",
        validate: officeNum => {
            if(officeNum) {
                return true;
            } else {
                console.log('Please enter an office number!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'teamMemberAdded',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log('Please enter a Name!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID?",
        validate: id => {
            if(id) {
                return true;
            } else {
                console.log('Please enter an id!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
        validate: email => {
            if(emailValidator.validate(email)) {
                return true;
            } else {
                console.log(' Please enter a valid email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's Github username?",
        validate: github => {
            if(github) {
                return true;
            } else {
                console.log('Please enter a github username!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'teamMemberAdded',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log('Please enter a Name!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID?",
        validate: id => {
            if(id) {
                return true;
            } else {
                console.log('Please enter an id!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
        validate: email => {
            if(emailValidator.validate(email)) {
                return true;
            } else {
                console.log(' Please enter a valid email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does your intern attend?",
        validate: school => {
            if(school) {
                return true;
            } else {
                console.log('Please enter a school!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'teamMemberAdded',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
]

function startMockup() {
    let positions = [];
    
    inquire
    .prompt(managerQuestions)
    .then(data => {
        positions.push(data);
        otherPositions(positions);

    })
}
startMockup();

function otherPositions(positions) {
    
    if(positions[positions.length - 1].teamMemberAdded == 'Engineer' || positions[positions.length - 1].teamMemberAdded == 'Intern') 
    {
        inquire
        .prompt(getQuestionsForPosition(positions[positions.length - 1].teamMemberAdded))
        .then(data => {
            positions.push(data);
            otherPositions(positions);
        })
    } else {
        console.log(positions);
    }
}

function getQuestionsForPosition(position) {
  return (position == 'Engineer'? engineerQuestions : internQuestions);
}