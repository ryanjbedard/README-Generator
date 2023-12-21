// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {return inquirer.prompt ([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project in detail.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter the installation instructions.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter the usage information.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter your collaborators.',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'Enter the contribution guidelines.',
      name: 'guidelines',
    },
    {
      type: 'input',
      message: 'Enter test instructions.',
      name: 'test',
    },
    {
      type: 'list',
      message: 'Choose a license.',
      name: 'license',
      choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0","Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public Licnse v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
      type: 'input',
      message: 'Enter your e-mail address.',
      name: 'email',
    },
  ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile('README.md',generateMarkdown(), (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
  .then((responses)=>{
    writeToFile("README.md", generateMarkdown(title, description, installation, usage, contributors, guidelines, test, license, email));
  })
}

// Function call to initialize app
init();
