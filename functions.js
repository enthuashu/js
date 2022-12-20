// Whenever we see a set of codes getting repeated or needed
// continuously then we define a function, which contains
//  that repeated codes inside it. Now whenever we want that codes
// we call that function and get those codes

// without functions

// // car 1
// console.log("Engine work of car 1");
// console.log("Mechanical work of car 1");
// console.log("Interior work of car 1");
// console.log("security work of car 1");
// console.log("car 1 is manufactured");

// // car 2
// console.log("Engine work of car 2");
// console.log("Mechanical work of car 2");
// console.log("Interior work of car 2");
// console.log("security work of car 2");
// console.log("car 2 is manufactured");

// // car 3
// console.log("Engine work of car 3");
// console.log("Mechanical work of car 3");
// console.log("Interior work of car 3");
// console.log("security work of car 3");
// console.log("car 3 is manufactured");

// with functions  (fat arrow)
const enginefunction = () => {
  console.log("Engine work is done");
};

const mechanicalfunction = () => {
  console.log("Mechanical work is done");
};

const interiorFunction = () => {
  console.log("Interior work is done");
};

const securityfunction = () => {
  console.log("Security work is done");
};

// car 1
enginefunction();
mechanicalfunction();
interiorFunction();
securityfunction();
console.log("Car 1 manufacutred");

// car 2
enginefunction();
mechanicalfunction();
interiorFunction();
securityfunction();
console.log("car 2 manufactured");

// car 3
enginefunction();
mechanicalfunction();
interiorFunction();
securityfunction();
console.log("car 3 manufactured");
