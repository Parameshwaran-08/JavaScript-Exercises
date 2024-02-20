function primeWithRange({start=0, range=0}={}){
    for (j=start; range>=1; j++){
        var i=2;
        var count = 0;
        while (i<=j){
            if (j%i===0){
                count += 1;
            }
            i++;  
        }
        if (count<2){
            if (j===1){
                console.log("1 is neither prime nor composite number.");
                range--;
            }else{
                console.log(j);
                range--;
            }
        }
        count= 0;
    }
}

primeWithRange({start:5, range:10});