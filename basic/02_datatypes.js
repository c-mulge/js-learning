"use strict";  //treat all JS code as newer version

// alert(3+3)   //we are using nodejs, not browser
//it dosen't work in nodejs

console.log("hey,how r u?")
//code readability should be high. It have high priority

let name="Channveer"
let age=19
let isLoggedIn=true

console.table([name,age,isLoggedIn])

/*
Data Types:
1. number ==>
2. BigInt
3. string ==> ""
4. boolean ==>true/false
5. null  ==>standalone value
6. undefined ==>declared but not defined
7. symbol ==>used in react to define them unique
8. object

*/ 

//NaN - Not a Number (It is also the only value in JavaScript that is not equal to itself.)

//typeof is used to return the data type 
console.log(typeof age)
//typeof undefined is undefined. undefined is a normal identifier
//typeof null is object. null is a keyword
