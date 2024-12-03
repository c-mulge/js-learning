// Arrow Function and this keyword

const user={
    username: "sagar",
    price: 999,

    welcome:function(){
        console.log(`${this.username}, welcome to our website`);
    }
}

// user.welcome()
// Object.freeze(user)
// user.username="soham"
// user.welcome()

// function one(){
//     let username="sagar"
//     console.log(this.username);  //undefined
// }

// one()

const one=()=>{
    let username="sagar"
    // console.log(username);
    // console.log(this);   //{}
    // console.log(this.username);   //undefined    
}

// one()

// const two=(num1,num2)=>{
//     return num1+num2   //explicit return
// }

// console.log(two(1,2));

// const two=(num1,num2) => num1+num2

// const two=(num1,num2) => (num1+num2)   //implicit return
const two=(num1,num2) => ({username: "sagar"})    //object in arrow function
console.log(two(1,2));
