// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
function inquire() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a short (2-3 sentence) description of your project."
        },
        {
            type: "input",
            name: "installation",
            message: "What installation instructions should users know?"
        },
        {
            type: "input",
            name: "uses",
            message: "Explain how to use this application."
        },
        {
            type: "input",
            name: "contributions",
            message: "Explain how others can contribute to your project."
        },
        {
            type: "input",
            name: "tests",
            message: "Explain how to test your project."
        },
        {
            type: "list",
            name: "license",
            message: "What license would you like to include?",
            choices: [
                "Apache License 2.0",
                "MIT",
                "GPLv3",
                "GPLv2",
                "BSD 3",
                "LGPLv3",
                "No License - All Rights Reserved"
            ]
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        }
    ])
    .then((data) => {
        const license = data.license;

        const fileName = `./readme-files/README.md`;
        let fileToWrite = generateMarkdown(data);
        writeREADME(fileName, fileToWrite);
    })
}


// const questions = [
//     "What is the title of your project?",
//     "Write a short (2-3 sentence) description of your project.",
//     "What installation instructions should users know?",
//     "Explain how to use this application.",
//     "What license would you like to include?",
//     "How should others contribute to your project?",
//     "How can users test your project?",
//     "What is your GitHub username?",
//     "What is your email address?"
// ];

// TODO: Create a function to write README file
function writeREADME(fileName, fileToWrite) {
    fs.writeFile(fileName, fileToWrite, err => {
        err ? console.log(err) : console.log("File written successfully!");
    })
}


// TODO: Create a function to initialize app
function init() {
    inquire();
}

// Function call to initialize app
init();
