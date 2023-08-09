
function cubeNumber (number) {
if(typeof number === 'number'){
return number **3;
}
else{
return 'Please provide a valid number';
}
}

const result = cubeNumber(4)

console.log(result);
