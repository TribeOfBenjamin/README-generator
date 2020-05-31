const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

//function gitHubEmail() {

//    axios
//    .get("https://api.github.com/users/" + answers.gitHubID)
//    .then(function(result) {

//    console.log(result);
//});
//  }

//gitHubEmail();

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "The title of your project:"
        },
        {
            type: "input",
            name: "description",
            message: "A description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "The steps required to install your project:"
        },
        {
            type: "input",
            name: "usage",
            message: "Instructions and examples on how to use the project:"
        },
        {
            type: "input",
            name: "license",
            message: "What license you are using:"
        },
        {
            type: "input",
            name: "author",
            message: "Your name:"
        },
        {
            type: "input",
            name: "gitHubID",
            message: "Your GitHub username:"
        },
        {
            type: "input",
            name: "contributing",
            message: "What others should know to contribute to the project:"
        },
        {
            type: "input",
            name: "tests",
            message: "Tests for your project:"
        },
        {
            type: "input",
            name: "questions",
            message: "Answers to common questions others might have:"
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
        \`${answers.installation}\`

        ## Usage
        \`${answers.usage}\`

        ## License
        This project is ${answers.license} licensed.

        ## Author
        ${answers.author}
        - ${answers.gitHub}
        GitHub Profile Picture~!~
        
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