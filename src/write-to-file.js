const fs = require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');


// Create a function to write an HTML file
function writeToFile(html) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/team-members.html', html, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:'File Created'
            });
        })
    }) 
    // fs.writeFile('./dist/team-members.html', html, err => {
    //     if(err) {
    //         console.log(err);
    //         throw err;
    //     }

    //     console.log('File Created');
    // })     
}

module.exports = writeToFile;