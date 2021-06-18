const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const writeToFile = require('./write-to-file');


const positions = [
    {
        name: 'alex',
        id: '3',
        email: 'a@mail.com',
        officeNum: '5',
        teamMemberAdded: 'Intern'
      },
      {
        name: 'b',
        id: '5',
        email: 'b@mail.com',
        school: 'harding',
        teamMemberAdded: 'Engineer'
      },
      {
        name: 'joe smith',
        id: '78',
        email: 'js@mail.com',
        github: 'jsmith',
        teamMemberAdded: "I don't want to add any more team members"
      }
];


function getLastQuality(teamMember) {
    if(teamMember.getRole() == 'Manager') {
        return `<p class="card-text">Office Number: ${teamMember.getOfficeNumber()}</p>`
    } else if(teamMember.getRole() == 'Engineer') {
        return `<p class="card-text">Github: <a href="https://github.com/${teamMember.getGithub()}">${teamMember.getGithub()}</a></p>`
    } else {
        return `<p class="card-text">University: ${teamMember.getSchool()}</p>`
    }
}

function createTeamMemberCard(teamMember) {

    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${teamMember.name}</h5>
            <h6 class="card-subtitle mb-2">${teamMember.getRole()}</h6>
            <p class="card-text">ID: ${teamMember.getId()}</p>
            <p class="card-text">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></p>
            ${getLastQuality(teamMember)}
        </div>
  </div>
    `
}

function getTeamMemberHTML(positions) {
   let concHTML = '';
    positions.forEach(teamMember => {
        
        if(teamMember.github) {
            let engineer = new Engineer(teamMember.name, teamMember.id, teamMember.email, teamMember.github)

            concHTML += createTeamMemberCard(engineer);
        } else if(teamMember.school) {
            let intern = new Intern(teamMember.name, teamMember.id, teamMember.email, teamMember.school)
  
            concHTML += createTeamMemberCard(intern);
        } else {
            let manager = new Manager(teamMember.name, teamMember.id, teamMember.email, teamMember.officeNum)

             concHTML += createTeamMemberCard(manager);
        }
    });

    return concHTML;
}

function generateHTML(positions) {
    let html =  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class="wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-4">
                ${getTeamMemberHTML(positions)}
              </div>
            </div>
          </div>
        </div>
    </body>
    </html>
    `
    console.log(html);
    writeToFile(html);
}

// console.log(determinePosition(positions));

module.exports = generateHTML;