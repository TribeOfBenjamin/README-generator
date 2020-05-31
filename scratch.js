const inquirer = require("inquirer");
const axios = require("axios");

  inquirer
    .prompt([
        {
            type: "input",
            name: "gitHubID",
            message: "Your GitHub username:"
        }

    ])
    .then(function(answers) {


axios
  .get("https://api.github.com/users/" + answers.gitHubID)
  .then(function(result) {

    console.log(result.location);
  });

    });