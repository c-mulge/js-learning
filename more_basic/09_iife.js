//Immediately Invoked Function Expressions (IIFE)

(function one(){    //named iife
    console.log(`DB Connected`);
})();   //must put semicolon
// one()


//Due global scope variables, sometimes we might get issue so tackle it we use iife

// ()()  //second parenthesis is fro execution

(()=>{    //unamed iife
    console.log(`Dbbbbbb`);
})()

// ((name)=>{
//     console.log(`Dbbbbbb ${name}`);
// })('sagar')