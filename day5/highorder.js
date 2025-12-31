let list =["bag","Phone","Book","Pen"]
for (let i = 0;i< list.length;i++){
    console.log(list[i])
}

let bache=["Sonu","Monu","Chintu","Bantu"]
bache.forEach((value)=>{console.log(value + " Beta masti nahi")})

let bache1=["Sonu","Monu","Chintu","Bantu"]
bache.map((value)=>{console.log(value + " Beta 1 masti nahi")})

let num=[1,2,3,4,6,5];
let newArray=[];


num.forEach((value)=>{
    newArray.push(value*2);
})
console.log(newArray)