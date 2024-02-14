function sumOfEven(n){
    var i = 1;
    var add = 0;
    while (i<n){
        if (i>10 && i<30 && i%2===0){
            add += i;
        }
        i++;
    }
    return add
}
const prompt = require("prompt-sync")();
var n = prompt("Enter the value of n : ")
console.log(sumOfEven(n));