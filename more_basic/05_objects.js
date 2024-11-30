//destructure object

const course={
    coursename: "js",
    price: 999,
    instructor: "hitesh"
}

// course.price

// const {instructor}=course   // same as below
const {instructor: ins}=course    //ins is shortcut for instructor
console.log(ins);

// const navbar=({company})=>{

// }
// navbar(company="hitesh")            //concept of react.js


//{} is used to deconstruct the object

