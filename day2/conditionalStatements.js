let age = 35;

if (age >=45){
    console.log("You are adult")//If this works(true) every other condition dont 
}
else if (age >=18){
    console.log("You can vote")
}else{
    console.log("You cannot vote")
}

//Ternary Operator

let age1 = 16;

age1>=18 ? console.log("You can vote ") : console.log("You cannot vote");

//or

let agee=55;

let result = agee >=24 ? 'Yes':'No'

console.log(result)

//Switch-Case

let option =6;

switch (option){
    case 1 : console.log("One ")
    break;
    case 2 : console.log("Two ")
    break;
    case 3 : console.log("Three ")
    break;
    default : console.log("Invalid")

}

let a = 12;
let option1 = '*';
let b = 5;

switch(option1){
    case '+':console.log(a+b)
    break;
    case'-':console.log(a-b)
    break;
    case '*':console.log(a*b)
    break;
    default:console.log("NONE")
}
