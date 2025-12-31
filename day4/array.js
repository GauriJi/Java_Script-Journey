let name1 = ["gaurav","amit","kumkum"]
console.log(name1.length)

name1[0]="Ram";
//we can mutate an array
name1.push("Alio")//add in last index
name1.pop()//remove the element from last 
console.log(name1)

let name2 = [1,"aman","@"]//Heterogenous array in js 
name2.push({age:21})//object
console.log(name2)
console.log(name1.indexOf("shyam"))//if the value is not there in that index ,it will return -1 