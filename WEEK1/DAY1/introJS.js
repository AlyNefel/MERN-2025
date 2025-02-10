// Global Scope
//🥷 Variables declared outside any function or block have global scope. They can be accessed from anywhere in the code.

var globalVar = "I am global";

function showGlobalVar() {
    console.log(globalVar); 
}

showGlobalVar(); 
console.log(globalVar); 


//🥷 Local Scope
//🥷 Variables declared within a function or block have local scope. They can only be accessed within that function or block.

function showLocalVar() {
    var localVar = "I am local";
    console.log(localVar); 
}

showLocalVar(); 
console.log(localVar); 


//🥷 Block Scope
//🥷 With ES6, let and const introduced block scope, which means variables declared with these keywords are only accessible within the block they are defined in.
if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); 
}

 console.log(blockVar); 



//🥷 Hoisting
console.log(y); 
var y = 5;


//🥷Quiz
let b = 10;
if (true) {
  let b = 20;
  console.log(b); 
}
 console.log(b);

//🥷
const obj = { x: 10 };
obj.x = 20;
console.log(obj.x);

obj = { x: 30 }; 
console.log(obj.x);


function quiz3() {
    const age = 25;
    if (true) {
        const age = 26;
        console.log(age); 
    }
    console.log(age); 
}
quiz3();
//🥷