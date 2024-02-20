function rotatingArrayLeft({my_arr}={}){
    var result = [];
    for (i=1; i<my_arr.length; i++){
        result.push(my_arr[i]);
    }
    result.push(my_arr[0]);
    console.log(result);
}

rotatingArrayLeft({my_arr:[1,2,3,4,5]});
