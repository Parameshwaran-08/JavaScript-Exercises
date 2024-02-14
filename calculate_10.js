function factorial(n){
    var fact = 1;
    for (i=n; i>=1; i--){
        fact*=i;
    }
    return fact;
}
var prompt = require('prompt-sync')();
var n = prompt("Enter the number : ");
console.log(factorial(n));