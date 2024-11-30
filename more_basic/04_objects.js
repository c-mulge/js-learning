//method to declare objects in js

// const tinderuser= new Object()
const tinderuser={}
tinderuser.id="1234"
tinderuser.name="sagar"
// console.log(tinderuser);

const reguser={
    email: "abc@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Sagar",
            lastname: "Mulge"
        }
    },
    isLoggedIn: true
}

// console.log(reguser);
// console.log(reguser.fullname);
// console.log(reguser.fullname.userfullname);
// console.log(reguser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign({},obj1,obj2)   //merge objects
// {}  is target and others are source here all source are merged into the target

const obj3={...obj1,...obj2}  //spread method to merge objects
// console.log(obj3);

const user=[
    {
        id:1,
        email:"abc@gmail.com"
    }
]

// console.log(user[0].email);
// console.log(tinderuser);

console.log(Object.keys(tinderuser));   //get keys into array
console.log(Object.values(tinderuser));   //get values into array

console.log(tinderuser.hasOwnProperty('id'));   //to check whether key is present in the object
