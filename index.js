const inquirer = require('inquirer');
const fs = require('fs');

function writeToFile({title, description, tableOfContents, installation, usage, license, contributing, test, questions}) {
    `# ${title}

    ## Description
    ${description}
    
    ## Table of Contents
    ${tableOfContents}
    
    ## Installtion
    ${installation}
    
    ## Usage
    ${usage}
    
    ## License
    ${license}
    
    ## Contributing
    ${contributing}

    ## Tests
    ${test}
    
    ## Questions
    ${questions}
    `;
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please provide a brief description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide a table of content for your project',
            name: 'tableOfContents',
        },
        {
            type: 'installation',
            message: 'Please provide a description on the installation process for this project.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please describe the usage of this project',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Please choose a license for project.',
            name: 'license',
            choices: ["MIT", "LSC", "Apache License 2.0"],
        },
        {
            type: 'input',
            message: 'Please describe any contributions towards the production of this project',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'please describe the testing process for this project.',
            name: 'testing',
        },
        {
            type: 'input',
            message: 'Pleasee describe how users are able to submit any questions regarding the project.',
            name: 'questions',
        },
    ])