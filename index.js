const inquirer = require("inquirer");
const fs = require("fs");


const generateHTML = () =>
`<!DOCTYPE html>
<html>

<head>
    <title>My Team Profiles</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/css/uikit.min.css" />
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="width=device-height">
</head>

<body>
    <main id="main">

        <h1 id="h1" class="uk-heading-line custom-heading-class"><span>My Team</span></h1>

        <ul class="flex-container">

        </ul>

        <footer>This application is &copy; Michael Folger | 2021</footer>
    </main>
</body>

</html>`;

const createCard = (answers) =>

`<li>
    <div class="uk-card uk-card-hover custom-card-class">
        <div class="uk-card-header">
        <h3 class="uk-card-title">${answers.name}<br>${answers.title}</h3>
    </div>

    <div class="uk-card-body">
        ID: ${answers.id}; <br>
        Email: ${answers.email}; <br>
        GitHub: ${answers.github}; <br>
    </div>
</div>
</li>`;

const promptUser = () => {
return inquirer
        .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your job title / position?',
            name: 'title',
        },
        {
            type: 'number',
            message: 'What is your ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your Email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'github',
        },
    ])
    .then((response) => {
        console.log(response)
        response.confirm === response.password
            ? console.log('Your html file has been created!')
            : console.log('What?!?! You must have messed up, dude!')
            //create something to hold value then call generateHTML function
            
    })
}

function init() {
        promptUser()
            .then(() => fs.writeFile('index.html', generateHTML()))
            .then((answers) => fs.appendFile('index.html',createCard(answers)))
            .then(() => console.log('Successfully created index.html'))
            .catch((err) => console.error(err));
    };
    
    // Function call to initialize app
    init();


