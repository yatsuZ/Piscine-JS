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
const division_euclidiene=(dividende,diviseur) =>{
    let quotien =0
    let reste=0
    let q = 0
    while(diviseur<dividende){
        // console.log(diviseur);
        // console.log(dividende);
        if (multiply(diviseur,q)>=dividende){
            q--
            dividende -= multiply(diviseur,q)
            quotien += q
            q=0
        }
        q++
    }
    reste = dividende
    // if (reste ==0){
    //     return quotien
    // }
    return [quotien,reste]
}

const divide =(a,b)=>{
    return division_euclidiene(a,b)[0]
}
const modulo = (a,b)=>{
    return division_euclidiene(a,b)[1]
}
// console.log(divide(10,2));