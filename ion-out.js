const r = /ion/g

const ionOut = (S) =>{
    let debut =0
    let s = ""
    let l=[]
    let b =""
    for (let fin = 0;fin<S.length;fin++){
        if (S[fin]==" "){
            s = S.slice(debut,fin)
            debut=fin+1
            if (r.test(s)){
                b=s.replace(r,"")
                l.push(b)
            }
            else {
                l.push(s)
            }
        }
    }
    s = S.slice(debut,S.length)
    if (r.test(s)){
        b=s.replace(r,"")
        l.push(b)
        }
    else {
        l.push(s)
        }
    return l 
}
// console.log();
// console.log(ionOut('attention, direction'))