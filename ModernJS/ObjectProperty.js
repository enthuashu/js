// const createObject = (name, number) => {
//   const newobject = {
//     username: name,
//     userphonenumber: number,
//   };
//   return newobject;
// };

// const formofAshu = createObject("Rahul", 8978758);
// console.log(formofAshu);

let name = "rahul";
let phone = 98564657894;
let address = "Taramandal";
const normalobject = {
  name, // this is same as name:name
  phone, // this is same as phone:phone
  address,
};
console.log(normalobject);

// in modern javascript, ES6, if in an object, the names of key and its value is same,
// then we need not to mention both
