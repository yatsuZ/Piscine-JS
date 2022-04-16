const citiesOnly = (L) =>{
    let l = []
    for (let i =0;i<L.length;i++){
        l+=[L[i].city]
    }
    return [l]
}