//if we want to access people inside modules we should export the const and whatever we manually export will be applied the const xyz in the module file
const people = ["yoshi", "ryu", "chun-li", "mario"];
const ages = [20, 25, 35, 26];
//console.log(people);

//export one module

//module key word represents the current module
//exports is an object that will be exposed as a module
//module.exports = people; //this tells that i want to export something manually from this file

//export multiple module
module.exports = {
  people,
  ages,
};
