//*_________________________ This Function Generates the HTML Webpage _______________________________*//

//*_______________________________ unspaced data output Function ____________________________________*//
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

//*_______________________________ multiline data output Function ___________________________________*//
//*_____________________________________ receives user input ________________________________________*//

const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };
  
  module.exports = generatePage;

//*_____________________________ Traditional JS printProfile Function Style _________________________*//

// function printProfile () {const printProfileData= (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  

//   printProfileData(profileDataArgs);
// }

// //*____________________________ ES6 Arrow printProfile Function Style ____________________________*//
// const printProfileData = profileDataArr => {
    //*______________________________________ Means This... _________________________________________*//

    // for (let i = 0; i < profileDataArr.length; i += 1) {
    //   console.log(profileDataArr[i]);
    // }
  
    // console.log('================');
  
    //*______________________________ Is the same as this which is BEST... ___________________________*//
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)

//       profileDataArr.forEach(profileItem => console.log(profileItem));
    // });
//   };

