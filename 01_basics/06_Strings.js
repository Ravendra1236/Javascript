//  Modified Types of concatenating

const  name = "Ravendra Singh"

const contactNumber = "9521776812"

// const fullname = (name + secondName + " Rv")
// console.log(fullname);
// console.log(name[0]);

//  Mordern Ways For Concatenation : Important

// console.log(`Good Evening , My name is ${name} and this is my phone number : ${contactNumber} `);
// console.log(`Hello My Name is ${name} and my contact number is: ${contactNumber}`);


// Another Name of Declaring String

const school = new String ('Army School')   // new -object   String -constructor
//  for more methods use prototype

console.log(school[0]);
console.log(school.length);
console.log(school.toUpperCase());
console.log(school.charAt(2));
console.log(school.indexOf('y'));
//  How to slice , Substring
// Use prototype

const newString = school.substring(0,5);  // Last value is not declared
console.log(newString);

const newString1 = "      Hello      "

// we want to remove extra spaces (Starting Space and ending space)
console.log(newString1);
console.log(newString1.trim());

// to replace something

const wish = "Good Morning Buddy"
console.log(wish.replace('Buddy' , 'Sir'));

console.log(wish.includes('Morning'));
// Use all String Functions

console.log(wish.split(' ')); // Split into elements inside Array

// Learn about slice in detail

console.log(wish.slice(5));
console.log(wish.slice(1,3));
console.log(wish.length);
console.log(wish.slice(-18 , 5));   // Take Indexing from last

//  Home Work Create program for all prototypes of strings

