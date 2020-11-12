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
