// Function that returns license information
function renderLicense(license,username,year) {
  let badge = "#"
  let licenseText = ""
  let licenseLink = "#"
  switch (license) {
    case "MIT":
      badge = "https://img.shields.io/apm/l/vim-mode?style=plastic"
      licenseText = `Copyright (c) ${year}, ${username} All rights reserved.\nLicensed under the MIT license. `
      licenseLink = "./utils/MIT_license.txt"
    break;

    case "BSD":
      badge = "https://img.shields.io/pypi/l/Django"
      licenseText = `Copyright (c) ${year}, ${username} All rights reserved.\nLicensed under the BSD license. `
      licenseLink = "./utils/BSD_license.txt"
    break;

    case "Apache":
      badge = "https://img.shields.io/aur/license/android-studio"
      licenseText = `Copyright (c) ${year}, ${username} All rights reserved.\nLicensed under the Apache license. `
      licenseLink = "./utils/Apache_license.txt"
    break;

    default:
      console.log("No license entered")
    break;
  }
  const licenseArray = [badge, licenseText, licenseLink]
  return licenseArray
  
}

//Not used suggested code

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


//Function to generate markdown for README
function generateMarkdown(data) {
  let licenseInfo = renderLicense(data.license, data.username, data.year);
  let licenseBadge = licenseInfo[0]
  let licenseSection = licenseInfo[1]
  let licenseURL = licenseInfo[2]

  return `# ${data.title}

  ![${data.license}](${licenseBadge})
  
  ## Description
  
  \n${data.description}\n
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#license)
  - [Tests](#license)
  - [Questions](#license)
  
  ## Installation
  
  \n${data.installation}\n
  
  ## Usage
  
  \n${data.usage}\n
  
  \n![${data.title} webpage working as expected](assets/images/screenshot.png)
  
  ## License
  
  \n${licenseSection}\n
  
  \n[License](${licenseURL})\n
  
  ## How to Contribute
  
  \n${data.contribute}\n
  
  ## Tests
  
  \n${data.tests}\n
  
  ## Questions
  
  If you have any question feel free to check my Github
  \n[Github](${data.github})\n
  or send me and email
  \n[Email](${data.email})\n
`;
}

module.exports = generateMarkdown;
