function first(L) {
    return L[0]
}
function last(L) {
    return L[L.length-1]
}
function kiss(L,l){
    return [first(L),last(l)]
}
console.log(kiss([5,9,9,4,9,4]))