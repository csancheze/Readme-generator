//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const generateLicense = require('./utils/generateLicense.js')

// Array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        message: 'What is your developer name?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'year',
        message: 'What is the year in which your project was finished?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'BSD', 'Apache', ""],
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a Description for your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the Installation Instructions for your project:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the Usage Information for your project:',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Enter the contribution guidelines for your project:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the tests instructions for your project:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub URL',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address.',
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'Enter a Name for your Readme.',
        default: "Readme"
      }
    ]);
  };
// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(`${fileName}.md`, generateMarkdown(data));
  //Function to write license file
  if(data.license) {
    fs.writeFileSync(`${data.license}.txt`, generateLicense(data))
    }
  }

// Function to initialize app
function init() {
    questions()
    .then((data) => {writeToFile(data.fileName,data)}).then(()=> console.log("Done!")).catch((err) => console.error(err))
}

// Function call to initialize app
init();
