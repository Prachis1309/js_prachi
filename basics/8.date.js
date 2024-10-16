// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());  // more readable
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)  //khud define kro date  and month by deafult start from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") // yymmdd format...in this format month start from 1
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // mini sec se second me convert

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // only month print
console.log(newDate.getDay());

console.log(`${newDate.getDay()}and the time` )

// local string with more defined result
newDate.toLocaleString('default', {
    weekday: "long",
    
})
