function fibSeriesNoRecursion(n){
    var my_arr =[];
    for (i=0; i<n; i++){
        if (i>=2){
            var ans = (my_arr[my_arr.length-1])+(my_arr[my_arr.length-2]);
            my_arr.push(ans);
        }else{
            my_arr.push(i);
        }
    }
    console.log(my_arr);
}

var prompt = require("prompt-sync")();
var n = prompt("Enter the number : ");
(fibSeriesNoRecursion(n));