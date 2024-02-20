function rotatingArrayRight({my_arr}={}){
    var result = [];
    result.push(my_arr[my_arr.length-1]);
    for (i=0; i<my_arr.length-1; i++){
        result.push(my_arr[i]);
    }
    console.log(result);
}

rotatingArrayRight({my_arr:[1,2,3,4,5]});