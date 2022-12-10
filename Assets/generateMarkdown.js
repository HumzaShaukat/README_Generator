// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let selectedLicense = license.license;
  if (selectedLicense === "MIT") {
    licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)";
  } else if (selectedLicense === "GPLv3") {
    licenseBadge = "![License: GPLv3](https://img.shields.io/badge/License-GPLv3-green.svg)";
  } else if (selectedLicense === "GPL") {
    licenseBadge = "![License: GPL](https://img.shields.io/badge/License-GPL-lighgreen.svg";
  } else if (selectedLicense === "APACHE-2.0") {
    licenseBadge = "![License: APACHE](https://img.shields.io/badge/License-APACHE-red.svg)";
  } else {
    return;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have questions, [here](github.com/${data.questions1}) is my GitHub profile or you can email me at ${data.questions2}.
  
`;
}

module.exports = generateMarkdown;
