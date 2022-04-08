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
    let negatif = false
    if (dividende<0 && diviseur<0){
        dividende = 0 -dividende
        diviseur = 0 - diviseur
    }else if(dividende<0) {
        dividende = 0-dividende
        negatif=true
    }else if(diviseur<0){
        diviseur = 0-diviseur
        negatif=true
    }
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
    if (negatif) {
        return[0-q,0-r]
    }else{
        return [q,r]
    }
}

const divide =(a,b)=>{
    return division_euclidiene(a,b)[0]
}
const modulo = (a,b)=>{
    return division_euclidiene(a,b)[1]
}
// console.log(division_euclidiene(5,11));