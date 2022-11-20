console.log("This is tutorial 53");

// function greet(name , greettext=)
function greet(name , greettext="Greetings from meta") {                 // the value of greettext is dafault value
    console.log(greettext + " " + name);      // These are in local scope
    console.log(name + " is a Good Boy");
}

function sum(a,b,c) {
    let d = a + b + c;
    return d;
    console,log("Function is returned");   // This line will never Execute (Unreachable code )
    
}

let greettext1 = "Good Morning";
let name = "Bhavya";
let name1 = "Yash";
let name2 = "Gagan";
let name3 = "Sagar";
let name4 = "Anmol";

greet(name , greettext1);      // this defines function call and we can call multiple times
greet(name1 , greettext1);
greet(name2 , greettext1);                    // These are in global scope and anyone can use it
greet(name3 , greettext1);
greet(name4 );



let returnval = sum(1,2,3);
console.log(returnval);            // output is 6 because return value is defined in function

// let returnval = greet(name);
//  console.log(returnval);               // Output shows undefined because return valur is not given for greet


// console.log(name + " is a Good Boy");
// console.log(name1 + " is a Good Boy");
// console.log(name2 + " is a Good Boy");
// console.log(name3 + " is a Good Boy");
// console.log(name4 + " is a Good Boy");