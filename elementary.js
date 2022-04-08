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
    let negatif_dividende = false
    let negatif_diviseur = false
    if(dividende<0) {
        dividende = 0-dividende
        negatif_dividende=true
    }
    if(diviseur<0){
        diviseur = 0-diviseur
        negatif_diviseur=true
    }
    if (dividende < diviseur){
         return [0,dividende]
     }
    let r = dividende
    let q = 0
    let t = 0
    while (multiply(diviseur,q)<dividende){
        if (multiply(diviseur,t)>=r){
            r -= multiply(diviseur,t)
            if (r<0){
                r+=multiply(diviseur,t)-multiply(diviseur,t-1)
                q +=t-1
                break
            }
            q += t
            t=0
        }
        t++
    }
    if (negatif_diviseur == negatif_dividende){
        return [q,r]
    }else if( negatif_dividende) {
        return[-q,-r]
    }else if (negatif_diviseur){
        return[-q,r]
    }
}

const divide =(a,b)=>{
    return division_euclidiene(a,b)[0]
}
const modulo = (a,b)=>{
    return division_euclidiene(a,b)[1]
}
// console.log(division_euclidiene(-123, -22))
// console.log(division_euclidiene(-123, 22)[1] == -13);
// console.log(division_euclidiene(123, -22)[1] == 13)
// console.log(division_euclidiene(-123, -22)[0] == (123,22)[0])