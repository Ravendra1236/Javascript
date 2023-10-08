// Destructuring

const course = {
    coursename: "Master in js",
    price : "999",
    courseIns : "Ravendra"
}
// course.courseIns

const {courseIns : teacher} = course

// console.log(courseIns);
console.log(teacher);


// API written in : Json (Javascript format)


// 1.
// keys and values are in " "
// {
//     "name": "Ravendra",
//      "price" : 'free'
// }

// 2.
// [
//     {},
//     {},
//     {}
// ]
