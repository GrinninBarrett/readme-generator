// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badge;
  let formattedName = license.split(" ").join("%20");
  let licenseLink = renderLicenseLink(license);

  if (licenseLink !== "") {
    badge = `[![License: ${license}](https://img.shields.io/badge/License-${formattedName}-blue.svg)](${licenseLink})`;
  } else {
    let nameForLink = "All Rights Reserved".split(" ").join("%20");
    badge = `![License: All Rights Reserved](https://img.shields.io/badge/License-${nameForLink}-tomato.svg)`;
  }

  return badge;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {

  let link;

  // Get link according to the license chosen by the user
  // If there is no license, return an empty string
  switch (license) {

    case "Apache License 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;

    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;

    case "GPLv3":
      link = "https://www.gnu.org/licenses/gpl-3.0";
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
      link = "";
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  let licenseSection;
  let licenseLink = renderLicenseLink(license);
  
  if (license !== "No License - All Rights Reserved") {
    licenseSection = `## License\nThis project is licensed under the [${license}](${licenseLink}) license].`;
  } else {
    licenseSection = `## License\n&copy; 2021 ${name} - All Rights Reserved`;
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let name = data.name;
  let licenseBadge = renderLicenseBadge(license);
  let licenseSection = renderLicenseSection(license, name);
  let fileToWrite = `
# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.uses}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, contact me at any time via email: ${data.email}\n
Check out my [GitHub profile](https://github.com/${data.gitHub})!

${licenseSection}
`;
return fileToWrite;
}

module.exports = generateMarkdown;
