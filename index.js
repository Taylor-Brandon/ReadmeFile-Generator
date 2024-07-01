const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const generateBadge = require('./utils/generateMarkdown');

function writeToFile(data) {
    const licenseSection = generateMarkdown(data);
    const badgeSection = generateBadge(data)
    

    return `# ${data.title}

${badgeSection}


## Description
${data.description}

## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributions](#Contributions)
[Tests](#Tests)
[Questions](#Questions)


## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contributions
${data.contributions}

## Tests
${data.testing}

## Questions
${data.questions}
Github: [!${data.github}](https://github.com/${data.github})
Email: !${data.email}](mailto:${data.email})
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
            message: 'Please provide a description of the installation process for this project.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please describe the usage of this project.',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Please choose a license for the project.',
            name: 'license',
            choices: ["MIT", "ISC", "Apache 2.0", "None"],
        },
        {
            type: 'input',
            message: 'Please describe any contributions towards the production of this project.',
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
        {
            type: 'input',
            message: 'Please provide your github username.',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Please enter your email.',
            name: 'email'
        },
    ])
    .then((answers) => {
        const readmeContent = writeToFile(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log("Success!")
        );
    });
