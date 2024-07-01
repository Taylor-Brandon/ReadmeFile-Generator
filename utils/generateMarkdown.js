// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === "ISC") {
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    } else if (license === "Apache 2.0") {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return 'https://opensource.org/licenses/MIT';
    } else if (license === "ISC") {
        return 'https://opensource.org/licenses/ISC';
    } else if (license === "Apache 2.0") {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "MIT") {
        return 'This project includes a MIT license.';
    } else if (license === "ISC") {
        return 'This project includes an ISC license.';
    } else if (license === "Apache 2.0") {
        return 'This project includes an Apache 2.0 license.';
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const badge = renderLicenseBadge(data.license);
    const link = renderLicenseLink(data.license);
    const section = renderLicenseSection(data.license);

    return `${badge}\n${link}\n${section}`;
}

module.exports = generateMarkdown;
