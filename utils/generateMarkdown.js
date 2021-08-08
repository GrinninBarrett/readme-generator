// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let formattedName = license.split(' ').join('%20');

  let licenseLink = renderLicenseLink(license);

  let badge = `[![License: ${license}](https://img.shields.io/badge/License-${formattedName}-blue.svg)](${licenseLink})`;

  return badge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let link;

  switch (license) {

    case "Apache License 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;

    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;

    case "GPLv3":
      link = "https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0";
      break;

    case "GPLv2":
      link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;

    case "BSD 3":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    case "LGPLv3":
      link = "https://www.gnu.org/licenses/lgpl-3.0";
      break;
      
    default:
      link = "https://en.wikipedia.org/wiki/All_rights_reserved";
  
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let licenseBadge = renderLicenseBadge(license);
  // let licenseSection = renderLicenseSection(license);
  let fileToWrite = `
# ${data.title}

${licenseBadge}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.uses}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, contact me at any time via email: ${data.email}\n
Check out my [GitHub profile](https://github.com/${data.gitHub})!
`;
return fileToWrite;
}

module.exports = generateMarkdown;
