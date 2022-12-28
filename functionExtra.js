// function can return any data type or entity

// Create a function, which turns an array of top n odd numbers, where n is input given during function call.

// const handleevenNumbers = (a ,d ,n) => {
//   let arr = [];

//   for (let i = 0; i < 2 * n; i = i + 2) {
//     arr.push(i);
//   }

//   return arr;
// };

// const a = handleevenNumbers(7);
// console.log(a);

// Create a function, which turns an array of an AP sequence, where a is first element, d is common difference,
// and n is total number of elements. ALl a,d,n will be given as arguments during function call

// const creatAp = (a, d, n) => {
//   let arr = [];
//   let counter = 0;
//   for (let i = a; counter < n; i = i + d) {
//     arr.push(i);
//     counter = counter + 1;
//   }
//   return arr;
// };
// // Dry run
// const ap1 = creatAp(2, 5, 9);
// console.log(ap1);
// 2,7,12,17,22,27,32,37,42

// this function returns an object which contains username and phonenumber given during
//function call as argument

// this is a form filling function
const createObject = (name, number) => {
  let newobject = {};
  newobject = {
    username: name,
    userphonenumber: number,
  };
  return newobject;
};

const formofAshu = createObject("Rahul", 8978758);
console.log(formofAshu);

// name,email,phonenumber,address,age
// create a function which returns an object with above values given during function call
