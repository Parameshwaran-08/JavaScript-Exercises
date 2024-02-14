function fahrenheitConverter(celsius){
    var f = (celsius*(9/5))+32;
    return "The celsius value in fahrenheit is : "+f+" K";
}

var prompt = require("prompt-sync")();
var celsius = prompt("Enter the celsius value : ");
console.log(fahrenheitConverter(celsius));
console.log(typeof(celsius))