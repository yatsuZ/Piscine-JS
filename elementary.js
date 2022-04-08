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
    if (dividende < diviseur){
         return [0,dividende]
     }
    let r = dividende
    let q = 0
    let t = 0
    while (multiply(diviseur,q)<dividende){
        if (multiply(diviseur,t)>=r){
            if(multiply(diviseur,t) > r){
                t--
            }
            r -= multiply(diviseur,t)
            q += t
            t=0
        }
        t++
    }
    return [q,r]
}

const divide =(a,b)=>{
    return division_euclidiene(a,b)[0]
}
const modulo = (a,b)=>{
    return division_euclidiene(a,b)[1]
}
// console.log(division_euclidiene(5,11));