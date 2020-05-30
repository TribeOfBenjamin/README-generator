const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: ""
        },
        {
            type: "input",
            name: "description",
            message: ""
        },
        {
            type: "input",
            name: "installation",
            message: ""
        },
        {
            type: "input",
            name: "usage",
            message: ""
        },
        {
            type: "input",
            name: "license",
            message: ""
        },
        {
            type: "input",
            name: "contributing",
            message: ""
        },
        {
            type: "input",
            name: "tests",
            message: ""
        },
        {
            type: "input",
            name: "questions",
            message: ""
        },
    ])
    .then(function(answers) {

        const readMe = 
        `![GitHub followers](https://img.shields.io/github/followers/0?label=Follow&style=social)
        
        # ${answers.title}
        ${answers.description}
        
        ## Table of Contents
        
        - Installation
        - Usage
        - License
        - Contributing
        - Tests
        - Questions
            
        ## Installation
        ${answers.installation}

        ## Usage
        ${answers.usage}

        ## License
        ${answers.license}

        ## Contributing
        ${answers.contributing}

        ## Tests
        ${answers.tests}
        
        ## Questions
        ${answers.questions}`;

        fs.writeFile("README1.md", readMe, function(err) {

            if (err) {
                return console.log(err);
            }

            console.log("README.md successfully generated!")
        })

        return console.log(readMe);
    });