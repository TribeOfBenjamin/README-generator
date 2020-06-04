const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

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

        axios
            .get("https://api.github.com/users/" + answers.gitHubID)
            .then(function(result) {

                const readMe = 
                `![GitHub followers](https://img.shields.io/github/followers/30?label=Follow&style=social) 
\n# ${answers.title}
\n${answers.description}
                
\n## Table of Contents
                
\n- [Installation](#installation)
\n- [Usage](#usage)
\n- [License](#license)
\n- [Author](#author)
\n- [Contributing](#contributing)
\n- [Tests](#tests)
\n- [Questions](#questions)
                    
\n## Installation
\n\`${answers.installation}\`
        
\n## Usage
\n\`${answers.usage}\`
        
\n## License
\nThis project is ${answers.license} licensed.
        
\n## Author
\n- ${answers.author}
\n- ${result.data.email}

\n![GitHub Profile Picture](${result.data.avatar_url})
                
\n## Contributing
\n${answers.contributing}
        
\n## Tests
\n${answers.tests}
                
\n## Questions
\n${answers.questions}`;
        
                fs.writeFile("README1.md", readMe, function(err) {
        
                    if (err) {
                        return console.log(err);
                    }
        
                    console.log("README.md successfully generated!")
                })
        
                return console.log(readMe);


            }).catch(function(error) {
                console.log(error);
            });


    });