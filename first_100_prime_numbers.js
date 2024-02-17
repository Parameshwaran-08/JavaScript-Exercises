function primeOrNot(n){
    var count =0;
    for (var j=2; j<=n; j++){
        if (j===2){
            {};
        }else if (j>2){
            var i = 2;
            while (i<=j){
              if(j%i===0){
                count++;
              }
              i++;
            }
        }
        if (count<=1){
          console.log(j);          
        }
        count=0;
    }
}

primeOrNot(100);