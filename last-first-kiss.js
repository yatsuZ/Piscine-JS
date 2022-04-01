function first(L) {
    return L[0]
}
function last(L) {
    return L[L.length-1]
}
function kiss(L,){
    return [last(L),first(L)]
}
console.log(kiss([1, 2, 3, 4, 5, 6]))