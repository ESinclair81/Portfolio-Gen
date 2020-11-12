//*____________________________________ Requirements & Imports ______________________________________*//

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template');

//*____________________________________ Variables and Arguments _____________________________________*//
//* const profileDataArgs = process.argv.slice(2, process.argv.length);

// const pageHTML = generatePage(name, github);


//*___________________________________ -HASHED OUT ALL MEAN THE SAME- ________________________________*//
//* const name = profileDataArgs[0];    
//* const github = profileDataArgs[1];
//* const [name, github] = profileDataArgs;

//   fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

  //*_____________________________________- Does same as above -_______________________________________*//
//*   fs.writeFile('./index.html', generatePage(name, github), err => {
    //*     if (err) throw new Error(err);
      
    //*     console.log('Portfolio complete! Check out index.html to see the output!');
    // *  });
    
