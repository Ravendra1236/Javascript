const myNums = [1,0,2,3,4,5,6,7,8]

// myNums.map( (num) => num+10)
// myNums.map ( (num) => {return num+10}  )


//Chaining

const newNums = myNums
            .map((num) => num*10 )
            .map((num) => num+1)
            .filter((num) => num>=40)

console.log(newNums);