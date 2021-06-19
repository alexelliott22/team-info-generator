const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const writeToFile = require('./write-to-file');

function getLastQuality(teamMember) {
    if(teamMember.getRole() == 'Manager') {
        return `<p class="card-text">Office Number: ${teamMember.getOfficeNumber()}</p>`
    } else if(teamMember.getRole() == 'Engineer') {
        return `<p class="card-text">Github: <a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a></p>`
    } else {
        return `<p class="card-text">University: ${teamMember.getSchool()}</p>`
    }
}

function createTeamMemberCard(teamMember) {

    return `
    <div class="col-lg-3 col-md-6">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${teamMember.name}</h3>
                <h5 class="card-subtitle mb-2">${teamMember.getRole()}</h5>
                <p class="card-text">ID: ${teamMember.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${teamMember.getEmail()}" target="_blank">${teamMember.getEmail()}</a></p>
                ${getLastQuality(teamMember)}
            </div>
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
        <header class = "header">
            <h1 class = "text-center">My Team</h1>
        </header>
        <section id="my-team">
            <div class="container my-3 py-5 text-center">
                <div class="row">
                    ${getTeamMemberHTML(positions)}
                </div>
            </div>
        </section>
    </body>
    </html>
    `
    
    writeToFile(html);
}

module.exports = generateHTML;