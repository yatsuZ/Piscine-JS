const multiply = (a,b) =>{
    let result = 0
    if (a<0 && b<0) {
        for (let i=0; i>b ;i--){
            result -= a
        }
    }else if (b<0) {
        for (let i=0; i<a ;i++){
            result += b
        }
    }else {
        for (let i=0; i<b ;i++){
            result += a
        }
    }
    return result
}
///////////////////////////////////////////////////////
//console.log(multiply(34, 78));