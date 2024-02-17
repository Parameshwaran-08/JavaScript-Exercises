function primeOrNot(n){
    var count = 0;
    if (n===1){
        return("Its a neither prime nor composite number !")
    }else if (n===2){
        return("Its a prime number !")
    }else if (n>2){
        for (var i=2; i<=n; i++){
            if (n%i===0){
                count++
            }if (count>1){
              return false       
            }
        }
        return true
    }
}

var prompt = require("prompt-sync")();
var n = parseInt(prompt("Enter the number : "));
console.log(primeOrNot(n));