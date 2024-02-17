function sumOfNPositiveIntegers(n){
    var sum = 0;
    for (i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
}

var prompt = require("prompt-sync")();
var n = prompt("Enter the number : ");
console.log(sumOfNPositiveIntegers(n));