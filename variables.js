//variables 
// datatype variablename = value

var name1 = "Gaurav Bhandari"

console.log(name1)


//Var = var has  global scope {}
if (true){
    var age = 21
}
console.log(age);

// let and const are Temporal Dead zone it can be called when the value is not assigned 
//in let and var we can reassign value  but not in const
console.log(x);
var x=1; // it gives you error 

// but in var it gives the undefined not an error
console.log(a);
let a=1;//undefined