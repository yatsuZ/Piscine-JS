//recurcife
// const repeat = (S,N) => {
//     if (N == 0){
//         return ""
//     }else {
//         return S+repeat(S,N-1)
//     }
// }

/////////////////////////////////////////////////

// Iterative
const repeat =(S,N) => {
    var i = 0
    while (i <= N){
        S+=S
    }
    return S
}
