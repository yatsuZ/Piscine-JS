const cutFirst = (S) =>{
    return S.slice(2)
}
const cutLast  = (S) =>{
    return S.slice(0, S.length - 2)
}
const cutFirstLast   = (S) =>{
    return cutFirst(cutLast(S))
}
const keepFirst  = (S) =>{
    return S.slice(0,2)
}
const keepLast  = (S) =>{
    return S.slice(-2)
}
const keepFirstLast  = (S)=>{
    return keepFirst(S)+keepLast(S)
}
console.log(keepFirstLast('af'));
// console.log(cutLast("salutm"));
// console.log(cutFirstLast("SAsalutVA"));
// console.log(keepFirst("SAsalutVA"));
// console.log(keepLast("SAsalutVA"));
// console.log(keepFirstLast("SAsalutVA"));