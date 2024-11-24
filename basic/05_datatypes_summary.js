//Data types in Java

/*

JavaScript is dynamically typed language

1. Primitive Datatype: 
String, Number, Boolean, null, undefined, Symbol, BigInt

2. Non-Primitive Datatype(Reference):
Array, Objects, Functions
*/

const score =100    //Number
const str="Hello"  //String
const bool=true    //Boolean
const a=null       //null
let b;            //undefined

const id=Symbol('123')   //Symbol
let c=664767462346287387n  //BigInt
console.log(c);

const hero=["spiderman","hulk","thor","captain"]   //array

let myObj={                  //Object
    name: "Soham",
    age: 20
}

const myfun=function(){             //function
console.log("Hello World");

}

myfun()

console.log(typeof hero);   //typeof ==>object
console.log(typeof myObj);  //typeof ==>object
console.log(typeof myfun);



// Memory

//Stack and Heap memory
//Primitve type uses stack memory and non-Primtive uses heap memory
