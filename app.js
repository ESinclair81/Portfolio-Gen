<<<<<<< HEAD
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);






//*_____________________________ Traditional JS printProfile Function Style _________________________*//

// function printProfile () {const printProfileData= (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  

//   printProfileData(profileDataArgs);
// }


//*_____________________________ ES6 Arrow printProfile Function Style ______________________________*//
const printProfileData = profileDataArr => {
    //*_________________________________________ This... ___________________________________________*//
    
    // for (let i = 0; i < profileDataArr.length; i += 1) {
    //   console.log(profileDataArr[i]);
    // }
  
    // console.log('================');
  
    //*______________________________ Is the same as this which is BEST... ___________________________*//
    profileDataArr.forEach((profileItem) => {
      console.log(profileItem)
      
      profileDataArr.forEach(profileItem => console.log(profileItem));
    });
  };
=======
//*____________________________________ Requirements & Imports ______________________________________*//
const fs = require('fs');

const generatePage = require('./src/page-template');

//*____________________________________ Variables and Arguments _____________________________________*//
const profileDataArgs = process.argv.slice(2, process.argv.length);

//*_____________________________ HASHED OUT AND THE LIVE ONE MEAN THE SAME __________________________*//
// const name = profileDataArgs[0];    
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });



>>>>>>> feature/generate-webpage
