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
    message: 'Please enter a description of your project.',
    name: 'description',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { };

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions) // prompt the user for answers
    .then((response) => // pass answers into generate markdown
      console.log(`${response.title}\n${response.description}`),
    ); // use generated `markdownText` to `writeToFile('output.md', markdownText
};

// Function call to initialize app
init();
