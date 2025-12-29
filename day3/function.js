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
let addition= (a,b)=>{
    return (a+b);
}
console.log(addition(1,1))

let add1=(x,y)=> x+y;
console.log(add1(1,2))

//HOISTING

function minus1(a,b){
    return a-b;

}
console.log(minus1(6,5))


let minus=(a,b)=>{
    return a-b;
}
console.log(minus(4,2))


//High ORder Function

function sum(a,b,gg){
    let result =(a+b);
    gg(result);
}
function showResult(result){
    console.log(result)
}
sum(22,5,showResult)