const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdownFile = require('./utils/generateMarkdown');


const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'List your table of contents for this project',
    name: 'tableOfContents',
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
    message: 'Are there any contributors to this project?',
    name: 'contributors',
    choices: ['yes', 'no'],
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
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email'
  }
];


function writeToFile(fileName, data) {
    const readmeContent = generateMarkdownFile(data);
    fs.writeFile(fileName, readmeContent, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('README.md file created successfully!');
      }
    });
  }
  
  function generateReadme(data) {
    const readmeContent = `
      # ${data.title}
      
      ## Description
      ${data.description}
      
      ## Table of Contents
      ${data.tableOfContents}
      
      ## Installation
      ${data.installation}
      
      ## Usage
      ${data.usage}
      
      ## License
      ${data.license}
      
      ## Contributors
      ${data.contributors}
      
      ## Testing
      ${data.testing}
      
      ## Questions
      ${data.questions}
    `;
    
    return readmeContent;
  }

function init() {
  inquirer.prompt(questions).then((answers) => {
    const fileName = `${answers.title.toUpperCase().split(' ').join('')}.json`;
    writeToFile(fileName, answers);
  });
}

init();
