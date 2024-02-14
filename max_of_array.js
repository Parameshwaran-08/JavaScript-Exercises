function maxOfArray(my_arr){
    var max = 0;
    for(i=0; i<my_arr.length; i++){
        if (my_arr[i]>max){
            max = my_arr[i];
        }
    }
    return max;
}

console.log(maxOfArray([1,34,106,7,99]));