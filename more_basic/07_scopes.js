//scopes

var c=300    //global scope

if(true){   //block scope
    let a=10
    const b=20
    var c=30
}

// console.log(a);  //not defined
// console.log(b);  //not defined
// console.log(c);  //30

function one(){
    const username="sagar"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}

one()

if(true){
    const user="sagar"
    if(user=="sagar"){
        const web=".com"
        // console.log(user+web);
    }
    // console.log(web);  //error
}
// console.log(user);  //error

//+++++++++++++++++++++++++++++TOPIC+++++++++++++++++++++++++++++++

function addone(num){
    return num+1
}

// console.log(addone(5));


//addTwo(5)   //cannot declare before declaration 
const addTwo=function(num){      //expression
    return num+2
}

console.log(addTwo(5));

