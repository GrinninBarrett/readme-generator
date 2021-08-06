// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Write a short (2-3 sentence) description of your project.",
    "What installation instructions should users know?",
    "Explain how to use this application.",
    "What license would you like to include?",
    "How should others contribute to your project?",
    "How can users test your project?",
    "What is your GitHub username?",
    "What is your email address?"
];

// TODO: Create a function to write README file
fs.writeFile("README.md", data, err => {
    err ? console.log(err) : console.log("File written successfully!");
})

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
