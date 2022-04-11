const chunk = (L,diviseur) =>{
    let l = []
    let vase=[]
    for (let i = 0;i<L.length;i++){
        if (vase.length==diviseur){
            l.push(vase)
            vase = []
        }
        vase.push(L[i])
        
    }
    if (vase.length!=0){
        l.push(vase)
    }
    return l
}

// console.log(chunk(['a', 'b', 'c', 'd'], 3),"\n",[['a', 'b','c'],['d']])