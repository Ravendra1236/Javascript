//  Arrays 

// Some properties
// 1. Any type of data we can store in single array
// 2. Mutable : Size of array is not fixed
// 3. Shallow Copy : refrence , Deep Copy : copy


// Declaration and initialization

const myArray = [1,2,3,4,5,6,7,8];

const myArry2 = new Array(1,2,3,4);

// console.log(myArray);

// console.log(myArry2);
// **********************************************
// Array Method

// myArray.push(10);
// myArry2.push(5)
// myArry2.push(6)

// console.log(myArray);
// console.log(myArry2);

// myArray.pop(10);

// console.log(myArray);

// ************************************************
// If we want to add something in the first position of array

// myArray.unshift("Shyam");
// console.log(myArray);

// myArray.shift()    // To remove it from first position

// ***************************************************

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(2));

//  To Convert an array into string

// const newArray = myArray.join();
// console.log(newArray);

// *******************************************************
//Slice , Splice


// Slice : 
// 1.Last index is not included
// 2.Changes are not done on the original array (Just a Copy)

// console.log("A " , myArray);

// const myn1 = myArray.slice(1,3)

// console.log(myn1);

// console.log("B " , myArray);


// Splice:
// 1. Last index is also included
// 2. It will manipulate the original array (Refrence)

// console.log("A " , myArray);

// const myn2 = myArray.splice(1,3)    // Remove this part from original array

// console.log("B " . myArray);       // undefined (Lost original array)

// console.log(myn2);                


