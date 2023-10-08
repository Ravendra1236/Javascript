// console.log("R");
// console.log("A");
// console.log("V");
// console.log("E");
// console.log("N");
// console.log("D");
// console.log("R");
// console.log("A");

// function myName(){
//     console.log("R");
//     console.log("A");
//     console.log("V");
//     console.log("E");
//     console.log("N");
//     console.log("D");
//     console.log("R");
//     console.log("A");
// }

// myName();

// function addTwoNUmbers(number1 , number2){          // Parameters

//     console.log(number1 + number2);
// }

// addTwoNUmbers(2,6);                                 // Arguments
// addTwoNUmbers(2 , "3");
// addTwoNUmbers(2 , null)              We Havent used if-else to check whether they are number or not



function addTwoNUmbers(number1 , number2){          // Parameters

    // let result = number1 + number2;
    // return result;
    return number1+number2;
}

// const result = addTwoNUmbers(2,4);
// console.log("Result: " ,result);

function loginUserMessage(username ){       // username = "RV"  default value
    if(username === undefined){       //if(!username)
        console.log("Please Enter a username.");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ravendra"));
// console.log(loginUserMessage());   // If we are not giving any value

//**************************For e-commerce websites (Payments)*/

function calculateCartPrice(...num1){           // Rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500));       // Arrays

function calculateCartPrice(val1 , val2, ...num1){           // Rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500,2000,3000));   // val1 = 200 ; val2 = 400 ; ...num1 = [500,2000,3000]

//**************************** */
// Passing object In Function

const obj1 = {
    userName : 'Ravendra',
    price : "2000"
}

function handleObject(anyobject){
    console.log(`Uaername is : ${anyobject.userName} and total bill is ${anyobject.price}`);
}

handleObject(obj1);

// *****************************************//

// handleobject1({
//     username : "Sam",
//     price : 2000
// })

//******************************************* */

const array = [1,2,3,4,5,6,7,8]

function getValue(getArray){
    return getArray[2];
}

getValue(array);
// console.log(getValue(array));
// console.log(getValue([200,200,1000,4000]));