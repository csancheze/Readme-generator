// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  let licenseText = ""
  switch (license) {
    case "MIT":
      badge = "#"
      licenseText = ""
      licenseLink = "./utils/MIT_license.txt"
    break;

    case "BSD":
      badge = "#"
      licenseText = `Copyright (c) ${data.year}, ${data.username} All rights reserved.\nLicensed under the BSD license. `
      licenseLink = "./utils/BSD_license.txt"
    break;


  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
