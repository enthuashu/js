// In Build methods are such function/object which are already defined in Javascript

// 1. Date Object which returns current date and time which is as follows.

// Date object returns date in UTC format which is accepted globally
const currdate = new Date();
console.log(currdate); // this returns date in utc format

// to get date in our local timezone then we use toString()

const currtimezoneTime = new Date().toString(); //this returns both date and time
console.log(currtimezoneTime);

const currtimezoneDate = new Date().toDateString();
console.log(currtimezoneDate);

const currtimezonetym = new Date().toTimeString();
console.log(currtimezonetym);

//Math object
