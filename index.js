// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type:'input',
        message:'What is the title of your project?',
        name: 'title',
    },
    {
        type:'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'List your table of contents for this project',
        name: 'table of contents',
    },
    {
        type: 'input',
        message: 'Describe the installation of this project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe the usage of this project',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'What license are you using?',
        name: 'license',
        choices: ['MIT', 'none'],
    },
    {
        type: 'checkbox',
        message: 'Are there any contributers to this project?',
        name: 'contributors',
        choices: ['yes', 'No'],
    },
    {
        type: 'input',
        message: 'Describe the testing for this project',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Please list any questions.',
        name: 'questions',
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();