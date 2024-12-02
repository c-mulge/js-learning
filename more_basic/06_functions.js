//functions

function world() {         //function definition 
    console.log("Hello World");   
}
// world()    //function calling

const a=10
const b=20

// function addtwonumber(x,y){    //parameters
//     console.log(x+y)
// }
// addtwonumber(a,b)   //arguments


function addtwonumber(x,y){    
    return x+y        //return value
}

const result=addtwonumber(a,b)
// console.log(result);

function calculateprice(...num1){  //rest operator
return num1
}

// console.log(calculateprice(2,3,4));  //[ 2, 3, 4 ]

const user={
    name: "sidd",
    class: "tyb"
}

function handleObject(anyObject){  //function taking object as parameter
    // console.log(`Username is ${anyObject.name} and class is ${anyObject.class}`);
}

handleObject(user)  //object
handleObject({  //passing direct object in function
    name: "Soham",
    class: "tyb"
})


const mynewArray=[1,2,3,4,5]
function returnArray(getarray){
    return getarray[1]
}

// console.log(returnArray(mynewArray));

