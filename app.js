//*____________________________________ Requirements & Imports ______________________________________*//
const fs = require('fs');

const generatePage = require('./src/page-template');

//*____________________________________ Variables and Arguments _____________________________________*//
const profileDataArgs = process.argv.slice(2, process.argv.length);

//*_____________________________ HASHED OUT AND THE LIVE ONE MEAN THE SAME __________________________*//
// const name = profileDataArgs[0];    
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;





