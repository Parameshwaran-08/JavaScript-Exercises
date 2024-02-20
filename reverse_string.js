function reverseString({str}={}){
    var str1 = str.split("");
    for (i=0; i<Math.floor(str1.length/2); i++){
        [str1[i],str1[str1.length-1-i]] = [str1[str1.length-1-i],str1[i]];
    }
    console.log(str1.join(""));
}

reverseString({str:"hi boya"});