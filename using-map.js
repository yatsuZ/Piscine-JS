const citiesOnly = (L) =>{
    let l = []
    for (let i =0;i<L.length;i++){
        l.push(L[i].city)
    }
    if (l==[]){
        return L
    }
    return l
}