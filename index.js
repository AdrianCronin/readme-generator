// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // inquirer module
const fs = require('fs'); // file system module
const genMark = require('./utils/generateMarkdown');
// look up require 'path'


// TODO: fill out prompts from README
// put the prompt questions in the array and put this inquirer call in init
inquirer
  .prompt(questions)
  .then((response) =>
    console.log(response.input),
  );


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'This is the input',
    name: 'input',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
