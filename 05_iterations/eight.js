// reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

// console.log(myTotal);

const myTotal = myNums.reduce((acc, curr) => acc+curr , 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemname: "js Course",
        price : 299
    },
    {
        itemname: "Python course",
        price : 1800
    },
    {
        itemname: "data science",
        price : 12999
    },

]

const price = shoppingCart.reduce( (acc , item)  => acc + item.price , 0 )

console.log(price);