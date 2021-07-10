// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // inquirer module
const fs = require('fs'); // file system module
const generateMarkdown = require('./utils/generateMarkdown'); //

// array with different license options
const licenses = [
  'Apache-2.0',
  'BSD-3-Clause',
  'BSD-2-Clause',
  'GPL-2.0',
  'GPL-3.0',
  'LGPL-3.0',
  'MIT',
  'MPL-2.0',
  'None',
]

// array with the prompts
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter a description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Provide usage instructions.',
    name: 'usage',
  },
  {
    type: 'list', 
    message: 'What type of license is this project under?',
    name: 'license',
    choices: licenses, 
  },
  {
    type: 'input',
    message: 'Provide contribution guidelines.',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'Provide testing instructions.',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Enter your Github username',
    name: 'githubProfile',
  },
  {
    type: 'input',
    message: 'Enter your email',
    name: 'email',
  },
];

// takes a file name string and the data from `generateMarkdown()` and creates a README.md in the output folder
function writeToFile(fileName, data) {
  fs.writeFile(`./output/${fileName}`, data, (err) =>
    err ? console.error(err) : console.log('writeToFile executed successfully!'))
};

// starts prompting the user for input when index.js is run
function init() {
  inquirer
    .prompt(questions) // pass the questions array into the function and start prompting
    .then((response) =>   // pass answers into `generateMarkdown()`
      generateMarkdown(response)
    )
    .then((response) =>
      // take the data from `generateMarkdown()` and pass it into `writeToFile`, file name generated will be named 'README.md'
      writeToFile('README.md', response)
    );
};

// Function call to initialize app
init();
