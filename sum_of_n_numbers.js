function sum(n){
    var add = 0;
    var i = 0;
    while (i<=n){
        add+=i;
        i++;
    }
    return add;
}

console.log(sum(10));