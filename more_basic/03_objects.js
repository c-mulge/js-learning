//singleton

//object literals

// Object.create()   //method to create object using construtor method

const symb1=Symbol("key1")    //created symbol

const jsuser={
    name:"Sagar",
    age: 18,
    [symb1]:"mykey1",    //access symbol in object
    location: "Pune",
    email: "sagar@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Friday"]
}

//method to access object elements
// jsuser.name
// jsuser.age
// jsuser.location
// jsuser.email

// console.log(jsuser.name);
// console.log(jsuser["name"]);
// console.log(jsuser[symb1]);

jsuser.age="22"
// Object.freeze(jsuser)
// console.log(jsuser["age"]);


// console.log(jsuser);
jsuser.greeting=function(){
    console.log("Hello Js user");
    
}

jsuser.greetingtwo=function(){
    console.log(`Hello Js user,${this.name}`);
    
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())
