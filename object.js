const tutorialcopy10rs = {
  name: "Ashutosh Mishra",
  branch: "ECE",
  rollno: "2019041035",
  session: "2019-2023",
  "college name": "MMMUT,GKP",
  age: 10,
};

// console.log(tutorialcopy10rs["name"]);
// console.log(tutorialcopy10rs["branch"]);
// console.log(tutorialcopy10rs["rollno"]);
// console.log(tutorialcopy10rs["session"]);
// console.log(tutorialcopy10rs["college"]);

// Whenever we want to store data which is in the form of key value pairs, then
// Object is used
//Keys should never have
//  spaces between them and
//  should not start with any number or special characters
// if it has spaces, then key should be enclosed within parenthesis "" (string form)
// console.log(tutorialcopy10rs);

//accessing values of object  in two ways
// firstway
// console.log(tutorialcopy10rs["name"]);
// console.log(tutorialcopy10rs["branch"]);
// console.log(tutorialcopy10rs["rollno"]);
// console.log(tutorialcopy10rs["session"]);
// console.log(tutorialcopy10rs["college"]);

// console.log(tutorialcopy10rs.name);
// console.log(tutorialcopy10rs.branch);
// console.log(tutorialcopy10rs["college name"]);

// to get all the keys of an object
// const objectkeys = Object.keys(tutorialcopy10rs);
// console.log(objectkeys);

tutorialcopy10rs.rollno = "ec2019041035";
tutorialcopy10rs.name = "Satyam Mishra";
tutorialcopy10rs.branch = "Chemical";
tutorialcopy10rs.session = "2023-2027";

console.log(tutorialcopy10rs);
