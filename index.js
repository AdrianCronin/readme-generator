// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // inquirer module
const fs = require('fs'); // file system module
const genMark = require('./utils/generateMarkdown');

// TODO: fill out prompts from README
inquirer
  .prompt([
    {
      type: 'input',
      message: 'This is the input',
      name: 'input',
    }
  ])
  .then((response) =>
    console.log(response.input),
  );


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
