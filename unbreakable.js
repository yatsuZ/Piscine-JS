
const split = (L,seperateur) =>{
    const m = seperateur
    let l = []
    let element = ""
    let fin=0
    if (m==undefined){
        l.push(L)
    }else if (m=="" || m==''){
        
        for (let i =0;i<L.length;i++){
            element += L[i]
            l.push(element)
            element =""
        }
    }else{
        for (let i =0;i<=L.length-m.length;i++){
            
            fin = m.length+i
            
            if (L.slice(i,fin)!=m){
                element += L[i]
            }else{
                l.push(element)
                element=""
                i=fin-1
            }
        }
        l.push(element)
    }
    return l
}

// const test = 'The quick brown fox jumps over the lazy dog.'
// console.log(split(test,"h"))