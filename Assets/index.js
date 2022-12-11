// TODO: Include packages needed for this application
const fs = require("fs");
const inq = require("inquirer");
const generateMarkdown = require("./generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of your project."
    },
    {
        type: "input",
        name: 'install',
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the usage instructions?"
    },
    {
        type: "checkbox", 
        name: "license",
        choices: ["MIT", "GPL-3.0", "GPL", "APACHE-2.0"],
        message: "Pick your License."
    },
    {
        type: "input",
        name: "contributing",
        message: "How can other developers contribute?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests would you like to include?"
    },
    {
        type: "input",
        name: "questions1",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "questions2",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err)=>
    err ? console.error(err) : console.log('File Created Successfully!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
    .then((data)=> {
        writeToFile("./util/README.md", generateMarkdown(data));
    })
}


// Create Title
// Function call to initialize app
init();
