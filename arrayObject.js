const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]; // array of numbers
const arr2 = ["s1", "s2", "s3", "s4"]; //array of strings
const arr3 = [true, false, true, true, false]; //array of boolean data

const resultModels = [
  {
    name: "Ashutosh Mishra 1",
    branch: "ECE",
    rollno: "2019041035",
    session: "2019-2023",
    "college name": "MMMUT,GKP",
    age: 10,
  },
  {
    name: "Ashutosh Mishra 2",
    branch: "ECE",
    rollno: "2019041035",
    session: "2019-2023",
    "college name": "MMMUT,GKP",
    age: 10,
  },
  {
    name: "Ashutosh Mishra 3",
    branch: "ECE",
    rollno: "2019041035",
    session: "2019-2023",
    "college name": "MMMUT,GKP",
    age: 10,
  },
  {
    name: "Ashutosh Mishra 4",
    branch: "ECE",
    rollno: "2019041035",
    session: "2019-2023",
    "college name": "MMMUT,GKP",
    age: 10,
  },
  {
    name: "Ashutosh Mishra 5",
    branch: "ECE",
    rollno: "2019041035",
    session: "2019-2023",
    "college name": "MMMUT,GKP",
    age: 10,
  },
  {
    name: "Ashutosh Mishra 6",
    branch: "ECE",
    rollno: "2019041035",
    session: "2019-2023",
    "college name": "MMMUT,GKP",
    age: 10,
  },
  {
    name: "Ashutosh Mishra 7",
    branch: "ECE",
    rollno: "2019041035",
    session: "2019-2023",
    "college name": "MMMUT,GKP",
    age: 10,
  },
  {
    name: "Ashutosh Mishra 7",
    branch: "ECE",
    rollno: "2019041035",
    session: "2019-2023",
    "college name": "MMMUT,GKP",
    age: 10,
  },
];
// array is a datatype used to store multiple data of any datatype ie String,number,boolean etc
// array of an object is an array which holds objects as its values

// using for loop
// updating object value

// update roll number of Ashutosh Mishra 3
// to 1000

for (let a of resultModels) {
  if (a.name === "Ashutosh Mishra 5") {
    a["college name"] = "IIT Bombay";
  }
}

console.log(resultModels);
