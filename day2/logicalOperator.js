// and(&&) => All the condition must be true for this 
let age = 12;
let gender = "Male"

if(age >= 18 && gender=="Male"){
    console.log("You are Adult Male")
}else{
    console.log("You are not")
}

// OR => Atleast one condition should be true 

let age1 = 23;
let gender1="Female"
if(age1 >= 18 || gender1=="Male"){
    console.log("You are Adult Male")
}else{
    console.log("You are not")
}

//NOT => !=  it reverse the condition
let num =5;

if (num % 2 != 0){
    console.log("Odd")
}

console.log(!true)