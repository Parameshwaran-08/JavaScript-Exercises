function tables(n){
    var j=1;
    while (j<=10){
        for (i=1; i<=10; i++){
            console.log(j+" * "+i+" = "+i*j);        
        }
        j++;
    }
}

tables(10);