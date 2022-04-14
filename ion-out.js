const r = /iont/g

const ionOut = (S) =>{
    let debut =0
    let s = ""
    let l=[]
    for (let fin = 0;fin<S.length;fin){
        if (S[fin]==" "){
            s = S.slice(debut,fin)
            debut=fin+1
            if (r.test(s)){
                l.push(s.replace(r,"t"))
            }
        }
    }
    return l 
}