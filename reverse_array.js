function reverseArray({my_arr}={}){
    var result = [];
    for (i=my_arr.length-1; i>=0; i--){
        result.push(my_arr[i]);
    }
    console.log(result);
}

reverseArray({my_arr:[1,2,3,4,5]});