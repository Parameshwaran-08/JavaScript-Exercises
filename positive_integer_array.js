function positiveInteger(my_arr){
    var new_arr = [];
    for(i=0; i<my_arr.length; i++){
        if (my_arr[i]>0){
            new_arr.push(my_arr[i])
        }
    }
    return new_arr;
}

console.log(positiveInteger([2,3,-1,8,-4]));