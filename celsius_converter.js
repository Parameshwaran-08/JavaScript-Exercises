function celsiusConverter(fahrenheit){
    var c = (fahrenheit - 32) * (5 / 9) ;
    return "The celsius value in fahrenheit is : "+Math.round(c)+" C";
}

var prompt = require("prompt-sync")();
var fahrenheit = prompt("Enter the fahrenheit value : ");
console.log(celsiusConverter(fahrenheit));
