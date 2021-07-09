// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // inquirer module
const fs = require('fs'); // file system module
const generateMarkdown = require('./utils/generateMarkdown'); //
// look up require 'path'

// TODO: fill out prompts from README
// TODO: Create an array of questions for user input
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
    type: 'list', // this will need to be a selection from options instead of input
    message: 'What type of license is this project under?', 
    name: 'license',
    choices: [],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./output/${fileName}`, data, (err) =>
    err ? console.error(err) : console.log('writeToFile executed successfully!'))
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions) // prompt the user for answers
    .then((response) => // pass answers into `generateMarkdown.generateMarkdown`
      generateMarkdown(response),
    )
    .then((response) =>
      writeToFile('README.md', response),
    ); // use generated `markdownText` to `writeToFile`
};

// Function call to initialize app
init();
