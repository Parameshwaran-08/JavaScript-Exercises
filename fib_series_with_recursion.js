function fibWithRecursion (n){
    if (n<=1){
        return n;
    }else{
        return (fibWithRecursion(n-2)+fibWithRecursion(n-1));
    }
}

var prompt = require("prompt-sync")();
var n = prompt("Enter the number : ");

for ( var i=0; i<=n; i++){
    console.log(fibWithRecursion(i));
}
