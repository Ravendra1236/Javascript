// For

// for (let index = 0; index <=  10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log('5 is best Number.');
//     }
//     console.log(element);   
// }


for(let i = 1 ; i <=  10 ; i++){
    // console.log(`Outer Loop value is: ${i}`);
    for(let j = 1 ; j <= 10 ; j++){
        // console.log(`Inner Loop is : ${j} with outer loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["Flash" , "Batman" , "Superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break and continue

for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value is: ${i}`);
    
}
for (let i = 0; i <= 20; i++) {
    if(i==5){
        // console.log(`Detected 5`);
        continue;
    }
    console.log(`Value is: ${i}`);
    
}