// object contains the license names as keys and their links and badges as a nested object properties
const licenseList = {
  'Apache-2.0': {
    link: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)'
  },
  'BSD-3-Clause': {
    link: 'https://opensource.org/licenses/BSD-3-Clause',
    badge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  },
  'BSD-2-Clause': {
    link: 'https://opensource.org/licenses/BSD-2-Clause',
    badge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  },
  'GPL-2.0': {
    link: 'https://opensource.org/licenses/GPL-2.0',
    badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://opensource.org/licenses/GPL-2.0)'
  },
  'GPL-3.0': {
    link: 'https://opensource.org/licenses/GPL-3.0',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  },
  'LGPL-3.0': {
    link: 'https://opensource.org/licenses/LGPL-3.0',
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://opensource.org/licenses/LGPL-3.0)'
  },
  'MIT': {
    link: 'https://opensource.org/licenses/MIT',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  },
  'MPL-2.0': {
    link: 'https://opensource.org/licenses/MPL-2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  },
  'None': { link: '', badge: '' },
}

// Returns the license's badge url. If there is no license, return an empty string
function renderLicenseBadge(license) {
  return licenseList[license].badge
}

// Returns the license's link url. If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenseList[license].link
}

// Renders the License section. If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseLink(license)}
  `
}

// Renders the Table of Contents sections.
function renderTableOfContents() {
  return `
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  `
}

// Renders the Description Section.
function renderDescriptionSection(description, license) {
  return `
  ## Description
  ${renderLicenseBadge(license)}

  ${description}
  `
}

// Renders the title.
function renderTitleSection(title) {
  return `# ${title}`
}
// Renders the Installation Section
function renderInstallationSection(install) {
  return `
  ## Installation

  ${install}
  `
}

// Renders the Usage Section
function renderUsageSection(usage) {
  return `
  ## Usage

  ${usage}
  `
}

// Renders the Contributing Section
function renderContributingSection(contribute) {
return `
## Contributing

${contribute}
`
}

// Renders the Tests Section
function renderTestsSection(tests) {
return `
## Tests

${tests}
`
}

// Renders the Questions Section
function renderQuestionsSection(githubProfile, email) {
  return `
  ## Questions

  For any additional questions please reach out to me at:\n
  [My Github Profile](https://github.com/${githubProfile})\n
  [Email](mailto:${email})
  `
}

// Takes the response object and renders the data from it into a string and returns that string
function generateMarkdown(data) {

  // destructured variables from data object
  const {
    title,
    description,
    install,
    usage,
    license,
    contribute,
    tests,
    githubProfile,
    email,
  } = data;

  // returns a string that will be passed into a markdown file
  return `
  ${renderTitleSection(title)}
  
  ${renderDescriptionSection(description, license)}

  ${renderTableOfContents()}
  
  ${renderInstallationSection(install)}
  
  ${renderUsageSection(usage)}
    
  ${renderLicenseSection(license)}

  ${renderContributingSection(contribute)}
  
  ${renderTestsSection(tests)}

  ${renderQuestionsSection(githubProfile, email)}
`;
}

// export the generated string
module.exports = generateMarkdown;
