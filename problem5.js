
function canPay(changeArray,totalDue){
if(changeArray != 0){
let total = 0;
for(let num of changeArray){
total = total +num
}
if(totalDue <= total){
return true
}
else{
return false
}
}
else{
return "This array is empty"
}
}

const changeArray = [4,434];
const totalDue = 10;
console.log(canPay(changeArray,totalDue));

