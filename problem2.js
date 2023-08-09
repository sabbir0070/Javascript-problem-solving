
function matchFinder(string1, string2){
if(typeof (string1 && string2) === 'string' ){
if(string1.includes(string2)){
return true;
}
else{
return false;
}
}
else{
return 'Please provide a string value'
}
}

console.log(matchFinder('John Doe','ohn'));

