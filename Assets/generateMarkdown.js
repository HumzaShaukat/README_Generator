// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)";
  } else if (license == "GPLv3") {
    return "![License: GPLv3](https://img.shields.io/badge/License-GPLv3-green.svg)";
  } else if (license == "GPL") {
    return  "![License: GPL](https://img.shields.io/badge/License-GPL-lighgreen.svg";
  } else if (license == "APACHE-2.0") {
    return  "![License: APACHE](https://img.shields.io/badge/License-APACHE-red.svg)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != ``) {
    return `
  - [License](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != ``) {
    return `
  ## License
    
  This project is licensed under the ${license} license.
    `
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}    ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have questions, [here](github.com/${data.questions1}) is my GitHub profile or you can email me at ${data.questions2}.
  
`;
}

module.exports = generateMarkdown;
