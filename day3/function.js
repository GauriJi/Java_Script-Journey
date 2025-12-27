function greet(name){
    console.log("Hello " + name)
}
greet("Gaurav")
greet("Amit")
greet("Saurab")
greet("Rahul")
greet("Vaibhav")

// function add(a,b){
//     return a+b;
// }
// console.log(add(3,4))



 
function add(...num){ //spread Operator 
    sum = 0 ;
    for(let i= 0; i<num.length;i++){
        sum = sum+num[i];

    }
    return sum;
}
let final = add(1,6,1,6,5)
console.log(final)

//Arrow Function 
