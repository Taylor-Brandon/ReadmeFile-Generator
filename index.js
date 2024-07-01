const inquirer = require('inquirer');
const fs = require('fs');

function writeToFile({title, description, tableOfContents, installation, usage, license, contributions, testing, questions}) {
    return `# ${title}

## Description
${description}

## Table of Contents
${tableOfContents}

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributions
${contributions}

## Tests
${testing}

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
            type: 'input',
            message: 'Please provide a description of the installation process for this project.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please describe the usage of this project',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Please choose a license for the project.',
            name: 'license',
            choices: ["MIT", "ISC", "Apache License 2.0"],
        },
        {
            type: 'input',
            message: 'Please describe any contributions towards the production of this project',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Please describe the testing process for this project.',
            name: 'testing',
        },
        {
            type: 'input',
            message: 'Please describe how users are able to submit any questions regarding the project.',
            name: 'questions',
        },
    ])
    .then((answers) => {
        const readmeContent = writeToFile(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log("Success!")
        );
    });
