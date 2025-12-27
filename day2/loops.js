//Fixed Number of Iteration 

for (i=1;i<=10;i+=2){
    console.log(i)
}


let ip = 0;
let destination=45;


//Unknown number of Iteration

while(ip != destination){
    ip= ip + 1;
    console.log("TIME "+ ip)
}

let balance = 500;

while(balance > 0){
    balance -= 100;
    console.log(" Balance " + balance);
  
}

//do-while=> code run atleast one time

let num=40;
let guess=0;

do{
    guess=Number(prompt("Enter your number: "))
    if(guess==num)
    {
        console.log("you win")
        break;
    }
        
}
while(guess!=0)