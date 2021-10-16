// const xyz = require("./people"); //import file people
//when we run the module files the require looks for the specified directory and run the file

//console.log(xyz); //returns an empty object
// console.log(people); not possible
// console.log(xyz.people);
// console.log(xyz.ages);

const { people } = require("./people"); //to import people but ages will not be defined

const os = require("os");
console.log(os.platform(), os.homedir());
