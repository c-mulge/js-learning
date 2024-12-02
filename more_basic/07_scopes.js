//scopes

var c=300    //global scope

if(true){   //block scope
    let a=10
    const b=20
    var c=30
}

// console.log(a);  //not defined
// console.log(b);  //not defined
console.log(c);  //30

