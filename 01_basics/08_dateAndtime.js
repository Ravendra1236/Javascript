// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);       //Object

let myCreatedDate = new Date(2023 , 0 ,23) //  23 Jan 2023
let myCreatedDate1 = new Date(2023 , 0 ,23 , 5 ,3)  

let myCreatedDate2 = new Date("01-12-2023")  

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());

//Time Stamp : Usualyy used for quizes poles hotel apps

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());      // We can easily compare time

console.log(Math.round(Date.now()/1000));   //Covesion into seconds

let newDate = new Date();
console.log(newDate.getMonth() + 1);

// Customized Date
newDate.toLocaleString('default' , {
    weekday : "long"
})
console.log(newDate);