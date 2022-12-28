// Object Destructuring

// const myobject = {
//   name: "Ashutosh",
//   age: 15,
//   school: "NNA",
//   email: "enthuashu@gmail.com",
// };

// to get values of object in normal JS, we do:
// let name = myobject.name;
// let age = myobject.age;
// let school = myobject.school;
// let email = myobject.email;
// console.log(name);
// console.log(age);
// console.log(school);
// console.log(email);

const myobject = {
  name: "Ashutosh",
  age: 15,
  school: "NNA",
  email: "enthuashu@gmail.com",
};

let { name, age, school, email } = myobject; // this is same as let name = myobject.name
console.log(name);
console.log(age);
console.log(school);
console.log(email);
