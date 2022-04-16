const citiesOnly = (L) =>{
    let l = []
    for (let i =0;i<L.length;i++){
        l.push(L[i].city)
    }
    if (l==undefined){
        return L
    }
    return l
}