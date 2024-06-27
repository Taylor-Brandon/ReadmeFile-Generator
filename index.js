function writeToFile({title, description, tableOfContents, installation, usage, license, contributing, test, questions}) {
    `# ${title}

    ## Description
    ${description}
    
    ## Table of Contents
    ${tableOfContents}
    
    ## Installtion
    ${installation}
    
    ## Usage
    ${usage}
    
    ## License
    ${license}
    
    ## Contributing
    ${contributing}

    ## Tests
    ${test}
    
    ## Questions
    ${questions}
    `;
}