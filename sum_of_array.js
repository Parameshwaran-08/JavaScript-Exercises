function sumOfArray(my_arr){
    var i = 0;
    sum = 0;
    while (i < my_arr.length){
        sum += my_arr[i];
        i++;
    }
    return "The sum of the array is : "+sum;
}
var prompt = require("prompt-sync")();
var my_arr = [];
var length = prompt("Enter the length of your array : ");
for (i=0; i<length; i++){
    var item = prompt("Enter the number : ");
    my_arr.push(parseInt(item));
}
console.log(`Array: [${(my_arr)}]`);
console.log(sumOfArray(my_arr));

// Remember Type coercion (square brackets will be removed if array and strings are concatenated).